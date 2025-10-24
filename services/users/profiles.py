from services.users.models import db

class TenantProfile(db.Model):
    __tablename__ = 'tenant_profiles'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.user_id'), nullable=False)
    about = db.Column(db.Text)
    address = db.Column(db.Text)
    preferred_move_in_date = db.Column(db.String(100))
    desired_lease_term = db.Column(db.String(100))

class LandlordProfile(db.Model):
    __tablename__ = 'landlord_profiles'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.user_id'), nullable=False)
    company = db.Column(db.String(120))
    website = db.Column(db.String(255))


class ServiceProviderProfile(db.Model):
    __tablename__ = 'service_provider_profiles'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.user_id'), nullable=False)
    service_type = db.Column(db.String(100))
    portfolio_url = db.Column(db.String(255))
    certifications = db.Column(db.Text)