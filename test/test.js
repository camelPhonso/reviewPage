const test = require("node:test");

const { usersSelects, reviewsSelects } = require("./test.model.js");

test("selectUser recovers all data from existing user", usersSelects);

test(
  "selectAllReviews recovers all of the reviews submitted from the database",
  reviewsSelects
);
