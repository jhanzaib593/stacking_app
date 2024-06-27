import React, { useState } from "react";
import "./index.css";

const StakeSwitch = () => {
  const [isStaked, setIsStaked] = useState(false);

  const toggleSwitch = () => {
    setIsStaked(!isStaked);
  };

  return (
    <div
      className={`switch ${isStaked ? "staked" : "unstaked"}`}
      onClick={toggleSwitch}
    >
      <div className="slider"></div>
      <span className="label">{isStaked ? "Unstake" : "Stake"}</span>
    </div>
  );
};

export default StakeSwitch;
