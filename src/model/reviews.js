const db = require("../database/db.js");

const select_reviews = db.prepare(/*sql*/ `
  SELECT 
    reviews.content AS content,
    reviews.created_at AS created_at,
    users.name AS username,
    users.relation AS relation
  FROM reviews
  JOIN users ON reviews.user_id = users.id
`);

function selectAllReviews() {
  return select_reviews.all();
}

// exports
module.exports = { selectAllReviews };
