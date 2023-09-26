import { FaTooth } from "react-icons/fa";

import "./service.css";
import Button from "../button/Button";
import Heading from "../heading/Heading";

import img1 from "../../assets1/images/11.jpg";

const serviceData = [
  {
    id: 1,
    title: "Dental Implants",
    paragraph:
      "Dental implants are a common procedure of permanently replacing missing teeth without affecting neighboring teeth.",
  },
  {
    id: 2,
    title: "Teeth Whitening",
    paragraph:
      "Laser teeth whitening allows us to whiten your teeth for as much as 8 shades in just one visit.",
  },
  {
    id: 3,
    title: "Oral Health Consultation",
    paragraph:
      "Your smile matters to us, so your first oral health consultation at our clinic is completely free of charge.",
  },
  {
    id: 4,
    title: "Porcelain Veneers",
    paragraph:
      "Veneers are an ideal cosmetic solution for everyone who desires a beautiful smile with minimal invasions into their teeth.",
  },
  {
    id: 5,
    title: "Prevention",
    paragraph:
      "Proper oral hygiene does not only prevent caries and periodontal disease but also affects our overall health.",
  },
  {
    id: 5,
    title: "Invisible Braces",
    paragraph:
      "A modern solution of straightening your teeth through clear braces, made specifically to fit your mouth.",
  },
];

function Services() {
  return (
    <div className="service__container">
      <div className="service__wrapper middle__class">
        {/* <Heading head="Our Clinic Services" tail="Services We Offer" /> */}
        <Heading head="Popular Procedures" tail="Popular Procedures We Offer" />
        <div className="service__wrapper3">
          {serviceData.map(({ id, title, paragraph }) => (
            <div className="service__card card__hover" key={id}>
              <div>
                <div className="service__img">
                  <img src={img1} alt="" />
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
