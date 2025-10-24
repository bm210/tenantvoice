from services.users.models import db

class Booking(db.Model):
    __tablename__ = 'bookings'

    booking_id = db.Column(db.Integer, primary_key=True)
    property_id = db.Column(db.Integer, db.ForeignKey('properties.property_id'), nullable=False)
    tenant_id = db.Column(db.Integer, db.ForeignKey('users.user_id'), nullable=True) # Nullable for service bookings
    service_id = db.Column(db.Integer, db.ForeignKey('services.service_id'), nullable=True) # Nullable for tenant bookings
    start_date = db.Column(db.Date, nullable=False)
    end_date = db.Column(db.Date, nullable=False)
    booking_type = db.Column(db.String(50), nullable=False) # 'tenant' or 'service'
