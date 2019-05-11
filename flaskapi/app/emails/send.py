from flask import current_app
from threading import Thread

def send_aync_email(msg):
    with current_app._get_current_object().app_context():
        mail.send(msg)

def send_email(subject, sender, recipients, text_body, html_body):
    msg = Message(subject, sender=sender, recipients=recipients)
    msg.body = text_body
    msg.html = html_body
    Thread(
        target=send_aync_email,
        args=(msg)
    ).start()
