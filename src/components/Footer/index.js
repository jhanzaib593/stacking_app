import { Col, Row } from "antd";
import React from "react";
import logo from "../../assets/logo.jpeg";

const Footer = () => {
  return (
    <div style={{ paddingTop: "3em" }}>
      <div className="" style={{ backgroundColor: "white" }}>
        <div className="container">
          <Row style={{ paddingTop: "1em" }}>
            <Col xs={24} md={6} sm={24} lg={6}>
              <img src={logo} alt="" width={100} height={100} />
            </Col>
            <Col xs={24} md={6} sm={24} lg={6}></Col>
            <Col xs={24} md={6} sm={24} lg={6}></Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Footer;
