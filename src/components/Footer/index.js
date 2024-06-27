import { Button, Col, Input, Row, Space } from "antd";
import React from "react";
import "./index.css";
import logo from "../../assets/LOGOsad 1.png";
import SocialMediaIcons from "./icon";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="" style={{ backgroundColor: "#EDFBF5" }}>
        <div className="container">
          <Row style={{ padding: "5em 2em" }}>
            <Col xs={24} md={6} sm={24} lg={6} style={{ textAlign: "center" }}>
              <img src={logo} alt="" width={100} height={100} />
              <p>Follow my social media.</p>
              <SocialMediaIcons />
            </Col>
            <Col
              xs={24}
              md={6}
              sm={24}
              lg={6}
              style={{ display: "grid", justifyContent: "center" }}
            >
              <p style={{ fontWeight: 600 }}>Explore</p>
              <ul class="foot_meau">
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/app"}>Stake</NavLink>
                </li>
                <li>
                  <NavLink to={"/defi"}>DApp Roadmaps</NavLink>
                </li>
                <li>
                  <NavLink to={"/referral"}>Referral</NavLink>
                </li>
              </ul>
            </Col>
            <Col
              xs={24}
              md={6}
              sm={24}
              lg={6}
              style={{ display: "grid", justifyContent: "center" }}
            >
              <p style={{ fontWeight: 600 }}>Information</p>
              <ul class="foot_meau">
                <li>
                  <NavLink>Membership</NavLink>
                </li>
                <li>
                  <NavLink>Purchase Guide</NavLink>
                </li>
                <li>
                  <NavLink>Privacy Policy</NavLink>
                </li>
                <li>
                  <NavLink>Terms of Service</NavLink>
                </li>
              </ul>
            </Col>
            <Col
              xs={24}
              md={6}
              sm={24}
              lg={6}
              style={{ display: "grid", justifyContent: "center" }}
            >
              <p style={{ fontWeight: 600, padding: "10px 0" }}>
                Looks good! Want to invest in?
              </p>
              <Space direction="vertical" size="middle">
                <Space.Compact
                  style={{
                    width: "100%",
                  }}
                >
                  <Input defaultValue="Email Address" />
                  <Button className="h_btn2">Submit</Button>
                </Space.Compact>
              </Space>
            </Col>
          </Row>

          <div className="copyright">
            <p style={{ color: "#636363" }}>© 2024. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
