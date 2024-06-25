import { Col, Drawer, Row, Button, Input } from "antd";
import "./index.css";
import { NavLink } from "react-router-dom";
// import logo from "../../assets/img/4lCu2zih0ca.svg";
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
  const { Search } = Input;

  const onSearch = (value, _e, info) => console.log(info?.source, value);

  const [top, setTop] = React.useState(0);
  console.log(setTop);
  return (
    <>
      <div>
        <div className="container">
          <Row style={{ padding: "12px 0" }}>
            <Col span={4} className="logo">
              {/* <img src={logo} alt="" width={100} height={33} /> */}
              <h6>logo</h6>
            </Col>
            <Col span={16}>
              <div className="nav">
                <NavLink className="nav_link">
                  <HomeOutlined /> Stake
                </NavLink>
                <NavLink className="nav_link">
                  <UsergroupAddOutlined /> DeFi
                </NavLink>
                <NavLink className="nav_link">
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
