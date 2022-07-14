from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

peoples = {
    "name" : [] 
}

@app.route('/api', methods=["GET"])
def get_peoples():
    return peoples

@app.route('/api/<name>', methods=["POST"])
def add_peoples(name):
    if name in peoples["name"]:
        return peoples
    peoples["name"].append(name)
    return peoples

@app.route('/api/<name>', methods=["DELETE"])
def delete_peoples(name):
    if name not in peoples["name"]:
        return peoples
    peoples["name"].remove(name)
    return peoples

