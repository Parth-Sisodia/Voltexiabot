const { connect } = require("../index");

async function saveGuild(guildId, data) {
    const db = await connect();
    await db.collection("guilds").updateOne(
        { guildId },
        { $set: data },
        { upsert: true }
    );
}

async function getGuild(guildId) {
    const db = await connect();
    return await db.collection("guilds").findOne({ guildId });
}

module.exports = { saveGuild, getGuild };
