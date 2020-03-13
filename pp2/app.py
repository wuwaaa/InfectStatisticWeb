from flask import Flask
from flask import request
from flask import render_template
app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/ass')
def hello_world1():
    return render_template("index.html")

@app.route('/ajax',methods = ["get","post"])
def hello_world2():
    return "111"

@app.route('/image')
def jump():
    return render_template("image.html")

if __name__ == '__main__':
    app.run()
