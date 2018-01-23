import os
from flask import Flask, send_from_directory
from flask_socketio import SocketIO

app = Flask(__name__, static_folder='./app/build')
sockectIO = SocketIO(app)

# Serve React App
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path == '':
        return send_from_directory('app/build', 'index.html')
    else:
        if os.path.exists('react_app/build/' + path):
            return send_from_directory('app/build', path)
        else:
            return send_from_directory('app/build', 'index.html')

if __name__ == '__main__':
    sockectIO.run(app)
