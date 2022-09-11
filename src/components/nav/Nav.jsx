import React from "react";

import im2 from '../../assets/9.png'
import { MdTableRows } from 'react-icons/md';
import { GiCancel } from 'react-icons/gi';

import "./nav.css";

function Nav() {
  const [open, setOpen] = React.useState(false)
  const [offSet, setOffset] = React.useState(0);

  React.useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  return (
    <div className={offSet > 40 ? "nav__container1" : "nav__container"}>
      <div className="nav__wrapper">
        <div className="nav__wrapper1">
        <img src={im2} alt="" width={90}/>
         
        </div>
        <div className={`${"nav__wrapper2"} ${open ? "active" : ''}`}>
          <ul className="nav__ul">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="nav__icons">
          {open ? <GiCancel onClick={() => setOpen(false)}/> : <MdTableRows onClick={() => setOpen(true)}/>}
        </div>
      </div>
      
    </div>
  );
}

export default Nav;
