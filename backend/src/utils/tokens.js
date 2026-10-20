const axios = require("axios");

async function exchangeCode(code) {
    const res = await axios.post(
        "https://discord.com/api/v10/oauth2/token",
        new URLSearchParams({
            client_id: process.env.DISCORD_CLIENT_ID,
            client_secret: process.env.DISCORD_CLIENT_SECRET,
            grant_type: "authorization_code",
            code,
            redirect_uri: process.env.REDIRECT_URI
        }),
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );

    return res.data;
}

async function getUser(accessToken) {
    const res = await axios.get("https://discord.com/api/v10/users/@me", {
        headers: { Authorization: `Bearer ${accessToken}` }
    });
    return res.data;
}

async function getUserGuilds(accessToken) {
    const res = await axios.get("https://discord.com/api/v10/users/@me/guilds", {
        headers: { Authorization: `Bearer ${accessToken}` }
    });
    return res.data;
}

module.exports = { exchangeCode, getUser, getUserGuilds };
