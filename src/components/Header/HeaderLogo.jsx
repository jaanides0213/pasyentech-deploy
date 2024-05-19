// Header.jsx
import Styles from "./Header.module.css";
import Logo from "../../assets/Logo.png";

const HeaderLogo = () => {
  return (
    <header className={Styles["HeaderLogo"]}>
      <img src={Logo} alt="logo" className={Styles["Logo"]} />
      <span className={Styles["HeaderLogo__span"]}></span>
    </header>
  );
};

export default HeaderLogo;
