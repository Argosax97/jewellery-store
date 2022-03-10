import React from "react";
import Button from "../../Styles/Button";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <input type="search" placeholder="Search" className="header-search" />
      <Button type="search"></Button>
    </header>
  );
};

export default Header;
