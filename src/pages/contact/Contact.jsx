import React from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { AiOutlineCalendar } from "react-icons/ai";

import "./contact.css";
import MapComponent from "./Map";

function Contact() {
  return (
    <div className="contact__container">
      <div className="contact__wrapper">
        <div className="contact__top">
          <div className="footer__loc">
            <div className="contact__flex">
              <AiOutlinePhone />
              <p> +256751571025 /  +256751571025</p>
            </div>
            <div className="contact__flex">
              <GoLocation />
              <p>Kawempe Kampala</p>
            </div>
            <div className="contact__flex">
              <AiOutlineCalendar />
              <p>
                <span>Mon - Fri</span> 8:00am - 5:00pm
              </p>
            </div>
          </div>
          <div className="footer__form">
            <form>
              <div className="contact__input">
                <input type="text" required className=""/>
                <label htmlFor="">Name</label>
              </div>
              <br />
              <div className="contact__input">
                <input type="email" required />
                <label htmlFor="">Email</label>
              </div>
              <div className="contact__input">
                <input type="tel" name='tel' required />
                <label htmlFor="tel">Tell</label>
              </div>
              <div className="contact__inp">
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <label htmlFor="">Message</label>
              </div>
            </form>
          </div>
        </div>
        <div className="contact__map">
            <MapComponent />
        </div>
      </div>
    </div>
  );
}

export default Contact;
