const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

app.use(express.json());

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db('top_trumps');
    const cardsCollection = db.collection('cards');
    const cardsRouter = createRouter(cardsCollection)
    app.use('/api/cards', cardsRouter);
    const playersCollection = db.collection('players');
    const playersRouter = createRouter(playersCollection);
    app.use('/api/players', playersRouter);
    const avatarsCollection = db.collection('avatars');
    const avatarsRouter = createRouter(avatarsCollection);
    app.use('/api/avatars', avatarsRouter);
  })
  .catch(console.err);

app.listen(9000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});