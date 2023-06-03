const db = require("../database/db.js");

const select_reviews = db.prepare(/*sql*/ `
  SELECT * FROM reviews
`);

function selectAllReviews() {
  return select_reviews.all();
}

// exports
module.exports = { selectAllReviews };
