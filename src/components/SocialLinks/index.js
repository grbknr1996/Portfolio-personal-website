import React from "react";
import { FaMedium, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/lib/fa";

import styles from "./socialLinksStyles.module.css";

const SocialLinks = () => {
  return (
    <div className={styles.socialLinks}>
      <ul>
        <li>
          <a href="mailto:grbknr1996@gmail.com">
            <FaEnvelope />
          </a>
        </li>
        <li>
          <a href="https://github.com/grbknr1996">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/grbknr1996">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://medium.com/@grbknr1996">
            <FaMedium />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
