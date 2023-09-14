import React from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { AiOutlineCalendar } from "react-icons/ai";

import "./contact.css";
import MapComponent from "./Map";
import Semi_banner from "../../components/semibanner/Semi_banner";
import Button from "../../components/button/Button";

function Contact() {
  return (
    <div className="contact__container">
      <div className="contact__wrapper">
        <Semi_banner page={"Contact"} />
        <div className="contact__top">
          <div className="footer__loc">
            <div className="contact__flex">
              <AiOutlinePhone className="contact__icon__style" />
              <p> +256751571025 / +256751571025</p>
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
                <input type="text" required className="input" />
                <label htmlFor="" className="input__label">
                  Name
                </label>
              </div>

              <div className="contact__input">
                <input type="text" required className="input" />
                <label htmlFor="" className="input__label">
                  Email
                </label>
              </div>
              <div className="contact__input">
                <input type="text" name="tel" required className="input" />
                <label htmlFor="tel" className="input__label">
                  Tell
                </label>
              </div>
              <div className="contact__inpu">
                <textarea name="" id="" cols="30" rows="10" required></textarea>
                <label htmlFor="">message</label>
              </div>
              <Button name="submit" />
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
