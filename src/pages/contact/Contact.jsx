import React from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { AiOutlineCalendar } from "react-icons/ai";

import "./contact.css";
import MapComponent from "./Map";
import Semi_banner from "../../components/semibanner/Semi_banner";
import Button from "../../components/button/Button";
import Heading from "../../components/heading/Heading";
import useScrollToTop from "../../hooks/useScrollToTop";

function Contact() {
  useScrollToTop();

  return (
    <div className="contact__container">
      <Semi_banner page={"Contact"} />
      <div className="">
        <div className="contact__wrapper">
          <Heading
            head="CONTACT URIEL DENTAL CLINIC"
            tail="We ❤ to hear from you!"
          />
          <div className="contact__top">
            <div className="footer__loc">
              <div className="contact__flex">
                <AiOutlinePhone className="contact__icon__style" />
                <p> +256772-150-850/ +256707515267</p>
              </div>
              <div className="contact__flex">
                <GoLocation />
                <p>urieldentalclinic@gmail.com</p>
              </div>
              <div className="contact__flex">
                <GoLocation />
                <p>Corporation Rise, Kampala</p>
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
                  <textarea
                    name="message"
                    id=""
                    cols="30"
                    rows="20"
                    required
                  ></textarea>
                  <label htmlFor="message">message</label>
                </div>
                <Button name="Talk To Us" bgColor={"#2F512F"} />
              </form>
              <div className="contacts__icons">
                <GoLocation />
                <GoLocation />
                <GoLocation />
              </div>
            </div>
          </div>
          <div className="contact__map">
            <MapComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
