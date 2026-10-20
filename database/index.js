const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGO_URL);
let db;

async function connect() {
    if (!db) {
        await client.connect();
        db = client.db(process.env.MONGO_DB);
    }
    return db;
}

module.exports = { connect };
