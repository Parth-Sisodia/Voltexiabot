const { connect } = require("../index");

async function logPunishment(guildId, userId, action, reason) {
    const db = await connect();
    await db.collection("punishments").insertOne({
        guildId,
        userId,
        action,
        reason,
        timestamp: Date.now()
    });
}

async function getPunishments(guildId, userId) {
    const db = await connect();
    return await db.collection("punishments").find({ guildId, userId }).toArray();
}

module.exports = { logPunishment, getPunishments };
