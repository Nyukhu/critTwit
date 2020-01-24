require("dotenv").config();

const { wsServer, server } = require("./src/server");
const twitterStream = require("./src/data_streams/twitterStream");
const { parsedObjects } = require('./src/data_streams/stream_utils/parser');

twitterStream.on("error", error => {
    console.error(error);
})

wsServer.on("connection", client => {
    console.log("new client connection");

    client.on("message", message => {

        let data = JSON.parse(message);

        switch (data.event) {
            case "msg":
                console.log("message from client: ", data.data);
                client.send("Welcome!");
                break;
            case "comment":
                console.log(data.data);
                break;
            default:
                console.log("undefined event")
        }


    })

    client.send(JSON.stringify({event: "initialTweets", data: parsedObjects}));




    twitterStream.on("data", tweet => {
        console.log(tweet);

        let tweetString = JSON.stringify({event: "realTimeTweet", data: tweet});
        client.send(tweetString);

    })
})

server.listen(process.env.PORT);