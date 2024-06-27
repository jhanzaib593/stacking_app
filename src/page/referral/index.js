import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Button, Col, Row } from "antd";
// import './index.css'
import marketing from "../../assets/Word of mouth marketing and promotion.png";
import earn from "../../assets/Lettering Sale with bags, card and percent sign text.png";
import { NavLink } from "react-router-dom";

function Referral() {
  return (
    <div>
      <Header />
      <div className="referral" style={{ padding: "3em 0" }}>
        <div className="container">
          <h1 style={{ fontWeight: 800 }}>
            <span style={{ color: "#9ccc3c" }}>Yield</span>Ton Referrals
          </h1>
          <Row style={{ paddingTop: "1em" }}>
            <Col
              xs={24}
              md={12}
              sm={24}
              lg={12}
              style={{ textAlign: "center" }}
            >
              <img src={marketing} alt="" width={306} height={306} />
            </Col>
            <Col
              xs={24}
              md={12}
              sm={24}
              lg={12}
              style={{ margin: "auto", padding: 10 }}
            >
              <h3 className="color">1. Invite your friends</h3>
              <p style={{ padding: "20px 0", color: "#636363" }}>
                Share your unique referral link with friends, family, and
                community members.
              </p>
            </Col>
            <Col
              xs={24}
              md={12}
              sm={24}
              lg={12}
              style={{ textAlign: "center" }}
            >
              <img src={earn} alt="" width={306} height={306} />
            </Col>
            <Col
              xs={24}
              md={12}
              sm={24}
              lg={12}
              style={{ margin: "auto", padding: 10 }}
            >
              <h3 className="color">2. Earn Rewards</h3>
              <p style={{ padding: "20px 0", color: "#636363" }}>
                Receive 20% off for every successful referral.
              </p>
            </Col>
          </Row>
          <div style={{ textAlign: "center", padding: "3em" }}>
            <p style={{ paddingBottom: 30 }}>
              Connect your YTON wallet to access your referral link and track
              progress.
            </p>
            <NavLink to={"/app"}>
              <Button className="h_btn2">Go To App</Button>
            </NavLink>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Referral;
