from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from app.config import Config
from flask_jwt_extended import JWTManager

db = SQLAlchemy()
migrate = Migrate()
cors = CORS()
jwt = JWTManager()

def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(Config)
    register_dependencies(app)
    register_blueprints(app)

    return app

def register_dependencies(app):
    db.init_app(app)
    migrate.init_app(app, db)
    cors.init_app(app)
    jwt.init_app(app)

def register_blueprints(app, url_prefix='/api'):
    from app.users import bp as users_bp
    from app.courses import bp as courses_bp
    from app.tokens import bp as tokens_bp
    app.register_blueprint(users_bp, url_prefix=url_prefix)
    app.register_blueprint(courses_bp, url_prefix=url_prefix)
    app.register_blueprint(tokens_bp, url_prefix=url_prefix)