from functools import wraps
from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required, get_jwt_identity
from services.users.models import db
from services.audit.models import AuditLog

audit_bp = Blueprint('audit', __name__)

def log_action(action):
    def decorator(fn):
        @wraps(fn)
        def wrapper(*args, **kwargs):
            # Call the original function
            response = fn(*args, **kwargs)

            # Log the action
            try:
                user_id = get_jwt_identity()
            except Exception:
                user_id = None
            
            details = f"Request: {request.method} {request.path}"
            if request.data:
                details += f" | Data: {request.get_json()}"

            new_log = AuditLog(
                user_id=user_id,
                action=action,
                details=details
            )
            db.session.add(new_log)
            db.session.commit()

            return response
        return wrapper
    return decorator

@audit_bp.route("/audit-logs", methods=["GET"])
@jwt_required()
def get_audit_logs():
    """Gets all audit logs."""
    # This should be restricted to admin users in a real application
    logs = AuditLog.query.order_by(AuditLog.timestamp.desc()).all()
    
    return jsonify([{
        "log_id": log.log_id,
        "user_id": log.user_id,
        "action": log.action,
        "details": log.details,
        "timestamp": log.timestamp.isoformat()
    } for log in logs])
