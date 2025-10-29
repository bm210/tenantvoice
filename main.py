import os
from flask import Flask
from dotenv import load_dotenv
from flask_login import LoginManager
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from services.users.models import db, User
from services.users.profiles import TenantProfile, LandlordProfile, ServiceProviderProfile
from services.users.routes import users_bp
from services.users.profile_routes import profile_bp
from services.properties.routes import properties_bp
from services.reviews.routes import reviews_bp
from services.bookings.routes import bookings_bp
from services.services.routes import services_bp
from services.chat.routes import chat_bp
from services.chat.models import Chat
from services.applications.routes import applications_bp
from services.applications.models import Application
from services.connections.routes import connections_blueprint
from services.connections.models import Connection
from services.audit.routes import audit_bp
from services.audit.models import AuditLog
from services.recommendations.routes import recommendations_bp

def create_app():
    app = Flask(__name__)
    load_dotenv()

    # Security / config
    app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'a_default_secret_key')
    app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL')
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config["JWT_SECRET_KEY"] = os.environ.get('JWT_SECRET_KEY', 'super-secret') # Change this!

    # CORS configuration - read allowed origins from environment variable (comma-separated).
    allowed_origins = os.environ.get(
        "CORS_ORIGINS",
        "https://tenantvoice1-k8b096uul-k-n-23s-projects.vercel.app"
    )
    allowed_origins = [o.strip() for o in allowed_origins.split(",") if o.strip()]

    # Apply CORS to API routes only, allow credentials and specific methods
    CORS(
        app,
        resources={r"/api/*": {"origins": allowed_origins}},
        supports_credentials=True,
        methods=["GET", "POST", "PUT", "DELETE"]
    )

    jwt = JWTManager(app)
    db.init_app(app)
    login_manager = LoginManager()
    login_manager.init_app(app)

    @login_manager.user_loader
    def load_user(user_id):
        return User.query.get(int(user_id))

    app.register_blueprint(users_bp, url_prefix='/api')
    app.register_blueprint(profile_bp, url_prefix='/api')
    app.register_blueprint(properties_bp, url_prefix='/api')
    app.register_blueprint(reviews_bp, url_prefix='/api')
    app.register_blueprint(bookings_bp, url_prefix='/api')
    app.register_blueprint(services_bp, url_prefix='/api')
    app.register_blueprint(chat_bp, url_prefix='/api')
    app.register_blueprint(applications_bp, url_prefix='/api')
    app.register_blueprint(connections_blueprint, url_prefix='/api')
    app.register_blueprint(audit_bp, url_prefix='/api')
    app.register_blueprint(recommendations_bp, url_prefix='/api')

    with app.app_context():
        db.create_all()

    return app

if __name__ == "__main__":
    app = create_app()
    app.run(debug=True, host="0.0.0.0", port=int(os.environ.get("PORT", 3000)))
