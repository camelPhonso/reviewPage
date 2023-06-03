const express = require("express");
const server = express();
const staticHandler = express.static("public");

const { selectSession, deleteSession } = require("../src/model/sessions.js");

// server.use()
server.use(staticHandler);
server.use(sessions);

// middleware
function clearSession(session, res) {
  deleteSession(session);
  res.clearCookie("sid");
}

function sessions(req, res, next) {
  const session = selectSession(req.signedCookies.sid);
  if (!session) return next();

  const expiry = new Date(session.expires_at);
  const today = new Date();
  expiry < today ? clearSession(session, res) : (req.session = session);
  return next();
}

// exports
module.exports = server;
