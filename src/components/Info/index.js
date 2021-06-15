import React from "react";

import Avatar from "../Avatar/index";
import SocialLinks from "../SocialLinks/index";

const Info = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Avatar />
      <div>
        <h2>Hi,I'm Gourab Konar👋</h2>
        <h3>Fullstack Node.js Developer 👨‍💻</h3>
        <SocialLinks />
      </div>
    </div>
  );
};

export default Info;
