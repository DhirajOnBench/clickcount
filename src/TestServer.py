from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/colors')
def get_colors():
    colors = ['Red', 'Green','Blue','Yellow','Purple']
    return jsonify(colors)

if __name__ == '__main__':
    app.run(debug=True)