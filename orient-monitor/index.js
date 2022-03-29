const express = require("express");
const http = require("http");
const PORT = 5000;
const app = express();
const server = http.createServer(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
  },
  handlePreflightRequest: (req, res) => {
    res.writeHead(200, {
      "Access-Control-Allow-Origin": "*",
    });
    res.end();
  },
});

let Altitude;
let HSI;
let ADI;
let socketsLS = new Map();

io.on("connection", (socket) => {
  socketsLS.set(socket.request._query["id"], socket);
  console.log("a user connected %s", socket.request._query["id"]);
  // Broadcast a user's message to everyone else in the room
  if ("client" == socket.request._query["id"]) {
    socket.on("send", function (data) {
      if (socketsLS.has("UI")) {
        socketsLS.get("UI").emit("properties", data);
      }
      console.log(data);
    });
  }
});

server.listen(PORT, "0.0.0.0");
// server.listen(PORT, (err) => {
//   if (err) console.log(err);
// });
