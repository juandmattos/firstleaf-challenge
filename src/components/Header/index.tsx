import React from "react";
import Countdown from "../Countdown";
import Logo from "../../images/logo.svg";

import * as styles from "./index.module.scss";

const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        <img src={Logo} alt="firstleaf logo" className={styles.logo} />
        <div className={styles.countdownContainer}>
          <Countdown customClass={styles.container} />
          <button className={styles.checkoutBtn}>Checkout</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
