import React from "react";
import "./index.css";
import { NavLink, Outlet } from "react-router-dom";
import { Col, Row } from "antd";
import TransportMethod from "./a";

const Home = () => {
  return (
    <div className="container">
      {/* <TransportMethod /> */}
      <Row>
        <Col xs={24} sm={24} md={24} lg={12} style={{ margin: "auto" }}>
          <h1 style={{ fontSize: "4em", fontWeight: 800, padding: 10 }}>
            Simple and Secure<span style={{ color: "#9ccc3c" }}>Staking</span>
          </h1>
          <p style={{ color: "#636363" }}>
            Earn staking rewards every second with YTon, a decentralized liquid
            staking token with slashing protection.
          </p>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12}>
          <div style={{ paddingTop: "5em", textAlign: "center" }}>
            <div className="nav_slider">
              <NavLink
                className={({ isActive }) =>
                  `nav_btn ${isActive ? "nav-active" : ""}`
                }
                to="/app"
                end
              >
                Stake
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `nav_btn ${isActive ? "nav-active" : ""}`
                }
                to="/app/unstake"
              >
                Unstake
              </NavLink>
            </div>
            <Outlet />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
