# read idosell clients
import redis
from projekty.migration.modules.sendgrid_email import sendgrid_send
from projekty.migration.modules.mappers import map_client_record
import projekty.migration.modules.presta as presta
import projekty.migration.modules.idosell as idosell


redis_conn = redis.Redis()
p = redis_conn.pubsub()

def subscribe_to_redis():
    p.subscribe("idosell_client_password_change")
    p.subscribe("idosell_client_create")


def read_clients():
    clients = idosell.get_clients()
    return clients

def notify_idosell_client_password_change(idosell_client_record):
    try:
        sendgrid_send(idosell_client_record.email, idosell_client_record.id)
        p.publish("idosell_client_password_changed", idosell_client_record.id)
    except:
        p.publish("idosell_client_password_change_failed", idosell_client_record.id)

def create_client(client_record):
    try:
        presta.create_client(client_record)
        p.publish("presta_client_create", client_record)
    except:
        p.publish("presta_client_create_failed", client_record)


def process_client_record(idosell_client_record):
    presta_client_record = map_client_record(idosell_client_record)
    create_client(presta_client_record)
    
    
def main():
    subscribe_to_redis()
    
if __name__ == "__main__":
    main()