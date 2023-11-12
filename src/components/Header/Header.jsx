import React, { useState, useEffect } from "react";
import Styles from "./Header.module.css";

const Header = () => {
  const [currentTime, setCurrentTime] = useState(getFormattedTime());

  // Function to format the time as "hh:mm am/pm"
  function getFormattedTime() {
    const currentDateTime = new Date();
    const hours = currentDateTime.getHours() % 12 || 12;
    const minutes = currentDateTime.getMinutes().toString().padStart(2, "0");
    const ampm = currentDateTime.getHours() >= 12 ? "pm" : "am";
    return `${hours}:${minutes} ${ampm}`;
  }

  // Update the time every minute
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getFormattedTime());
    }, 60000); // 60000 milliseconds = 1 minute

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={Styles["Header__Cont"]}>
      <div className={Styles["timeBox"]}>{currentTime}</div>
      <div className={Styles["Profile"]}>P</div>

      <div className={Styles["UserName"]}>Username</div>
    </div>
  );
};

export default Header;
