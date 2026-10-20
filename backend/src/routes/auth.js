const express = require("express");
const router = express.Router();
const { getOAuthUrl } = require("../utils/oauth");
const { exchangeCode, getUser } = require("../utils/tokens");

router.get("/login", (req, res) => {
    res.redirect(getOAuthUrl());
});

router.get("/callback", async (req, res) => {
    const code = req.query.code;
    if (!code) return res.redirect("/auth/login");

    const tokens = await exchangeCode(code);
    const user = await getUser(tokens.access_token);

    req.session.tokens = tokens;
    req.session.user = user;

    res.redirect("/verify");
});

module.exports = router;
