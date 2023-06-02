const express = require("express");
const server = express();
const staticHandler = express.static("public");

server.use(staticHandler);

// exports
module.exports = server;
