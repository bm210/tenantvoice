from services.users.models import db
from sqlalchemy.sql import func

class Connection(db.Model):
    __tablename__ = 'connections'

    connection_id = db.Column(db.Integer, primary_key=True)
    requester_id = db.Column(db.Integer, db.ForeignKey('users.user_id'), nullable=False)
    receiver_id = db.Column(db.Integer, db.ForeignKey('users.user_id'), nullable=False)
    status = db.Column(db.String(20), nullable=False, default='pending')  # pending, accepted, rejected
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())

    # Relationships
    requester = db.relationship('User', foreign_keys=[requester_id])
    receiver = db.relationship('User', foreign_keys=[receiver_id])

    def __repr__(self):
        return f"<Connection {self.requester_id} -> {self.receiver_id}: {self.status}>"
