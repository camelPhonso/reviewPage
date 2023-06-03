const db = require("../database/db.js");

const select_session = db.prepare(/*sql*/ `
  SELECT (
    id,
    user_id,
    STRFTIME('%d/%m/%Y', created_at) AS created_at
  ) FROM sessions
  WHERE id = ?
`);

function selectSession(sid) {
  return select_session.get(sid);
}

const delete_session = db.prepare(/*sql*/ `
  DELETE FROM sessions
  WHERE id = $id
`)

function deleteSession(session){
  return delete_session.run(session);
}

// exports
module.exports = { selectSession, deleteSession };
