import React from "react";
import logo from "../../assets/logo2.gif";
import styles from "../stylesheets/header_styles.module.css";
function Header() {
  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.logo}>BlogspoT</h1>
        {/* <img src={logo} alt="hello" /> */}
        <div className={styles.buttons}>
          <div className={styles.links}>
            <a href="#">write <b>bt</b></a>
            <a href="#">login</a>
          </div>
          <button className={styles.signup}>Get Started</button>
        </div>
      </div>
      {/* <hr style={{ margin: 0 }} /> */}
    </>
  );
}

export default Header;
