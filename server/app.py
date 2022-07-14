from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

todos = {
    "todo" : [] 
}

@app.route('/api', methods=["GET"])
def get_todo():
    return todos

@app.route('/api/<todo>', methods=["POST"])
def add_todo(todo):
    if todo in todos["todo"]:
        return todos
    todos["todo"].append(todo)
    return todos

@app.route('/api/<todo>', methods=["DELETE"])
def delete_tpdp(todo):
    if todo not in todos["todo"]:
        return todos
    todos["todo"].remove(todo)
    return todos

