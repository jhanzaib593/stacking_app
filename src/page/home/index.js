import React from "react";
import "./index.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div style={{ paddingTop: "5em", textAlign: "center" }}>
        <h1 className="color">Hipo</h1>
        <p style={{ padding: "1.2em 0" }}>
          Unstake hTON and receive TON and rewards
        </p>
        <NavLink className="" to="/" style={{ padding: "0 10px" }}>
          Stake
        </NavLink>
        <NavLink className="nav_link" to="/unstake">
          DeFi
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
