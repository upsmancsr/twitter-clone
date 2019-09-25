const express = require('express');
const cors = require('cors');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const bodyParser = require('body-parser');

const server = express();
server.use(express.json());
server.use(cors());

server.get('/',(req, res) => {
    res.send("Server base URL is working...");
});

module.exports = server;