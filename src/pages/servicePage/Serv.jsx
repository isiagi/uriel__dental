import React from "react";
import { Helmet } from "react-helmet";
import "./serv.css";
import Button from "../../components/button/Button";
import Semi_banner from "../../components/semibanner/Semi_banner";
import img4 from "../../assets1/images/26.jpg";
import img5 from "../../assets1/images/kid.jpg";
import img8 from "../../assets1/images/32.jpg";
import useScrollToTop from "../../hooks/useScrollToTop";
import Testmonial from "../../components/testmo/Testmonial";
import Banner from "../../components/banner/Banner";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const dentalServices = [
  {
    id: 1,
    image:
      "https://scontent.cdninstagram.com/v/t39.30808-6/373749341_17995274474319495_4426096228071974919_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=0h3K1tRrWCwAX_34wvf&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzE4Mjc0OTgyNjgzOTUzNDc5Mw%3D%3D.2-ccb7-5&oh=00_AfB8uTEfslxo03Aijyg4SW_OBeDv7Z69WWbebu_5yh7VcA&oe=653EBE4D&_nc_sid=10d13b",
    service: "ORTHODONTICS (TEETH ALIGNMENT)",
    link: "Orthodontics",
    detail:
      "Achieve a straighter, healthier smile with Orthodontics. Our expert orthodontists specialize in correcting misaligned teeth and jaws, offering a range of treatments, including braces and clear aligners.",
  },
  {
    id: 3,
    image: img8,
    service: "ENDODONTICS (ROOT CANAL TREATMENT)",
    link: "Endodontics",
    detail:
      "Find relief from tooth pain with Endodontics. Our experienced endodontists perform root canal treatments to save damaged teeth and alleviate discomfort, ensuring you maintain your natural smile.",
  },
  {
    id: 4,
    image: img5,
    service: "CHILD DENTISTRY",
    link: "Child Dentistry",
    detail:
      "Give your child the gift of a healthy smile with Child Dentistry. Our friendly pediatric specialists provide gentle care, from preventive check-ups to treatments, to ensure a lifetime of great oral health.",
  },
  {
    id: 2,
    image:
      "https://scontent.cdninstagram.com/v/t39.30808-6/394524539_18001510559319495_2165593290024844411_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=WbSSTVZN3HMAX9v1ELu&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzIxNzUxNzEwOTIxMDEyNjU1NQ%3D%3D.2-ccb7-5&oh=00_AfBqnqfrLLRmlJ0WVgxTqk_hDEcQb3PoiLQbHibgUgG8iw&oe=653F2025&_nc_sid=10d13b",
    service: "PROSHODONTICS (CROWNS AND BRIDGES AND IMPLANTS)",
    link: "Prothodontics",
    detail:
      "Restore your smile's function and aesthetics with Prosthodontics. Our skilled prosthodontists focus on dental prostheses like crowns, bridges, and dentures, customizing solutions to suit your unique needs.",
  },
  {
    id: 5,
    image: img4,
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
