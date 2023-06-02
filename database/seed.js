const { readFileSync } = require("node:fs");
const {join} = require("node:path");
const db = require("./db.js");

const seedPath = join('database', 'seed.sql');
const seed = readFileSync(seedPath, 'utf-8');

db.exec(seed);
console.log("\u001b[32m", "Database seeded with sample data");
