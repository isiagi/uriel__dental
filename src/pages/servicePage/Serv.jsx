import React from "react";
import { FaTooth } from "react-icons/fa";

import "./serv.css";
import Button from "../../components/button/Button";
import Semi_banner from "../../components/semibanner/Semi_banner";
import { Link } from "react-router-dom";

import img1 from "../../assets1/images/20.jpg";
import img2 from "../../assets1/images/21.png";
import img3 from "../../assets1/images/22.jpeg";
import img4 from "../../assets1/images/24.jpg";
import img5 from "../../assets1/images/kid.jpg";
import useScrollToTop from "../../hooks/useScrollToTop";
import Testmonial from "../../components/testmo/Testmonial";
import Banner from "../../components/banner/Banner";

const dentalServices = [
  {
    id: 1,
    image: img1,
    service: "Orthodontics",
    detail:
      "The implant fixture is first placed, so that it is likely to osseointegrate then a dental prosthetic is added",
  },
  {
    id: 2,
    image: img2,
    service: "Prothodontics",
    detail:
      "The implant fixture is first placed, so that it is likely to osseointegrate then a dental prosthetic is added",
  },
  {
    id: 3,
    image: img3,
    service: "Endodontics",
    detail:
      "The implant fixture is first placed, so that it is likely to osseointegrate then a dental prosthetic is added",
  },
  {
    id: 4,
    image: img5,
    service: "Child Dentistry",
    detail:
      "The implant fixture is first placed, so that it is likely to osseointegrate then a dental prosthetic is added",
  },
  {
    id: 5,
    image: img4,
    service: "Cosmetic Dentistry",
    detail:
      "The implant fixture is first placed, so that it is likely to osseointegrate then a dental prosthetic is added",
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
                    <Link to={`/services/${service}`}>
                      <Button name={"View Service"} />
                    </Link>
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
