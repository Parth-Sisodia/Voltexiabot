function getOAuthUrl() {
    const scope = [
        "identify",
        "guilds",
        "guilds.join"
    ].join("%20");

    return `https://discord.com/oauth2/authorize?client_id=${process.env.DISCORD_CLIENT_ID}&redirect_uri=${encodeURIComponent(process.env.REDIRECT_URI)}&response_type=code&scope=${scope}`;
}

module.exports = { getOAuthUrl };
