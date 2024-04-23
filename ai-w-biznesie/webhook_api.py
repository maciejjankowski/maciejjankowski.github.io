import requests

# Define the CRM API endpoint
crm_api_endpoint = "https://example.com/api/v1/orders"

# Define the ERP API endpoint
erp_api_endpoint = "https://example.com/api/v1/orders"

# Define the webhook URL
webhook_url = "https://example.com/webhook/new_order"

# Create a function to handle new orders in the CRM
def handle_new_order(order):
    # Extract the relevant data from the order
    order_id = order["id"]
    product_id = order["product_id"]
    quantity = order["quantity"]

    # Create a new order in the ERP system
    erp_order = {
        "product_id": product_id,
        "quantity": quantity
    }

    response = requests.post(erp_api_endpoint, json=erp_order)

    # If the order was created successfully, send a webhook notification
    if response.status_code == 201:
        requests.post(webhook_url, json={"order_id": order_id})

# Start a webhook server to listen for new orders in the CRM
def start_webhook_server():
    from flask import Flask, request

    app = Flask(__name__)

    @app.route(webhook_url, methods=["POST"])
    def webhook():
        data = request.get_json()
        handle_new_order(data)
        return "OK"

    app.run()

# Start the webhook server
start_webhook_server()
