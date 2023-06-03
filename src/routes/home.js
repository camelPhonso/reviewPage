const { layout } = require("../templates/layout.js");
const { home } = require("../templates/home.js");
const { form } = require("../templates/form.js");
const { selectAllReviews } = require("../model/reviews.js");

function get(req, res) {
  const isLoggedIn = "Truty"; //THIS NEEDS TO BE BUILT AND ADDED
  const allReviews = selectAllReviews();

  const title = "Review Me";
  const body = home(allReviews, form(isLoggedIn));

  res.send(layout(title, body));
}

// exports
module.exports = { get };
