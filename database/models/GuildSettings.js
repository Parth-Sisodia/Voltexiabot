const { connect } = require("../index");

async function getGuildSettings(guildId) {
    const db = await connect();
    return await db.collection("guild_settings").findOne({ guildId });
}

async function setGuildSettings(guildId, data) {
    const db = await connect();
    await db.collection("guild_settings").updateOne(
        { guildId },
        { $set: data },
        { upsert: true }
    );
}

module.exports = { getGuildSettings, setGuildSettings };
