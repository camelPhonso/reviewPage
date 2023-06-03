const test = require("node:test");

const { userSelects } = require("./test.model.js");

test('selectUser recovers all data from existing user', userSelects);
