const express = require("express");
const socketIo = require("socket.io");
const http = require("http");
const PORT = 5000;
const app = express();
const server = http.createServer(app);
const prompt = require("prompt");

let Altitude;
let HSI;
let ADI;

const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
  },
}); //in case server and client run on different urls
io.on("connection", (socket) => {
  socket.join("project-room");

  socket.on("disconnect", (reason) => {
    console.log(reason);
  });
});

const properties = [
  {
    name: "Altitude",
    warning: "Altitude must be only a number between 0-3000",
    conform: function (Altitude) {
      return parseInt(Altitude) <= 3000 && parseInt(Altitude) >= 0;
    },
  },
  {
    name: "HSI",
    warning: "HSI must be only a number between 0-360",
    conform: function (HSI) {
      return parseInt(HSI) <= 360 && parseInt(HSI) >= 0;
    },
  },
  {
    name: "ADI",
    warning: "ADI must be only a number between (-100)-100",
    conform: function (ADI) {
      return parseInt(ADI) <= 100 && parseInt(ADI) >= -100;
    },
  },
];

const Input = () => {
  prompt.get(properties, function (err, result) {
    if (err) {
      return onErr(err);
    }

    console.log("\nCommand-line input received:");
    console.log("  Altitude: " + result.Altitude);
    console.log("  HSI: " + result.HSI);
    console.log("  ADI: " + result.ADI);
    console.log("\n");

    Altitude = parseInt(result.Altitude);
    HSI = parseInt(result.HSI);
    ADI = parseInt(result.ADI);
    Input();
  });
};

function onErr(err) {
  console.log(err);
  return 1;
}

setInterval(() => {
  io.to("project-room").emit("properties", { Altitude, HSI, ADI });
});

server.listen(PORT, (err) => {
  if (err) console.log(err);
  //console.log("\nServer running on Port ", PORT);
});

Input();
