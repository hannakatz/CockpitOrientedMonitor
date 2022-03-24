import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./App.css";
import Button from "./component/Button";
import Altitude from "./component/Altitude";
import HSI from "./component/HSI";
import ADI from "./component/ADI";

const initialState = {
  Altitude: 0,
  HSI: 0,
  ADI: 0,
};

const App = () => {
  const [app, setApp] = useState(initialState);
  const [falg, setFlag] = useState(true);

  useEffect(() => {
    const socket = io("http://localhost:5000");
    socket.on("connect", () => console.log("==== start===="));
    socket.on("connect_error", () => {
      setTimeout(() => socket.connect(), 5000);
    });
    debugger;
    socket.on("properties", (data) => setApp(data));
    //socket.on("disconnect", () => setTime("server disconnected"));
  }, []);

  const visual = () => {
    return (
      <>
        <Altitude altitude={app.Altitude}></Altitude>
        <HSI hsi={app.HSI}></HSI>
        <ADI adi={app.ADI}></ADI>
      </>
    );
  };

  const text = () => {
    return (
      <div className="rectangle">
        <div>Altitude = {app.Altitude}</div>
        <div>HSI = {app.HSI}</div>
        <div>ADI = {app.ADI}</div>
      </div>
    );
  };
  return (
    <div className="App">
      <Button setFlag={setFlag}></Button>
      {falg ? visual() : text()}
    </div>
  );
};

export default App;
