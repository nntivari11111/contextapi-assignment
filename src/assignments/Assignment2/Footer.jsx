import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const Footer = () => {
  const { themeMode } = useContext(ThemeContext);
  return (
    <div
      style={{
        ...themeMode,
      }}
    >
      <h1>Footer </h1>
    </div>
  );
};

export default Footer;
