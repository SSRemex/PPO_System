from flask import Flask, Blueprint
from flask_cors import CORS

app = Flask(__name__)
CORS(app, supports_credentials=True)
bp = Blueprint("blueprint", __name__, url_prefix="/api/")


