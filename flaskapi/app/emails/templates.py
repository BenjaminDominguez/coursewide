from app.emails.send import send_email
from flask import current_app
from flask_jwt_extended import create_access_token

def send_teacher_confirmation(user_obj):
    subject = "Congratulations! You have been accepted to teach for coursewide!"
    recipients = [user_obj.email]
    sender = current_app.config['MAIL_CONFIG']['MAIL_USERNAME']
    text_body = "Congrats {}".format(user_obj.full_name())
    html_body = "<p>" + text_body + "</p>"

    def generate_token(user_obj):

        user_claims = user.obj.json_response()
        user_claims['create_onetime_password_token'] = True

        token = create_access_token(identity=user_obj.id, user_claims=user_claims)

        return token

    token = generate_token(user_obj)

    send_email(
        subject, sender, recipients, text_body, html_body
    )

    return ('Sent Email', token, 200)

def send_teacher_registration_email(user_obj):

    subject = "Thank you for applying with coursewide!"
    recipients = [user_obj.email]
    sender = current_app.config['MAIL_CONFIG']['MAIL_USERNAME']
    text_body = """
    Thank you for applying with coursewide {}
    We will get back to you within a couple hours with confirmation on your application.
    """.format(user_obj.full_name())
    html_body = "<p>" + text_body + "</p>"

    send_email(
        subject, sender, recipients, text_body, html_body
    )

    return ('Sent email', None, 200)
