const assert = require("node:assert");

const { selectUser } = require("../src/model/users.js");
const {selectAllReviews} = require("../src/model/reviews.js")
const { reset } = require("./helpers.js");

// users.js
function usersSelects() {
  reset();
  const userJane = selectUser("Jane Smith");

  assert.equal(userJane.id, 2, `Expected the returned id to be '2' but got ${userJane.id}`);
  assert.equal(userJane.relation, "colleague", `Expected the relation to be "colleague" but got ${userJane.relation}`);
}

// reviews
function reviewsSelects(){
  reset();
  const allReviews = selectAllReviews();

  assert.equal(allReviews.length, 3, `Expected a total of three reviews from the seed.js but got ${allReviews.length}`);
  assert.match(allReviews[2].content, /Aggressively helpful/gi, `Expected the third review from seed.js to say "Aggressively helpful." but got ${allReviews[2].content}`)
}

// exports
module.exports = { usersSelects, reviewsSelects };
