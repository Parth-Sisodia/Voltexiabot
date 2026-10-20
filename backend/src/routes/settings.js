const express = require("express");
const router = express.Router();

router.post("/:guildId", async (req, res) => {
    const guildId = req.params.guildId;
    const { punishmentChannel, ticketCategory, staffRole } = req.body;

    res.json({ success: true, guildId });
});

router.get("/:guildId", async (req, res) => {
    const guildId = req.params.guildId;

    res.json({
        guildId,
        punishmentChannel: null,
        ticketCategory: null,
        staffRole: null
    });
});

module.exports = router;
