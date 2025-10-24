from services.users.models import db
from sqlalchemy.sql import func

class AuditLog(db.Model):
    __tablename__ = 'audit_logs'

    log_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.user_id'), nullable=True)  # Nullable for system actions
    action = db.Column(db.String(255), nullable=False)
    details = db.Column(db.Text, nullable=True)
    timestamp = db.Column(db.DateTime(timezone=True), server_default=func.now())

    user = db.relationship('User', foreign_keys=[user_id])

    def __repr__(self):
        return f"<AuditLog {self.timestamp} - {self.action}>"
