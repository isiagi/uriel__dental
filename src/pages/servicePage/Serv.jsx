import React from "react";
import { FaTooth } from "react-icons/fa";

import "./serv.css";
import Button from "../../components/button/Button";
import Semi_banner from "../../components/semibanner/Semi_banner";
import { Link } from "react-router-dom";
import img4 from "../../assets1/images/26.jpg";
import img5 from "../../assets1/images/kid.jpg";
import img6 from "../../assets1/images/31.jpg";
import img7 from "../../assets1/images/implant.jpg";
import img8 from "../../assets1/images/32.jpg";
import useScrollToTop from "../../hooks/useScrollToTop";
import Testmonial from "../../components/testmo/Testmonial";
import Banner from "../../components/banner/Banner";

const dentalServices = [
  {
    id: 1,
    image: img6,
    service: "Orthodontics",
    detail:
      "Achieve a straighter, healthier smile with Orthodontics. Our expert orthodontists specialize in correcting misaligned teeth and jaws, offering a range of treatments, including braces and clear aligners.",
  },
  {
    id: 3,
    image: img8,
    service: "Endodontics",
    detail:
      "Find relief from tooth pain with Endodontics. Our experienced endodontists perform root canal treatments to save damaged teeth and alleviate discomfort, ensuring you maintain your natural smile.",
  },
  {
    id: 4,
    image: img5,
    service: "Child Dentistry",
    detail:
      "Give your child the gift of a healthy smile with Child Dentistry. Our friendly pediatric specialists provide gentle care, from preventive check-ups to treatments, to ensure a lifetime of great oral health.",
  },
  {
    id: 2,
    image: img7,
    service: "Prothodontics",
    detail:
      "Restore your smile's function and aesthetics with Prosthodontics. Our skilled prosthodontists focus on dental prostheses like crowns, bridges, and dentures, customizing solutions to suit your unique needs.",
  },
  {
    id: 5,
    image: img4,
    service: "Cosmetic Dentistry",
    detail:
      "Enhance your smile's beauty with Cosmetic Dentistry. Our cosmetic experts offer a range of services, including teeth whitening, veneers, and smile makeovers, helping you achieve the confident, radiant smile you desire.",
  },
];

function Serv() {
  useScrollToTop();

  return (
    <>
      <div className="service__containr">
        <Semi_banner page={"Services"} />
        <div className="middle__class">
          <div className="service__wrapper">
            <div className="service__wrapper1">
              <h1>Our Clinic Services</h1>
              <p>services we offer</p>
            </div>
            <div className="service__wrapper3">
              {dentalServices.map(({ id, service, detail, image }) => (
                <div className="service__card card__hover" key={id}>
                  <div className="service__img">
                    <img src={image} alt="" />
                  </div>
                  {/* <div className="service__icon">
                <FaTooth className="service__icon" />
              </div> */}
                  <div className="service__textz">
                    <h4>{service}</h4>
                    <p>{detail}</p>
                  </div>
                  <div className="service__button">
                    <Button
                      name={"View Service"}
                      bgColor={"#40AEEF"}
                      path={`services/${service}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Testmonial />
      <Banner />
    </>
  );
}

export default Serv;
