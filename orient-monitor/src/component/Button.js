import React, { useState } from "react";
import "./Button.css";

const Button = (props) => {
  const setFlagT = () => {
    props.setFlag(true);
  };

  const setFlagF = () => {
    props.setFlag(false);
  };

  return (
    <div className="row-contaoner">
      <button className="visualB" onClick={setFlagT}>
        Visual
      </button>
      <button className="textB" onClick={setFlagF}>
        Text
      </button>
    </div>
  );
};
export default Button;
