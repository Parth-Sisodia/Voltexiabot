const { connect } = require("../index");

async function saveUser(userId, data) {
    const db = await connect();
    await db.collection("users").updateOne(
        { userId },
        { $set: data },
        { upsert: true }
    );
}

async function getUser(userId) {
    const db = await connect();
    return await db.collection("users").findOne({ userId });
}

module.exports = { saveUser, getUser };
