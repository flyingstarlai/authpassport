const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const router = require('./router');
const mongoose = require('mongoose');

//DB
mongoose.connect('mongodb://admin:nimda@ds249565.mlab.com:49565/authpassport');

app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*'}));
router(app);

const port = process.env.PORT || 3030;
const server = http.createServer(app);
server.listen(port);