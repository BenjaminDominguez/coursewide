import os
from dotenv import load_dotenv

base_directory = os.path.abspath(os.path.dirname(__file__))
env_path = os.path.join(base_directory, '.env')

load_dotenv(env_path)

class Config:

    FRONTEND_URL = 'http://localhost:3000/'

    SQLALCHEMY_DATABASE_URI = 'mysql://{0}:{1}@localhost/coursewide'.format(
        os.environ.get('MYSQL_USERNAME'), os.environ.get('MYSQL_PASSWORD'))
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JWT_SECRET_KEY =  os.environ.get('JWT_SECRET_KEY')#Do not use in production
    JWT_BLACKLIST_ENABLED = True
    JWT_BLACKLIST_TOKEN_CHECKS = ['access', 'refresh']

    STRIPE_PUBLISHABLE_KEY = os.environ.get('STRIPE_PUBLISHABLE_KEY')
    
    STRIPE_SECRET_KEY = os.environ.get('STRIPE_SECRET_KEY')

    MAIL_CONFIG = {
        MAIL_SERVER: os.environ.get('MAIL_SERVER'),
        MAIL_PORT: os.environ.get('MAIL_PORT'),
        MAIL_USE_TLS: os.environ.get('MAIL_USE_TLS'),
        MAIL_USERNAME: os.environ.get('MAIL_USERNAME'),
        MAIL_PASSWORD: os.environ.get('MAIL_PASSWORD')
    }
