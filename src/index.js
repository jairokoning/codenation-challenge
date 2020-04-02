const express = require('express');
const morgan = require('morgan');
const ChallengeController = require('./controllers/ChallengeController')

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get('/', ChallengeController.start)

app.listen(3333);