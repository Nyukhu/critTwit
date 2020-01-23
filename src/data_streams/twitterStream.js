const request = require("request");
const splitter = require("./stream_utils/splitter");
const parser = require("./stream_utils/parser");
const logger = require("./stream_utils/logger");

const httpStream = request.get(`${process.env.TWITTER_API_STREAM_URL}/statuses/filter.json?track=digital painting`, {
    oauth: {
        consumer_key: process.env.TWITTER_API_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_API_CONSUMER_SECRET,
        token: process.env.TWITTER_API_TOKEN,
        token_secret: process.env.TWITTER_API_TOKEN_SECRET
    }
})

const tweetStream = httpStream
    .pipe(splitter)
    .pipe(parser);

module.exports = tweetStream;