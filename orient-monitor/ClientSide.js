const express = require("express");
const socketIo = require("socket.io");
const http = require("http");
const app = express();
const server = http.createServer(app);

//need to change to your IP of wifi
IP = "192.168.14.49";

const prompt = require("prompt");
const io = require("socket.io-client");
const inquirer = require("inquirer");

let Altitude;
let HSI;
let ADI;
var socket = io.connect(`http://${IP}:5000/`, {
  reconnection: true,
  query: { id: "client" },
});

const properties = [
  {
    name: "Altitude",
    validate(answer) {
      if (parseInt(answer) > 3000 || parseInt(answer) < 0) {
        return "Altitude must be only a number between 0-3000";
      }
      return true;
    },
  },
  {
    name: "HSI",
    validate(answer) {
      if (parseInt(answer) > 360 || parseInt(answer) < 0) {
        return "HSI must be only a number between 0-360";
      }
      return true;
    },
  },
  {
    name: "ADI",
    validate(answer) {
      if (parseInt(answer) > 100 || parseInt(answer) < -100) {
        return "ADI must be only a number between (-100)-100";
      }
      return true;
    },
  },
];

const Input = () => {
  inquirer
    .prompt(properties)
    .then((answers) => {
      socket.emit("send", {
        Altitude: parseInt(answers.Altitude),
        HSI: parseInt(answers.HSI),
        ADI: parseInt(answers.ADI),
      });
      console.log("\n");
      Input();
    })

    .catch((error) => {
      if (error.isTtyError) {
        console.log("Your console environment is not supported!");
      } else {
        console.log(error);
      }
    });
};

socket.on("connect", function (socket) {
  console.log("Connected!\n");
  Input();
});
