from services.users.models import db
import datetime

class Application(db.Model):
    __tablename__ = 'applications'
    application_id = db.Column(db.Integer, primary_key=True)
    property_id = db.Column(db.Integer, db.ForeignKey('properties.property_id'), nullable=False)
    tenant_id = db.Column(db.Integer, db.ForeignKey('users.user_id'), nullable=False)
    status = db.Column(db.String(50), nullable=False, default='pending')  # e.g., pending, accepted, rejected, appeal
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.datetime.utcnow, onupdate=datetime.datetime.utcnow)

    property = db.relationship('Property', back_populates='applications')
    tenant = db.relationship('User', back_populates='applications')

# Add to User model
# applications = db.relationship('Application', back_populates='tenant', lazy='dynamic')

# Add to Property model
# applications = db.relationship('Application', back_populates='property', lazy='dynamic')
