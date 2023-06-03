const { layout } = require("../templates/layout.js");
const { home } = require("../templates/home.js");
const { form } = require("../templates/form.js");
const { selectAllReviews } = require("../model/reviews.js");

function get(req, res) {
  const session = req.sessions;
  const allReviews = selectAllReviews();

  const title = "Review Me";
  const body = home(allReviews, form(session));

  res.send(layout(title, body));
}

// exports
module.exports = { get };
