const express = require("express");
const router = express.Router();
const { joinMainServer } = require("../utils/discordApi");

router.get("/", async (req, res) => {
    const tokens = req.session.tokens;
    if (!tokens) return res.redirect("/auth/login");

    await joinMainServer(tokens.access_token);
    res.redirect("/dashboard");
});

module.exports = router;
