const { connect } = require("../index");

async function setVerified(userId, status) {
    const db = await connect();
    await db.collection("global_verification").updateOne(
        { userId },
        { $set: { verified: status } },
        { upsert: true }
    );
}

async function isVerified(userId) {
    const db = await connect();
    const data = await db.collection("global_verification").findOne({ userId });
    return data && data.verified === 1;
}

module.exports = { setVerified, isVerified };
