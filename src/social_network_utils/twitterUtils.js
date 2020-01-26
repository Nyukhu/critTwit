const request = require("request");
//"1221033673388064800"
function critweetResponse(user,tweetId,message) {

    request.post(`${process.env.TWITTER_API_URL}/statuses/update.json`, {
        form:{
            status:user + ' - ' + message,
            in_reply_to_status_id: tweetId
        },
        oauth: {
            consumer_key: process.env.TWITTER_API_CONSUMER_KEY,
            consumer_secret: process.env.TWITTER_API_CONSUMER_SECRET,
            token: process.env.TWITTER_API_TOKEN,
            token_secret: process.env.TWITTER_API_TOKEN_SECRET
        }
    },
        function optionalCallback(err, httpResponse, body) {
            if (err)
            {
                console.log(err)
            }
            //console.log("httpResponse",httpResponse);
            console.log(body)
            console.log(tweetId)
        }

        );
}
exports.critweetResponse = critweetResponse;
