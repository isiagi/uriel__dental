import React from "react";

import img2 from '../../assets/9.png'
import Head from "../head/Head";

import "./nav.css";

function Nav() {
  return (
    <div className="nav__container">
      <div className="nav__wrapper">
        <div className="nav__wrapper1">
        <img src={img2} alt="" width={90}/>
         
        </div>
        <div className="nav__wrapper2">
          <ul className="nav__ul">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      
    </div>
  );
}

export default Nav;
