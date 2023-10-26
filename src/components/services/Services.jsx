import { FaTooth } from "react-icons/fa";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import "./service.css";
import Heading from "../heading/Heading";

import img2 from "../../assets1/images/smile.jpg";
import img3 from "../../assets1/images/27.jpg";
import img4 from "../../assets1/images/28.jpg";
import img5 from "../../assets1/images/30.jpg";
import img6 from "../../assets1/images/26.jpg";

const serviceData = [
  {
    id: 1,
    title: "Dental Implants",
    paragraph:
      "Dental implants are a common procedure of permanently replacing missing teeth without affecting neighboring teeth.",
    image:
      "https://scontent.cdninstagram.com/v/t39.30808-6/394524539_18001510559319495_2165593290024844411_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=WbSSTVZN3HMAX9v1ELu&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzIxNzUxNzEwOTIxMDEyNjU1NQ%3D%3D.2-ccb7-5&oh=00_AfBqnqfrLLRmlJ0WVgxTqk_hDEcQb3PoiLQbHibgUgG8iw&oe=653F2025&_nc_sid=10d13b",
  },
  {
    id: 2,
    title: "Teeth Whitening",
    paragraph:
      "Laser teeth whitening allows us to whiten your teeth for as much as 8 shades in just one visit.",
    image: img2,
  },
  {
    id: 3,
    title: "Oral Health Consultation",
    paragraph:
      "Your smile matters to us, so your first oral health consultation at our clinic is completely free of charge.",
    image: img5,
  },
  {
    id: 4,
    title: "Porcelain Veneers",
    paragraph:
      "Veneers are an ideal cosmetic solution for everyone who desires a beautiful smile with minimal invasions into their teeth.",
    image: img6,
  },
  {
    id: 5,
    title: "Prevention",
    paragraph:
      "Proper oral hygiene does not only prevent caries and periodontal disease but also affects our overall health.",
    image: img3,
  },
  {
    id: 5,
    title: "Invisible Braces",
    paragraph:
      "A modern solution of straightening your teeth through clear braces, made specifically to fit your mouth.",
    image: img4,
  },
];

function Services() {
  return (
    <div className="service__container">
      <div className="service__wrapper middle__class">
        {/* <Heading head="Our Clinic Services" tail="Services We Offer" /> */}
        <Heading head="Popular Procedures" tail="Popular Procedures We Offer" />
        <div className="service__wrapper3">
          {serviceData.map(({ id, title, paragraph, image }) => (
            <div className="service__card card__hover" key={id}>
              <div>
                <div className="service__img">
                  <LazyLoadImage effect="blur" src={image} alt="" />
                </div>
                <div className="service__icon">
                  <FaTooth className="servicer__icon" />
                </div>
              </div>
              <div className="service__textz">
                <h4>{title}</h4>
                <p>{paragraph}</p>
              </div>
            </div>
          ))}
        </div>
        {/* <div>
          <Button name="Broswer Services" bgColor={"#2f512f"} />
        </div> */}
      </div>
    </div>
  );
}

export default Services;
