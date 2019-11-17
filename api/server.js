const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const peopleRouter = require('../people/people-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/people', peopleRouter);

server.get('/', (req, res) => {
  res.status(200).json({message: "It's alive!"});
});

module.exports = server;
