const { assert } = require("node:assert");

const { getUser } = require("../model/users.js");

// users.js
function usersSelects() {
  const userJane = getUser("Jane Smith");

  assert.equal(userJane.id, 2);
  assert.equal(userJane.relation, "colleague");
}

// exports
module.exports = { usersSelects };
