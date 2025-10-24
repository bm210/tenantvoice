import os
from flask import Blueprint, jsonify, request
from flask_login import current_user, login_required
from services.users.auth import roles_required
from services.users.models import db
from .models import Review
from services.properties.models import Property
from werkzeug.utils import secure_filename

reviews_bp = Blueprint('reviews', __name__)

# Configuration for file uploads
UPLOAD_FOLDER = 'uploads/reviews'
ALLOWED_PHOTO_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}
ALLOWED_VIDEO_EXTENSIONS = {'mp4', 'mov', 'avi'}

def allowed_file(filename, allowed_extensions):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in allowed_extensions

@reviews_bp.route("/reviews", methods=["POST"])
@roles_required('tenant')
def create_review():
    """Create a new review for a property. Only accessible to tenants."""
    data = request.form
    new_review = Review(
        property_id=data.get('property_id'),
        tenant_id=current_user.user_id,
        rating=data.get('rating'),
        comment=data.get('comment')
    )
    db.session.add(new_review)
    db.session.commit()
    return jsonify({"message": "Review created successfully", "review_id": new_review.review_id}), 201

@reviews_bp.route("/reviews/<int:review_id>/upload_media", methods=["POST"])
@login_required
def upload_review_media(review_id):
    """Upload photos and videos for a review."""
    review = Review.query.get_or_404(review_id)
    if review.tenant_id != current_user.user_id:
        return jsonify({"message": "Not authorized to upload media for this review"}), 403

    photo_filenames = []
    video_filenames = []

    if not os.path.exists(UPLOAD_FOLDER):
        os.makedirs(UPLOAD_FOLDER)

    if 'photos' in request.files:
        for photo in request.files.getlist('photos'):
            if photo and allowed_file(photo.filename, ALLOWED_PHOTO_EXTENSIONS):
                filename = secure_filename(photo.filename)
                photo.save(os.path.join(UPLOAD_FOLDER, filename))
                photo_filenames.append(filename)

    if 'videos' in request.files:
        for video in request.files.getlist('videos'):
            if video and allowed_file(video.filename, ALLOWED_VIDEO_EXTENSIONS):
                filename = secure_filename(video.filename)
                video.save(os.path.join(UPLOAD_FOLDER, filename))
                video_filenames.append(filename)

    if photo_filenames:
        review.photo_filenames = ",".join(photo_filenames)
    if video_filenames:
        review.video_filenames = ",".join(video_filenames)

    db.session.commit()

    return jsonify({"message": "Media uploaded successfully"}), 200


@reviews_bp.route("/reviews/property/<int:property_id>")
def get_reviews_for_property(property_id):
    """Get all reviews for a specific property."""
    reviews = Review.query.filter_by(property_id=property_id).all()
    review_list = []
    for review in reviews:
        review_list.append({
            "review_id": review.review_id,
            "property_id": review.property_id,
            "tenant_id": review.tenant_id,
            "rating": review.rating,
            "comment": review.comment,
            "photo_filenames": review.photo_filenames.split(',') if review.photo_filenames else [],
            "video_filenames": review.video_filenames.split(',') if review.video_filenames else [],
            "created_at": review.created_at
        })
    return jsonify(review_list)

@reviews_bp.route("/reviews/<int:review_id>", methods=["PUT"])
@login_required
def edit_review(review_id):
    """Edit an existing review. Only the author of the review can edit it."""
    review = Review.query.get_or_404(review_id)

    if review.tenant_id != current_user.user_id:
        return jsonify({"message": "Not authorized to edit this review"}), 403

    data = request.get_json()
    review.rating = data.get('rating', review.rating)
    review.comment = data.get('comment', review.comment)

    db.session.commit()

    return jsonify({"message": "Review updated successfully"}), 200

@reviews_bp.route("/reviews/<int:review_id>/report", methods=["POST"])
@roles_required('landlord')
def report_review(review_id):
    """Report a review for abuse. Only the property owner can report it."""
    review = Review.query.get_or_404(review_id)
    property = Property.query.get_or_404(review.property_id)

    if property.owner_id != current_user.user_id:
        return jsonify({"message": "Not authorized to report this review"}), 403

    review.is_reported = True
    review.reported_by_id = current_user.user_id
    review.moderation_status = 'pending'

    db.session.commit()

    return jsonify({"message": "Review has been reported and is pending moderation."}), 200

@reviews_bp.route("/reviews/reported")
@roles_required('moderator')
def get_reported_reviews():
    """Get all reported reviews that are pending moderation."""
    reviews = Review.query.filter_by(is_reported=True, moderation_status='pending').all()
    review_list = []
    for review in reviews:
        review_list.append({
            "review_id": review.review_id,
            "property_id": review.property_id,
            "tenant_id": review.tenant_id,
            "rating": review.rating,
            "comment": review.comment,
            "reported_by_id": review.reported_by_id,
            "created_at": review.created_at
        })
    return jsonify(review_list)

@reviews_bp.route("/reviews/<int:review_id>/moderate", methods=["POST"])
@roles_required('moderator')
def moderate_review(review_id):
    """Moderate a reported review. Can be approved or rejected."""
    review = Review.query.get_or_404(review_id)
    data = request.get_json()
    status = data.get('status')

    if status == 'approved':
        review.is_reported = False
        review.moderation_status = 'approved'
        review.moderated_by_id = current_user.user_id
        db.session.commit()
        return jsonify({"message": "Review approved"}), 200
    elif status == 'rejected':
        db.session.delete(review)
        db.session.commit()
        return jsonify({"message": "Review rejected and deleted"}), 200
    else:
        return jsonify({"message": "Invalid status"}), 400
