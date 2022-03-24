import React, { useEffect, useState } from "react";
import { FaLongArrowAltUp } from "react-icons/fa";
import "./HSI.css";

const HSI = (props) => {
  useEffect(() => {}, [props.hsi]);

  return (
    <div className="icon">
      <div className="circle" style={{ transform: `rotate(${props.hsi}deg)` }}>
        <div className="number number0">0</div>
        <div className="number number180">180</div>
        <div className="number number90">90</div>
        <div className="number number270">270</div>
      </div>
      <div className="arrow">
        <FaLongArrowAltUp />
      </div>
    </div>
  );
};
export default HSI;
