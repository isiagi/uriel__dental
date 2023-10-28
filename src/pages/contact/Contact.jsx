import React, { useRef, useState } from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { FaFacebookSquare, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiOutlineCalendar } from "react-icons/ai";

import "./contact.css";
import MapComponent from "./Map";
import Semi_banner from "../../components/semibanner/Semi_banner";
import Heading from "../../components/heading/Heading";
import useScrollToTop from "../../hooks/useScrollToTop";
import { Helmet } from "react-helmet";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import emailjs from "@emailjs/browser";

function Contact() {
  useScrollToTop();
  const [loading, setLoading] = useState("");

  const nameRef = useRef();
  const numberRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: nameRef.current.value,
      tel: numberRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };

    try {
      setLoading(true);
      const response = await emailjs.send(
        "service_lpx6aqb",
        "template_4h4xr0m",
        data,
        "ZePcsPDii57VPhcc6"
      );
      console.log(response);
      toast.success("Your Message Was Successfully Sent!");
    } catch (error) {
      console.log(error);
      toast.error("An Error Occured While sending Your Message");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact__container">
      <ToastContainer position="top-center" theme="colored" />
      <Helmet>
        <title>Contact Uriel Dental</title>
        <meta name="description" content="Contact Uriel Dental" />
      </Helmet>
      <Semi_banner page={"Contact"} />
      <div className="">
        <div className="contact__wrapper">
          <Heading
            head="CONTACT URIEL DENTAL CLINIC"
            tail="We ❤ to hear from you!"
          />
          <div className="contact__top">
            <div className="footer__loc">
              <a
                href="tel:+256772150850"
                style={{ height: "100%", width: "100%" }}
              >
                <div className="contact__flex">
                  <span
                    style={{
                      display: "flex",
                      gap: "1rem",
                      alignItems: "center",
                    }}
                  >
                    <AiOutlinePhone className="contact__icon__style" />
                    <p> +256772-150-850/ +256707515267</p>
                  </span>
                </div>
              </a>

              <a
                href="mailto:urieldentalclinic@gmail.com"
                style={{ height: "100%", width: "100%" }}
              >
                <div className="contact__flex">
                  <span
                    style={{
                      display: "flex",
                      gap: "1rem",
                      alignItems: "center",
                    }}
                  >
                    <p>
                      <HiOutlineMailOpen className="contact__icon__style" />
                    </p>
                    <p>urieldentalclinic@gmail.com</p>
                  </span>
                </div>
              </a>

              <div className="contact__flex">
                <AiOutlineCalendar className="contact__icon__style" />
                <p>
                  <span>Mon - Sat</span> 8:00am - 6:00pm
                </p>
              </div>
              <div className="contact__flex">
                <GoLocation className="contact__icon__style" />
                <p>Corporation rise , Plot 4B Bukoto , Kampala Uganda</p>
              </div>
            </div>
            <div className="footer__form">
              <form autocomplete="off" onSubmit={handleSubmit}>
                <div className="contact__input">
                  <input
                    type="text"
                    ref={nameRef}
                    name="name"
                    required
                    className="input"
                  />
                  <label htmlFor="" className="input__label">
                    Full Names:
                  </label>
                </div>

                <div className="contact__input">
                  <input
                    type="text"
                    ref={emailRef}
                    name="email"
                    required
                    className="input"
                  />
                  <label htmlFor="" className="input__label">
                    Email:
                  </label>
                </div>
                <div className="contact__input">
                  <input
                    type="text"
                    ref={numberRef}
                    name="tel"
                    required
                    className="input"
                  />
                  <label htmlFor="tel" className="input__label">
                    Tell:
                  </label>
                </div>
                <div className="contact__inpu">
                  <textarea
                    name="message"
                    ref={messageRef}
                    id=""
                    cols="5"
                    rows="5"
                    required
                  ></textarea>
                  <label htmlFor="message">Message:</label>
                </div>
                <button
                  disabled={loading ? true : false}
                  className="service__btn"
                  style={{ backgroundColor: `${loading ? "gray" : "#2F512F"}` }}
                >
                  {loading ? "Submit..." : "Submit"}
                </button>
              </form>
              <div className="contacts__icons">
                <FaFacebookSquare className="contact__icons" />
                <FaLinkedinIn className="contact__icons" />
                <FaTiktok className="contact__icons" />
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
