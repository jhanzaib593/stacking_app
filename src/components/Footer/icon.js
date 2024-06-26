// SocialMediaIcons.js
import React from "react";
import {
  FacebookOutlined,
  TwitterOutlined,
  GooglePlusOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
const SocialMediaIcons = () => {
  const iconStyle = { fontSize: "2em", margin: "5px", paddingTop: "10px" };

  return (
    <div>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FacebookOutlined
          className="social_icon"
          style={{ ...iconStyle, color: "#3b5998" }}
        />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <TwitterOutlined
          className="social_icon"
          style={{ ...iconStyle, color: "#1DA1F2" }}
        />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <GooglePlusOutlined
          className="social_icon"
          style={{ ...iconStyle, color: "#E1306C" }}
        />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <LinkedinOutlined
          className="social_icon"
          style={{ ...iconStyle, color: "#0077B5" }}
        />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
