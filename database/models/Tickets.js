const { connect } = require("../index");

async function getTicketConfig(guildId) {
    const db = await connect();
    return await db.collection("ticket_config").findOne({ guildId });
}

async function setTicketConfig(guildId, data) {
    const db = await connect();
    await db.collection("ticket_config").updateOne(
        { guildId },
        { $set: data },
        { upsert: true }
    );
}

async function createTicket(guildId, userId, channelId) {
    const db = await connect();
    await db.collection("tickets").insertOne({
        guildId,
        userId,
        channelId,
        createdAt: Date.now()
    });
}

async function getUserTickets(guildId, userId) {
    const db = await connect();
    return await db.collection("tickets").find({ guildId, userId }).toArray();
}

module.exports = {
    getTicketConfig,
    setTicketConfig,
    createTicket,
    getUserTickets
};
