// Header.jsx

import React from 'react';
import Styles from './Header.module.css'; 
import Logo from '../../assets/Logo.png';

const Header = () => {
  return (
    <header className={Styles["Header"]}>
      <img src={Logo} alt="logo" className={Styles["Logo"]} />
      <span className={Styles["Header__span"]}>
      </span>
    </header>
  );
};

export default Header;
