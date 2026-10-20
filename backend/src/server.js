const express = require("express");
const session = require("express-session");
const path = require("path");

const authRoutes = require("./routes/auth");
const verifyRoutes = require("./routes/verify");
const guildRoutes = require("./routes/guilds");
const settingsRoutes = require("./routes/settings");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: process.env.SESSION_SECRET || "changeme",
    resave: false,
    saveUninitialized: false
}));

app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/auth", authRoutes);
app.use("/verify", verifyRoutes);
app.use("/guilds", guildRoutes);
app.use("/settings", settingsRoutes);

app.get("/dashboard", (req, res) => {
    if (!req.session.tokens) return res.redirect("/auth/login");
    res.sendFile(path.join(__dirname, "views", "dashboard.html"));
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Backend running");
});
