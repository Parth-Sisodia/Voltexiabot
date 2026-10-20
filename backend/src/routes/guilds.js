const express = require("express");
const router = express.Router();
const { getUserGuilds } = require("../utils/tokens");
const { isBotInGuild } = require("../utils/discordApi");

router.get("/", async (req, res) => {
    const tokens = req.session.tokens;
    if (!tokens) return res.redirect("/auth/login");

    const guilds = await getUserGuilds(tokens.access_token);

    const manageable = [];
    for (const g of guilds) {
        const hasManageGuild = (BigInt(g.permissions) & (1n << 5n)) !== 0n;
        if (!hasManageGuild) continue;

        const botInGuild = await isBotInGuild(g.id);
        if (!botInGuild) continue;

        manageable.push({
            id: g.id,
            name: g.name,
            icon: g.icon
        });
    }

    res.json({ guilds: manageable });
});

module.exports = router;
