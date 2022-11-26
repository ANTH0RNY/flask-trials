from flask import Flask
from flask import render_template
from flask import request
from time import time
import json

from flask import jsonify
app = Flask(__name__)

@app.route('/',methods=['GET','POST'])
def index():
    # text = request.args.get('button_text')
    if request.is_json:
        if request.method == 'GET':
            seconds = time()
            return jsonify({'seconds': seconds})
        else:
            card_text = json.loads(request.data).get('text')  #.form or .json
            new_text = f'I got: {card_text}'
            return jsonify({'data': new_text})
    # print(type(seconds))
    # return seconds
    return render_template("index.html")

if __name__ == '__main__':
    app.run(debug=True)