from functools import wraps
from flask import jsonify
from flask_login import current_user

def roles_required(*required_roles):
    """Decorator to require a user to have one of the specified roles."""
    def decorator(f):
        @wraps(f)
        def decorated_function(*args, **kwargs):
            if not current_user.is_authenticated:
                return jsonify({"message": "Authentication required"}), 401
            if current_user.user_type not in required_roles:
                return jsonify({"message": "You do not have permission to access this resource"}), 403
            return f(*args, **kwargs)
        return decorated_function
    return decorator
