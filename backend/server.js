const express = require('express');
// const cors = require('cors');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const server = http.createServer(app);

const io = socketio(server);

io.on("connection", socket => {
    stream();
    socket.on("connection", () => console.log("Client connected"));
    socket.on("disconnect", () => console.log("Client disconnected"));
});

//Emits data with socket.io as twitter stream flows in
const stream = () => {
    twitter.stream('statuses/filter', { track: app.locals.searchTerm }, (stream) => {
        stream.on('data', (tweet) => {
            sendMessage(tweet);
        });

        stream.on('error', (error) => {
            console.log(error);
        });
    });
}
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

require('./routes/tweets.js')(app, io);

// app.get('/',(req, res) => {
//     res.send("Server base URL is working...");
// });

module.exports = server;