import { Col, Drawer, Row, Button } from "antd";
import "./index.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpeg";
import React, { useState } from "react";
import {
  MenuFoldOutlined,
  HomeOutlined,
  UsergroupAddOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

const Header = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div style={{ backgroundColor: "white" }}>
        <div className="container">
          <Row style={{ padding: "12px 0" }}>
            <Col span={4} className="logo">
              <img src={logo} alt="" width={50} height={50} />
              {/* <h6>logo</h6> */}
            </Col>
            <Col span={16}>
              <div className="nav">
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    `nav_link ${isActive ? "nav_active" : ""}`
                  }
                >
                  <HomeOutlined /> Home
                </NavLink>
                <NavLink
                  to={"/defi"}
                  className={({ isActive }) =>
                    `nav_link ${isActive ? "nav_active" : ""}`
                  }
                >
                  <UsergroupAddOutlined /> DeFi
                </NavLink>
                <NavLink
                  to={"/referral"}
                  className={({ isActive }) =>
                    `nav_link ${isActive ? "nav_active" : ""}`
                  }
                >
                  <YoutubeOutlined /> Referral
                </NavLink>
              </div>
            </Col>
            <Col span={4} className="h_btn">
              <Button className="h_btn2">Connect Wallet</Button>
              {/* <Button className="h_btn2">Sign up</Button> */}
            </Col>
            <Col span={4} className="h_drawer">
              <MenuFoldOutlined onClick={showDrawer} />
              <Drawer onClose={onClose} open={open}>
                <div className="nav_d">
                  <NavLink className="nav_link nav_link_d">
                    <HomeOutlined />
                  </NavLink>
                  <NavLink className="nav_link nav_link_d">
                    <UsergroupAddOutlined />
                  </NavLink>
                  <NavLink className="nav_link nav_link_d">
                    <YoutubeOutlined />
                  </NavLink>
                </div>
              </Drawer>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};
export default Header;
