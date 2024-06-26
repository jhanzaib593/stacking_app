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
        <NavLink
          className={({ isActive }) =>
            `nav_btn ${isActive ? "nav-active" : ""}`
          }
          to="/app"
          end // Add `end` to match exactly the "/app" route
        >
          Stake
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `nav_btn ${isActive ? "nav-active" : ""}`
          }
          to="/app/unstake"
        >
          UnStake
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
