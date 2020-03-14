from flask import Flask
from flask import request
from flask import render_template
from flask import jsonify
import utils

app = Flask(__name__)


@app.route('/')
def hello_world():
    return render_template("main.html")

@app.route('/time')
def get_time():
    return utils.get_time()

@app.route('/data')
def get_main_data():
    data = utils.get_main_data()
    return jsonify({"nowcon": data[0], "nowsus": data[1], "nowbad": data[2], "totcon": data[3], "totheal": data[4], "totdead": data[5]})


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
