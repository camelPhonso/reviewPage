const express = require("express");
const server = express();
const staticHandler = express.static("public");

const { selectSession, deleteSession } = require("../src/model/sessions.js");
const home = require("./routes/home.js");

// server.use()
server.use(staticHandler);
server.use(sessions);

// middleware
function sessions(req, res, next) {
  const session = selectSession(req.signedCookies && req.signedCookies.sid);
  if (!session) return next();

  const expiry = new Date(session.expires_at);
  const today = new Date();
  if (expiry < today) {
    deleteSession(session);
    res.clearCookie("sid");
  } else {
    req.session = session;
  }
  return next();
}

// routes
server.get("/", home.get);

// exports
module.exports = server;
