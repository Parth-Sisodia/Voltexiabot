const API = require("./index");

const backend = new API(process.env.BACKEND_URL);

module.exports = backend;
