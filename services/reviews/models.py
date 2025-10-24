from services.users.models import db
import datetime

class Review(db.Model):
    __tablename__ = 'reviews'

    review_id = db.Column(db.Integer, primary_key=True)
    property_id = db.Column(db.Integer, db.ForeignKey('properties.property_id'), nullable=False)
    tenant_id = db.Column(db.Integer, db.ForeignKey('users.user_id'), nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    comment = db.Column(db.Text, nullable=True)
    photo_filenames = db.Column(db.String, nullable=True)  # Comma-separated
    video_filenames = db.Column(db.String, nullable=True)  # Comma-separated
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    
    # Fields for reporting and moderation
    is_reported = db.Column(db.Boolean, default=False)
    reported_by_id = db.Column(db.Integer, db.ForeignKey('users.user_id'), nullable=True)
    moderation_status = db.Column(db.String(50), default='pending')  # e.g., 'pending', 'approved', 'rejected'
    moderated_by_id = db.Column(db.Integer, db.ForeignKey('users.user_id'), nullable=True)

    # Relationships
    tenant = db.relationship('User', foreign_keys=[tenant_id])
    reported_by = db.relationship('User', foreign_keys=[reported_by_id])
    moderated_by = db.relationship('User', foreign_keys=[moderated_by_id])

