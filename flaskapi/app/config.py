import os
from dotenv import load_dotenv

base_directory = os.path.abspath(os.path.dirname(__file__))
env_path = os.path.join(base_directory, '.env')

load_dotenv(env_path)

class Config:
    SQLALCHEMY_DATABASE_URI = os.path.join('sqlite:///' + base_directory, 'app.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JWT_SECRET_KEY = '67D35D63146AF81D9C1F6C33DE787' #Do not use in production
    JWT_BLACKLIST_ENABLED = True
    JWT_BLACKLIST_TOKEN_CHECKS = ['access', 'refresh']

    STRIPE_PUBLISHABLE_KEY = os.environ.get('STRIPE_PUBLISHABLE_KEY')
    
    STRIPE_SECRET_KEY = os.environ.get('STRIPE_SECRET_KEY')
