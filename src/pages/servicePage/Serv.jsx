import React from "react";
import { Helmet } from "react-helmet";
import "./serv.css";
import Button from "../../components/button/Button";
import Semi_banner from "../../components/semibanner/Semi_banner";
import useScrollToTop from "../../hooks/useScrollToTop";
import Testmonial from "../../components/testmo/Testmonial";
import Banner from "../../components/banner/Banner";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const dentalServices = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/isiagi/image/upload/v1698910793/fgj9oioqqombafkj45rn.jpg",
    service: "ORTHODONTICS (TEETH ALIGNMENT)",
    link: "Orthodontics",
    detail:
      "Achieve a straighter, healthier smile with Orthodontics. Our expert orthodontists specialize in correcting misaligned teeth and jaws, offering a range of treatments, including braces and clear aligners.",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/isiagi/image/upload/v1698501098/d3p3uf0fle9yndvsojvq.jpg",
    service: "ENDODONTICS (ROOT CANAL TREATMENT)",
    link: "Endodontics",
    detail:
      "Find relief from tooth pain with Endodontics. Our experienced endodontists perform root canal treatments to save damaged teeth and alleviate discomfort, ensuring you maintain your natural smile.",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/isiagi/image/upload/v1698503248/zktutxi81jra1ysswya2.jpg",
    service: "CHILD DENTISTRY",
    link: "Child Dentistry",
    detail:
      "Give your child the gift of a healthy smile with Child Dentistry. Our friendly pediatric specialists provide gentle care, from preventive check-ups to treatments, to ensure a lifetime of great oral health.",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/isiagi/image/upload/v1698910430/ak0aasosk0z7lobliszv.jpg",
    service: "PROSHODONTICS (CROWNS AND BRIDGES AND IMPLANTS)",
    link: "Prothodontics",
    detail:
      "Restore your smile's function and aesthetics with Prosthodontics. Our skilled prosthodontists focus on dental prostheses like crowns, bridges, and dentures, customizing solutions to suit your unique needs.",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/isiagi/image/upload/v1698500687/lmhpcogbbw6gvayzh7kb.jpg",
    service: "COSMETIC DENTISTRY (VENEERS, TEETH WHITENING)",
    link: "Cosmetic Dentistry",
    detail:
      "Enhance your smile's beauty with Cosmetic Dentistry. Our cosmetic experts offer a range of services, including teeth whitening, veneers, and smile makeovers, helping you achieve the confident, radiant smile you desire.",
  },
];

function Serv() {
  useScrollToTop();

  return (
    <>
      <Helmet>
        <title>Uriel Dental Services</title>
        <meta name="description" content="Uriel Dental Services" />
      </Helmet>
      <div className="service__containr">
        <Semi_banner page={"Services"} />
        <div className="middle__class">
          <div className="service__wrapper">
            <div className="service__wrapper1">
              <h1>Our Clinic Services</h1>
              <p>services we offer</p>
            </div>
            <div className="service__wrapper3">
              {dentalServices.map(({ id, service, detail, image, link }) => (
                <div className="service__card card__hover" key={id}>
                  <div className="service__img">
                    <LazyLoadImage effect="blur" src={image} alt="" />
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
                      path={`services/${link}`}
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
