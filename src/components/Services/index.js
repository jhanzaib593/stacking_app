import React from "react";
import "./index.css";
import { Col, Row } from "antd";
import manual from "../../assets/manual 1.png";
import Group from "../../assets/Group.png";
import Vector from "../../assets/Vector.png";

function Servies() {
  return (
    <div style={{ backgroundColor: "white", padding: "5em 0" }}>
      <div className="servie">
        <div className="container">
          <h3 className="color">Why Choose yield Ton?</h3>
          <Row style={{ padding: "3em 20px " }}>
            <Col xs={24} sm={24} md={8} lg={8} style={{ padding: "1em 2em" }}>
              <div className="ser_card">
                <img src={manual} alt="" width={70} height={70} />
                <h3 style={{ padding: "1em 2em" }}>Enhanced Staking Rewards</h3>
                <p style={{ padding: "1em 2em" }}>
                  Boost your APY by 5-10% with yTON on top of the 3% from
                  traditional TON staking.
                </p>
              </div>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8} style={{ padding: "1em 2em" }}>
              <div className="ser_card">
                <img
                  src={Group}
                  alt=""
                  width={70}
                  height={70}
                  style={{ backgroundColor: "#3CD593" }}
                />
                <h3 style={{ padding: "1em 2em" }}>Secure and Decentralized</h3>
                <p style={{ padding: "1em 2em" }}>
                  Enjoy a safe, transparent staking environment on the TON
                  blockchain.
                </p>
              </div>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8} style={{ padding: "1em 2em" }}>
              <div className="ser_card">
                <img
                  src={Vector}
                  alt=""
                  width={70}
                  height={70}
                  style={{ backgroundColor: "#FCC36F" }}
                />
                <h3 style={{ padding: "1em 2em" }}>Flexibility and Control</h3>
                <p style={{ padding: "1em 2em" }}>
                  Stake or un-stake anytime and trade yTON on decentralized
                  exchanges for liquidity.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Servies;
