from services.users.models import db

class Property(db.Model):
    __tablename__ = 'properties'

    property_id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey('users.user_id'), nullable=False)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=True)
    rent = db.Column(db.Numeric(10, 2), nullable=False)
    location = db.Column(db.String(255), nullable=False)
    photos = db.Column(db.Text, nullable=True)  # Store as a JSON string or comma-separated list of URLs
    status = db.Column(db.String(50), nullable=False, default='available')
    created_at = db.Column(db.DateTime, server_default=db.func.now())

    applications = db.relationship('Application', back_populates='property', lazy='dynamic')
