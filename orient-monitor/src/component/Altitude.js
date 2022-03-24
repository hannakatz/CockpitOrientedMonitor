import React, { useEffect, useState } from "react";
import "./Altitude.css";

const Altitude = (props) => {
  useEffect(() => {}, [props.altitude]);

  return (
    <div>
      <hr
        class="new1"
        style={{ marginTop: `${-(props.altitude * 0.066) + 260}px` }}
      ></hr>
      <div className="altitude-box-gray">
        <div className="column-contaoner">
          <h4>3000</h4>
        </div>
        <div className="column-contaoner">
          <h4>2000</h4>
        </div>

        <div className="column-contaoner">
          <h4>1000</h4>
        </div>
        <div className="column-contaoner">
          <h4>0</h4>
        </div>
      </div>
    </div>
  );
};
export default Altitude;
