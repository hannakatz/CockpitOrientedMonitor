import React, { useEffect, useState } from "react";
import "./HSI.css";

const HSI = (props) => {
  const [clockRatio, setHSI] = useState(0);

  useEffect(() => {
    fetch("/api/")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonResponse) => setHSI(jsonResponse.HSIValue));
  });

  return (
    <div>
      <div className="circle" style={{ transform: `rotate(${clockRatio}deg)` }}>
        <div className="number number0">0</div>
        <div className="number number180">180</div>
        <div className="number number90">90</div>
        <div className="number number270">270</div>
        <div className="arrow"></div>
      </div>
      {/* <button
        onClick={() => {
          setHSI(clockRatio + 30);
        }}
      ></button> */}
    </div>
  );
};
export default HSI;
