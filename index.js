require("dotenv").config();

const { wsServer, server } = require("./src/server");
const twitterStream = require("./src/data_streams/twitterStream");
const { parsedObjects } = require('./src/data_streams/stream_utils/parser');
const { critweetResponse } = require('./src/social_network_utils/twitterUtils');

const markLabels = ["composition","colouring","proportions/perspective", "emotional impact"];

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
                console.log("test",data.data.id_str);
                let review = data.data
                let msg = ' \n review from Critweet : \n '
                let average = 0;
                for (let i = 0; i < markLabels.length; i++) {
                    let mark = review.marks[markLabels[i]];
                    msg += markLabels[i] + " : " + mark + "\n";
                    average += parseInt(mark);
                }
                average = average/4;

                msg += "average : " + average;

                msg += "\n comment : \n" + review.comment;
                critweetResponse("@" + review.tweet.user.screen_name,review.tweet.id_str,msg);
                break;
            default:
                console.log("undefined event")
        }


    });

    client.send(JSON.stringify({event: "initialTweets", data: parsedObjects}));




    twitterStream.on("data", tweet => {
        console.log(tweet);

        let tweetString = JSON.stringify({event: "realTimeTweet", data: tweet});
        client.send(tweetString);

    })
});

server.listen(process.env.PORT);
