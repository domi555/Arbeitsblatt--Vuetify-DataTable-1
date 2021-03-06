const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path');
const cors = require('cors');

require('colors');
require('dotenv').config();

const routes = require('./routes/movies');
const { errorHandler, notFound } = require('./middleware/errorHandler');

const app = express();

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '/public')));
app.use(helmet());

app.use(cors());

app.use(express.json());

app.use(routes);

app.use(errorHandler);
app.use(notFound);

const PORT = process.env.PORT ?? 5000;

app.listen(PORT);
