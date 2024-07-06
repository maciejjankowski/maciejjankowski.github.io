# send email using sendgrid

import projekty.migration.modules.sendgrid_email as sendgrid_email
from sendgrid.helpers.mail import Mail, Email, Content

EMAIL_SUBJECT= "[WAŻNE] Zmiana hasła platformy ecommerce [XXX]"
EMAIL_MESSAGE = "Dzień dobry\
Przenieśliśmy Państwa konto na naszą nową platformę sklepu internetowego.\
Ze wzgledów bezpieczeństwa prosimy o zmianę hasła pod następującym linkiem:\
https://example.com/change_password\
a następnie prosimy zalogować się i upewnić się, że wszystko działa jak należy.\
\
Sugerujemy używanie menedżera haseł, np. 1Password lub \
\
W razie wątpliwości co do wiarygodności niniejszej wiadomości prosimy o zapoznanie się z artykułem:\
https://example.com/migracja_platformy_ecommerce/\
"

def send_email(email_address, client_id, subject=EMAIL_SUBJECT, message=EMAIL_MESSAGE):
    """Sends an email using the SendGrid API.

    Args:
        email_address (str): The recipient's email address.
        subject (str): The email subject.
        message (str): The email body.

    Returns:
        bool: True if the email was sent successfully, False otherwise.
    """

    # Replace with your SendGrid API key
    api_key = "YOUR_SENDGRID_API_KEY"
    sg = sendgrid_email.SendGridAPIClient(api_key)

    from_email = Email("your_email@example.com")  # Replace with your sender email
    to_email = Email(email_address)
    content = Content("text/plain", message)
    mail = Mail(from_email, subject, to_email, content)

    try:
        response = sg.send(mail)
        if response.status_code == 202:
            return True
        else:
            print(f"Error sending email: {response.body}")
            log_error(f"Error sending email to #{client_id}: {email_address}: {response.body}")
            return False
    except Exception as e:
        print(f"Error sending email: {e}")
        log_error(f"Error sending email to #{client_id}: {email_address}: {response.body}")
        return False

def main():
    
    pass

if __name__ == "__main__":
    main()