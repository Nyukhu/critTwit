require("dotenv").config();

const { wsServer, server } = require("./src/server");
const twitterStream = require("./src/data_streams/twitterStream");

twitterStream.on("error", error => {
    console.error(error);
})

wsServer.on("connection", client => {
    console.log("new client connection");

    client.on("message", message => {
        console.log("message from client: ", message);
    })

    client.send("Welcome!");

    twitterStream.on("data", tweet => {
        client.send(tweet.text);
    })
})

server.listen(process.env.PORT);