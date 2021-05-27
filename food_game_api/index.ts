import express from 'express';
import errorHandler from 'errorhandler';
import config from './config'
import router from './src/routes';
import bodyParser from 'body-parser';
require('dotenv').config();
var cors = require('cors');

// const PORT: number = process.env.DEPLOY === "local" ? config.PORT : parseInt(<string>process.env.PORT, 10);
// const HOSTNAME = process.env.DEPLOY === "local" ? config.HOSTNAME : "food-game.herokuapp.com";
const PORT = config.PORT;
const HOSTNAME = config.HOSTNAME;

const app = express();
app.use(errorHandler());
app.use(cors());

// Uses router for all routes (we split the server logics and the routes definition)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);


app.listen(PORT,HOSTNAME);
console.log(`Listening at ${HOSTNAME}:${PORT}`);
