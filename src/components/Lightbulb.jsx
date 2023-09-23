import { useState } from "react";

export const Lightbulb = () => {
  // Initialize the state for on/off
const [light,setLight]=useState(false)
  const toggleLight = () => {
  setLight(!light)
    console.log(light);
  };
  console.log(light)
  return (
    <div className="lightbulb-container">
      <div className={`${"lightbulb"}  ${light? "on":"off"}`} onClick={toggleLight}>
        <div className="bulb"></div>
      </div>
    </div>
  );
};
