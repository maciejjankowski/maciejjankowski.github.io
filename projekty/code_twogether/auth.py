import requests
from flask import redirect, url_for, session
from dotenv import load_dotenv
import os

load_dotenv()

GITHUB_CLIENT_ID = os.getenv('GITHUB_CLIENT_ID')
GITHUB_CLIENT_SECRET = os.getenv('GITHUB_CLIENT_SECRET')

def github_login():
    return redirect(f'https://github.com/login/oauth/authorize?client_id={GITHUB_CLIENT_ID}')

def github_callback():
    code = request.args.get('code')
    if code:
        # Wymień kod na token dostępu
        response = requests.post(
            'https://github.com/login/oauth/access_token',
            data={
                'client_id': GITHUB_CLIENT_ID,
                'client_secret': GITHUB_CLIENT_SECRET,
                'code': code
            },
            headers={'Accept': 'application/json'}
        )
        if response.ok:
            access_token = response.json()['access_token']
            # Pobierz dane użytkownika z API GitHub
            user_data = requests.get(
                'https://api.github.com/user',
                headers={'Authorization': f'token {access_token}'}
            ).json()
            # Zapisz dane użytkownika w bazie danych
            # ...
            session['user_id'] = user_data['id']
            return redirect(url_for('index'))
    return 'Błąd logowania za pomocą GitHub'