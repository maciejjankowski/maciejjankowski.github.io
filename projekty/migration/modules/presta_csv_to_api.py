# presta_csv_to_api.py
import csv
from prestapyt import PrestaShopWebService
import secrets
error_csvfile = open('data/_log_clients_failed.csv', 'w', newline='', encoding='utf-8')
success_csvfile = open('data/_log_clients_successfull.csv', 'w', newline='', encoding='utf-8')

def handle_failure(presta_client, response):
    fieldnames = presta_client.keys()  # Get fieldnames from the first record
    writer = csv.DictWriter(error_csvfile, fieldnames=fieldnames, delimiter=';')
    writer.writerow(presta_client)
    print(response) 
    exit()

def handle_success(presta_client):
    fieldnames = presta_client.keys()  # Get fieldnames from the first record
    writer = csv.DictWriter(success_csvfile, fieldnames=fieldnames, delimiter=';')
    writer.writerow(presta_client)


def create_clients_from_csv(csv_file_path, presta_api_url, presta_api_key):
    """Creates clients in PrestaShop from a CSV file.

    Args:
        csv_file_path (str): The path to the CSV file containing client data.
        presta_api_url (str): The base URL of the PrestaShop API.
        presta_api_key (str): The API key for accessing the PrestaShop API.
    """

    prestashop = PrestaShopWebService(presta_api_url, presta_api_key)

    with open(csv_file_path, 'r', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile, delimiter=';')
        for row in reader:
            client_data = {
                'id': row['Customer ID'],
                'firstname': row['First Name *'],
                'lastname': row['Last Name *'],
                'email': row['Email *'],
                'password': row['Password *'],
                'active': int(row['Active (0/1)']),
                # Add other fields as needed
            }

            try:
                response = prestashop.add('customers', client_data)
                if response.success:
                    handle_success(row, response)
                else:
                    print(f"Error creating client: {row['Customer ID']}: {response.errors}")
                    handle_failure(row, response)
            except Exception as e:
                print(f"Error creating client: {row['Customer ID']}: {e}")
                handle_failure(row, e)

def main():
    csv_file_path = 'data/3_presta_clients.csv'  # Replace with your CSV file path
    presta_api_url = secrets.PRESTA_API_URL
    presta_api_key = secrets.PRESTA_API_KEY

    create_clients_from_csv(csv_file_path, presta_api_url, presta_api_key)

if __name__ == "__main__":
    main()

