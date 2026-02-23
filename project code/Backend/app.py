from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)

# Load dataset
df = pd.read_csv("rainfall.csv")

@app.route("/states")
def get_states():
    states = df["State"].unique().tolist()
    return jsonify(states)

@app.route("/rainfall/<state>")
def get_rainfall(state):
    state_data = df[df["State"] == state]
    result = state_data.to_dict(orient="records")
    return jsonify(result)

@app.route("/average/<state>")
def average_rainfall(state):
    state_data = df[df["State"] == state]
    monthly_avg = state_data.iloc[:, 2:].mean().to_dict()
    return jsonify(monthly_avg)

if __name__ == "__main__":
    app.run(debug=True)
