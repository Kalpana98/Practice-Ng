const pgp = require("pg-promise")({});

const db = pgp(`postgres://postgres:twitter786@localhost:5432/practice`);
// db name-practice

module.exports = { db };
