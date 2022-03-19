import React, { useEffect, useState } from "react";
import "./ADI.css";

const ADI = (props) => {
  const [backgroundColorBlue, setBackgroundColorBlue] = useState(0);

  return (
    <div>
      <div
        className="circle"
        style={{
          background: `linear-gradient(blue,${backgroundColorBlue}%, green)`,
        }}
      ></div>
      <button
        onClick={() => {
          setBackgroundColorBlue(backgroundColorBlue + 10);
        }}
      ></button>
    </div>
  );
};
export default ADI;
