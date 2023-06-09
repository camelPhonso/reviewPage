/* eslint-disable import/no-extraneous-dependencies */
const { readFileSync } = require("node:fs");
const { join } = require("node:path");
const Database = require("better-sqlite3");

const db = new Database(process.env.DB_FILE);
const schemaPath = join("src", "database", "schema.sql");
const schema = readFileSync(schemaPath, "utf-8");
db.exec(schema);

// exports
module.exports = db;
