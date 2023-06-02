require('dotenv').config();
const server = require("./server.js");
const PORT = process.env.DEV_PORT;

server.listen(PORT, () =>
  console.log("\u001b[32m", `IT LIVES in port ${PORT}`)
);
