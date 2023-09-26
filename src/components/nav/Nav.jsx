import React from "react";

import im2 from "../../assets1/images/6.jpg";

import { MdTableRows } from "react-icons/md";
import { GiCancel } from "react-icons/gi";

import "./nav.css";
import { Link } from "react-router-dom";

function Nav() {
  const [open, setOpen] = React.useState(false);
  const [offSet, setOffset] = React.useState(0);

  React.useEffect(() => {
    window.onscroll = () => {
      setOffset(window.scrollY);
    };
  }, []);

  return (
    <div className={offSet > 20 ? "nav__container1" : "nav__container"}>
      <div className="nav__wrapper middle__class">
        <div className="nav__wrapper1">
          <img src={im2} alt="" width={60} />
        </div>
        <div className={`${"nav__wrapper2"} ${open ? "active" : ""}`}>
          <ul className="nav__ul">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="nav__icons">
          {open ? (
            <GiCancel onClick={() => setOpen(false)} />
          ) : (
            <MdTableRows onClick={() => setOpen(true)} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
