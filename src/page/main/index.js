import React from "react";
import "./index.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Button, Col, Row } from "antd";
import { NavLink } from "react-router-dom";
import img from "../../assets/893e73b08e9b5a12dd6e69fab3a735c8.png";
import Servies from "../../components/Services";

function Main() {
  return (
    <div>
      <div className="banner">
        <div className="banner_Wapper">
          <Header />
          <div className="container">
            <Row>
              <Col xs={24} md={12} sm={24} lg={12}>
                <div className="r_ba">
                  <h1 style={{ fontSize: "5em", fontWeight: 800 }}>
                    <span style={{ color: "#9ccc3c" }}>Yield</span>Ton
                  </h1>
                  <h1
                    className="color"
                    style={{ fontSize: 26, fontWeight: 800 }}
                  >
                    Enhancing Your Staking Rewards on Telegram and TON
                  </h1>
                  <p style={{ color: "#636363", padding: "2em 0" }}>
                    YieldTON is a decentralized application (DApp) operating on
                    Telegram and the TON blockchain. Our innovative platform is
                    designed to amplify the staking rewards for users holding
                    LST tokens.
                  </p>
                  <NavLink to={"/app"}>
                    <Button className="h_btn2">Go To App</Button>
                  </NavLink>
                </div>
              </Col>
              <Col xs={24} md={12} sm={24} lg={12} style={{ margin: "auto" }}>
                <img src={img} alt="" width={"100%"} />
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <Servies />
      <Footer />
    </div>
  );
}

export default Main;
