from flask import Flask
from flask_cors import CORS, cross_origin

app = Flask(__name__)

cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

app.config['CORS_HEADERS'] = 'Content-Type'



import cohere

co = cohere.Client("qnwyPerImbDPtxYJQ2c0bix4LD10GR8cwugHU1xN")

from cohere.responses.classify import Example
import pandas as pd

sentiment_file_path = 'IMDB Dataset.csv'
sentiment_df = pd.read_csv(sentiment_file_path).sample(frac=1.0)
sentiment_examples = [
    Example(sentiment_df['review'][i], sentiment_df['sentiment'][i])
    for i in range(len(sentiment_df['sentiment']))
][:666]

catagories_file_path = "complaints_processed.csv"
catagories_df = pd.read_csv(catagories_file_path).sample(frac=1.0)
catagories_examples = [
    Example(catagories_df['narrative'][i], catagories_df['product'][i])
    for i in range(len(catagories_df['product']))
][:666]

emotions_file_path = "tweet_emotions.csv"
emotions_df = pd.read_csv(emotions_file_path).sample(frac=1.0)
emotions_examples = [
    Example(emotions_df['content'][i], emotions_df['sentiment'][i])
    for i in range(len(emotions_df['sentiment']))
][:666]

inputs = [
    "I hated the service at my local restaurant. The food tasted garbage, and I went outside to eat in the garden, but the entire plate just reeked.",
    "This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and wonderful dessert. I recommend to everyone! I would like to come back here again and again.",
    "I was so impressed with my breakfast this morning! I tried the Fried Green Tomato Benedict and my boyfriend got the Crab Cakes Benedict. We both finished our whole plates and were so impressed with the quality of the food and the short amount of time it took to receive it. Our waitress was sweet and helpful. I will definitely be back!"
  ]


def get_scores(inputs, examples=sentiment_examples):

    response = co.classify(
        model='large',
        inputs=inputs,
        examples=examples,
    )

    return [
        (-1 if response.classifications[i].prediction == "negative" else 1) *
        (response.classifications[i].confidence**5) * 5 + 5
        for i in range(len(inputs))
    ]


def get_catagories(inputs, examples=catagories_examples):

    response = co.classify(
        model='large',
        inputs=inputs,
        examples=examples,
    )

    return [(response.classifications[i].prediction, response.classifications[i].confidence) for i in range(len(inputs))]

def get_emotions(inputs, examples=emotions_examples):

    response = co.classify(
        model='large',
        inputs=inputs,
        examples=examples,
    )

    return [(response.classifications[i].prediction, response.classifications[i].confidence) for i in range(len(inputs))]



@cross_origin()
@app.route('/api/score', methods = ['GET'])
def fetchData():

  return {"score": get_scores(inputs)}
  
@cross_origin()
@app.route('/api/categories', methods = ["GET"])
def fetch():
  return {"categories": get_catagories(inputs)}

app.run(host='0.0.0.0', port=81, debug=True)
