import React, { useEffect, useState } from "react";
import "./ADI.css";

const ADI = (props) => {
  useEffect(() => {}, [props.adi]);

  return (
    <div>
      <div
        className="circle"
        style={{
          background: `linear-gradient(blue,${(props.adi + 100) / 2}%, green)`,
        }}
      ></div>
    </div>
  );
};
export default ADI;
