import React, { useState } from "react";
import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <div className="l-header">
      <div className="l-header__inner">
        <h1 className="l-header__logo">
          <a href="#" className="l-header__logo__anchor">
            <span>LOGO</span>
          </a>
        </h1>
        <Nav />
      </div>
    </div>
  );
};

export default Header;
