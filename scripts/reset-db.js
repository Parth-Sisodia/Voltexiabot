const { connect } = require("../database/index");

(async () => {
    const db = await connect();
    await db.dropDatabase();
    console.log("Database reset");
    process.exit(0);
})();
