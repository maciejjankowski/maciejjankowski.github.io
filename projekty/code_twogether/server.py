import os
from flask import Flask, render_template, request, redirect, url_for, session, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, UserMixin, login_user, logout_user, login_required, current_user
from dotenv import load_dotenv
import requests
from flask_socketio import SocketIO, emit

load_dotenv()

app = Flask(__name__)
app.secret_key = os.getenv('SECRET_KEY')
socketio = SocketIO(app)

# Konfiguracja bazy danych
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///codetwogether.db'
db = SQLAlchemy(app)

# Konfiguracja Flask-Login
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'github_login'

# Model użytkownika
class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    github_id = db.Column(db.Integer, unique=True, nullable=False)
    username = db.Column(db.String(80), nullable=False)

# Model projektu
class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    technologies = db.Column(db.String(200), nullable=False)
    difficulty = db.Column(db.String(20), nullable=False)
    language = db.Column(db.String(20), nullable=False)
    owner_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    owner = db.relationship('User', backref=db.backref('projects', lazy=True))

# Model członków projektu
class ProjectMember(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    project_id = db.Column(db.Integer, db.ForeignKey('project.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    project = db.relationship('Project', backref=db.backref('memberships', lazy=True))
    user = db.relationship('User', backref=db.backref('memberships', lazy=True))

# Model prośby o dołączenie
class JoinRequest(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    project_id = db.Column(db.Integer, db.ForeignKey('project.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    project = db.relationship('Project', backref=db.backref('join_requests', lazy=True))
    user = db.relationship('User', backref=db.backref('join_requests', lazy=True))

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

# Trasy URL

@app.route('/')
def index():
    projects = Project.query.all()
    return render_template('index.html', projects=projects)

@app.route('/login')
def github_login():
    return redirect(f'https://github.com/login/oauth/authorize?client_id={os.getenv("GITHUB_CLIENT_ID")}')

@app.route('/callback')
def github_callback():
    # ... (kod logowania za pomocą GitHub - bez zmian)

@app.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('index'))

@app.route('/projects/<int:project_id>')
def project(project_id):
    project = Project.query.get_or_404(project_id)
    joined = current_user in [member.user for member in project.memberships]
    owner_online = project.owner.id in [user.id for user in online_users()]
    return render_template('project.html', project=project, joined=joined, owner_online=owner_online)

@app.route('/projects/add', methods=['GET', 'POST'])
@login_required
def add_project():
    # ... (kod dodawania projektu - bez zmian)

@app.route('/projects/<int:project_id>/join', methods=['POST'])
@login_required
def join_project(project_id):
    project = Project.query.get_or_404(project_id)
    join_request = JoinRequest(project=project, user=current_user)
    db.session.add(join_request)
    db.session.commit()

    # Powiadom opiekuna projektu o nowej prośbie
    emit('new_join_request', {'project_id': project_id, 'user_id': current_user.id}, room=project.owner.id, namespace='/')

    return jsonify({'success': True})

@app.route('/projects/<int:project_id>/leave', methods=['POST'])
@login_required
def leave_project(project_id):
    # ... (kod opuszczania projektu - bez zmian)

@app.route('/projects/<int:project_id>/approve/<int:user_id>', methods=['POST'])
@login_required
def approve_join_request(project_id, user_id):
    project = Project.query.get_or_404(project_id)
    if project.owner != current_user:
        return jsonify({'success': False, 'error': 'Tylko opiekun projektu może zatwierdzać prośby'})

    join_request = JoinRequest.query.filter_by(project_id=project_id, user_id=user_id).first()
    if join_request:
        membership = ProjectMember(project=project, user=join_request.user)
        db.session.add(membership)
        db.session.delete(join_request)
        db.session.commit()

        # Powiadom użytkownika o zatwierdzeniu prośby
        emit('join_request_approved', {'project_id': project_id}, room=user_id, namespace='/')

        return jsonify({'success': True})
    else:
        return jsonify({'success': False, 'error': 'Nie znaleziono prośby o dołączenie'})

# Funkcje pomocnicze

def online_users():
    return [user for user, sid in socketio.server.manager.rooms['/'].items() if user.isdigit()]

# SocketIO events

@socketio.on('connect')
def handle_connect():
    if current_user.is_authenticated:
        join_room(current_user.id)

@socketio.on('disconnect')
def handle_disconnect():
    if current_user.is_authenticated:
        leave_room(current_user.id)

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    socketio.run(app, debug=True)
