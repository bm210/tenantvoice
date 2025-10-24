from flask import Blueprint, jsonify, request
from flask_login import current_user, login_required
from services.users.models import db
from .models import Chat
from services.connections.models import Connection
from services.audit.routes import log_action

chat_bp = Blueprint('chat', __name__)

@chat_bp.route("/chat/send", methods=["POST"])
@login_required
@log_action('Send Chat Message')
def send_message():
    """Sends a chat message to another user."""
    data = request.get_json()
    receiver_id = data.get('receiver_id')
    message_text = data.get('message')

    if not receiver_id or not message_text:
        return jsonify({"error": "Missing receiver_id or message"}), 400

    # Check for accepted connection
    connection = Connection.query.filter(
        (((Connection.requester_id == current_user.user_id) & (Connection.receiver_id == receiver_id)) |
         ((Connection.requester_id == receiver_id) & (Connection.receiver_id == current_user.user_id)))
        & (Connection.status == 'accepted')
    ).first()

    if not connection:
        return jsonify({"error": "You can only chat with connected users."}), 403

    new_message = Chat(
        sender_id=current_user.user_id,
        receiver_id=receiver_id,
        message=message_text
    )
    db.session.add(new_message)
    db.session.commit()

    return jsonify({"message": "Message sent successfully"}), 201

@chat_bp.route("/chat/history/<int:other_user_id>")
@login_required
@log_action('Get Chat History')
def get_chat_history(other_user_id):
    """Gets the chat history with another user."""
    # Check for accepted connection
    connection = Connection.query.filter(
        (((Connection.requester_id == current_user.user_id) & (Connection.receiver_id == other_user_id)) |
         ((Connection.requester_id == other_user_id) & (Connection.receiver_id == current_user.user_id)))
        & (Connection.status == 'accepted')
    ).first()

    if not connection:
        return jsonify({"error": "You can only view chat history with connected users."}), 403

    chat_history = Chat.query.filter(
        ((Chat.sender_id == current_user.user_id) & (Chat.receiver_id == other_user_id)) |
        ((Chat.sender_id == other_user_id) & (Chat.receiver_id == current_user.user_id))
    ).order_by(Chat.timestamp.asc()).all()

    messages = []
    for msg in chat_history:
        messages.append({
            "message_id": msg.message_id,
            "sender_id": msg.sender_id,
            "receiver_id": msg.receiver_id,
            "message": msg.message,
            "timestamp": msg.timestamp.isoformat()
        })

    return jsonify(messages)
