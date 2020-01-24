const { Transform } = require("stream");

let parsedObjects = [];
const parser = new Transform({
    readableObjectMode: true,
    transform(chunk, encoding, callback) {
        let data = null;

        try {
            data = JSON.parse(chunk);
            parsedObjects.push(data)
        } catch (error) {
            console.error("error parsing into json: ", chunk);
            this.emit("error", error);
        }

        this.push(data);

        callback();
    }
})

exports.parser = parser;
exports.parsedObjects = parsedObjects;
