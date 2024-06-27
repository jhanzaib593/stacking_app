import { Col, Drawer, Row, Button } from "antd";
import "./index.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/LOGOsad 1.png";
import React, { useState } from "react";
import { MenuFoldOutlined } from "@ant-design/icons";

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
      <div>
        <div className="container">
          <Row style={{ padding: "12px 0" }}>
            <Col span={4} className="logo">
              <NavLink to={"/"}>
                <img src={logo} alt="" width={50} height={50} />
              </NavLink>
            </Col>
            <Col span={16}>
              <div className="nav">
                <div>
                  <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                      `nav_link ${isActive ? "nav_active" : ""}`
                    }
                  >
                    Home
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to={"/app"}
                    className={({ isActive }) =>
                      `nav_link ${isActive ? "nav_active" : ""}`
                    }
                  >
                    Stake
                  </NavLink>
                </div>

                <div>
                  <NavLink
                    to={"/referral"}
                    className={({ isActive }) =>
                      `nav_link ${isActive ? "nav_active" : ""}`
                    }
                  >
                    Referral
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to={"/defi"}
                    className={({ isActive }) =>
                      `nav_link ${isActive ? "nav_active" : ""}`
                    }
                  >
                    DApp RoadMap
                  </NavLink>
                </div>
              </div>
            </Col>
            <Col span={4} className="h_btn">
              <NavLink to={"/app"}>
                <Button className="h_btn2">Go To App</Button>
              </NavLink>
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
                    Home
                  </NavLink>
                  <NavLink
                    to={"/app"}
                    className={({ isActive }) =>
                      `nav_link ${isActive ? "nav_active" : ""}`
                    }
                  >
                    Stake
                  </NavLink>

                  <NavLink
                    to={"/referral"}
                    className={({ isActive }) =>
                      `nav_link ${isActive ? "nav_active" : ""}`
                    }
                  >
                    Referral
                  </NavLink>
                  <NavLink
                    to={"/defi"}
                    className={({ isActive }) =>
                      `nav_link ${isActive ? "nav_active" : ""}`
                    }
                  >
                    DApp RoadMap
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
