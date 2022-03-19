//const PORT = 8000;
const prompt = require("prompt");

const properties = [
  {
    name: "Altitude",
    warning: "Altitude must be only a number between 0-3000",
    conform: function (Altitude) {
      debugger;
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

prompt.start();

prompt.get(properties, function (err, result) {
  if (err) {
    return onErr(err);
  }

  console.log("Command-line input received:");
  console.log("  Altitude: " + result.Altitude);
  console.log("  HSI: " + result.HSI);
  console.log("  ADI: " + result.ADI);
});

function onErr(err) {
  console.log(err);
  return 1;
}
