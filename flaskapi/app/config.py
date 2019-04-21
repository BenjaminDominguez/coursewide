import os

base_directory = os.path.abspath(os.path.dirname(__file__))

class Config:
    SQLALCHEMY_DATABASE_URI = os.path.join('sqlite:///' + base_directory, 'app.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JWT_SECRET_KEY = '67D35D63146AF81D9C1F6C33DE787' #Do not use in production
