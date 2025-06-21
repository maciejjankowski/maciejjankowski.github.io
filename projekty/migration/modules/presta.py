# # presta.py
from secrets import PRESTA_API_URL, PRESTA_API_KEY

import requests
from requests.auth import HTTPBasicAuth
import base64
import json
from client_xml import generate_client_xml

PRESTA_AUTH_TOKEN = base64.b64encode(f'{PRESTA_API_KEY}:'.encode()).decode()
print(PRESTA_AUTH_TOKEN)


def create_client(client_data):
    """Creates a client record in PrestaShop using the API.

    Args:
        client_data (dict): A dictionary containing the client data to be created.
        presta_api_url (str): The base URL of the PrestaShop API.
        presta_api_key (str): The API key for accessing the PrestaShop API.

    Returns:
        dict: The response from the PrestaShop API, containing the newly created client data.
    """

    headers = {
        'Content-Type': 'application/json'
        # 'Authorization': f'Basic {PRESTA_AUTH_TOKEN}'
    }

    url = f'{PRESTA_API_URL}/customers/?output_format=JSON&ws_key={PRESTA_API_KEY}' # {PRESTA_API_TOKEN}@

    response = requests.post(url, headers=headers, auth=HTTPBasicAuth(PRESTA_API_KEY, ''), data=generate_client_xml(client_data))
    
    if response.status_code == 201:
        print(f"Client created successfully:{client_data['id']}:\n{response.text}")
        raise Exception("get ID from json")
        return (True, client_data['id'], response)
    else:
        print(f"Error creating client:{client_data['id']}:\n{response.text}")
        return (False, client_data['id'], response)

def main():
    client_data = {
        'id': '17910',
        'firstname': 'Hugo', 
        'lastname': 'Šulc', 
        'email': 'recepce@fornica.cz', 
        'password': 'AKZLKWuwzM1XuwyK89KSP9fYhfcDjj', 
        'active': 1}
    
    create_client(client_data)


if __name__ == "__main__":
    main()


