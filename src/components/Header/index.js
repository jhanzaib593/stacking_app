import { Col, Drawer, Row, Button, Affix } from "antd";
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
  const [top, setTop] = React.useState(0);
  console.log(setTop);
  return (
    <>
      {/* <Affix offsetTop={top}> */}
      <div style={{ backgroundColor: "white", marginTop: "-4.7em" }}>
        <div className="container">
          <Row style={{ padding: "12px 0" }}>
            <Col span={4} className="logo">
              <NavLink to={"/main"}>
                <img src={logo} alt="" width={50} height={50} />
              </NavLink>
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
                  <HomeOutlined /> Stake
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
              <NavLink to={"/"}>
                <Button className="h_btn2">Go To App</Button>
              </NavLink>
              {/* <Button className="h_btn2">Sign up</Button> */}
            </Col>
            <Col span={4} className="h_drawer">
              <MenuFoldOutlined onClick={showDrawer} />
              <Drawer onClose={onClose} open={open}>
                <div className="nav_d">
                  <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                      `nav_link ${isActive ? "nav_active" : ""}`
                    }
                  >
                    <HomeOutlined /> Stake
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
              </Drawer>
            </Col>
          </Row>
        </div>
      </div>
      {/* </Affix> */}
    </>
  );
};
export default Header;
