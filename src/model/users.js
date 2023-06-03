const db = require("../database/db.js");



const select_user = db.prepare(/*sql*/ `
  SELECT id, name, relation FROM users
  WHERE name = ?
`);

function selectUser(name) {
  return select_user.get(name);
}

// exports
module.exports = { selectUser };
