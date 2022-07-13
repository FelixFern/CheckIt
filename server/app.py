from flask import Flask

app = Flask(__name__)

@app.route('/')
def data(): 
    return "hello world"