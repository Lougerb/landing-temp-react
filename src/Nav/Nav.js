import React, { useState } from "react";

const Nav = () => {
  const [navBurger, setNavBurger] = useState(false);
  const openNav = (e) => {
    e.preventDefault();
    navBurger ? setNavBurger(false) : setNavBurger(true);
  };

  return (
    <div className={"l-nav" + (navBurger ? " show-nav" : "")}>
      {/* <!-- Nav Burger --> */}
      <div className={"l-nav__burger"} onClick={openNav}>
        <div className="l-nav__line"></div>
        <div className="l-nav__line"></div>
        <div className="l-nav__line"></div>
      </div>
      {/* <!-- Nav Links--> */}
      <ul className="l-nav__inner">
        <li className="l-nav__li">
          <a href="" className="l-nav__anchor" onClick={openNav}>
            <div className="l-nav__text">
              <p className="l-nav__text__p">HOME</p>
            </div>
          </a>
        </li>
        <li className="l-nav__li">
          <a href="" className="l-nav__anchor" onClick={openNav}>
            <div className="l-nav__text">
              <p className="l-nav__text__p">PRODUCTS</p>
            </div>
          </a>
        </li>
        <li className="l-nav__li">
          <a href="" className="l-nav__anchor" onClick={openNav}>
            <div className="l-nav__text">
              <p className="l-nav__text__p">ABOUT</p>
            </div>
          </a>
        </li>
        <li className="l-nav__li">
          <a href="" className="l-nav__anchor" onClick={openNav}>
            <div className="l-nav__text">
              <p className="l-nav__text__p">CONTACT</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
