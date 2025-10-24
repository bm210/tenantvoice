from flask import Blueprint, request, jsonify
from flask_login import login_user, logout_user, login_required
from services.users.models import db, User
from services.users.profiles import TenantProfile, LandlordProfile, ServiceProviderProfile
from services.audit.routes import log_action

users_bp = Blueprint('users', __name__)

ALLOWED_USER_TYPES = {'tenant', 'landlord', 'service_provider'}

@users_bp.route("/users/signup", methods=["POST"])
@log_action('User Signup')
def signup():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')
    user_type = data.get('user_type', 'tenant') # Defaults to 'tenant'

    if user_type not in ALLOWED_USER_TYPES:
        return jsonify({"message": "Invalid user type specified"}), 400

    if User.query.filter_by(email=email).first():
        return jsonify({"message": "User already exists"}), 409

    new_user = User(
        username=username,
        email=email,
        user_type=user_type
    )
    new_user.set_password(password)
    db.session.add(new_user)
    db.session.flush() # Flush to get the new_user.user_id

    # Create a profile based on user type
    if user_type == 'tenant':
        new_profile = TenantProfile(user_id=new_user.user_id)
        db.session.add(new_profile)
    elif user_type == 'landlord':
        new_profile = LandlordProfile(user_id=new_user.user_id)
        db.session.add(new_profile)
    elif user_type == 'service_provider':
        service_type = data.get('service_type')
        if not service_type:
            return jsonify({'message': 'Service type is required for service providers'}), 400
        new_profile = ServiceProviderProfile(user_id=new_user.user_id, service_type=service_type)
        db.session.add(new_profile)

    db.session.commit()

    return jsonify({"message": f"User created successfully as a {user_type}"}), 201

@users_bp.route("/users/login", methods=["POST"])
@log_action('User Login')
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    user = User.query.filter_by(email=email).first()

    if not user or not user.check_password(password):
        return jsonify({"message": "Invalid credentials"}), 401

    login_user(user)
    return jsonify({"message": "Logged in successfully"})

@users_bp.route("/users/logout")
@login_required
@log_action('User Logout')
def logout():
    logout_user()
    return jsonify({"message": "Logged out successfully"})

@users_bp.route("/users/user_by_email/<email>")
@login_required
def get_user_by_email(email):
    """Gets a user's information by email."""
    user = User.query.filter_by(email=email).first()

    if not user:
        return jsonify({"error": "User not found"}), 404

    return jsonify({
        "user_id": user.user_id,
        "username": user.username,
        "email": user.email,
        "user_type": user.user_type
    })
