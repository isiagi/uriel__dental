import { FaTooth } from "react-icons/fa";

import "./service.css";
import Button from "../button/Button";
import Heading from "../heading/Heading";

function Services() {
  return (
    <div className="service__container">
      <div className="service__wrapper">
        <Heading head="Our Clinic Services" tail="Services We Offer" />
        <div className="service__wrapper3">
          <div className="service__card">
            <div className="service__icon">
              <FaTooth className="service__icon" />
            </div>
            <div className="service__textz">
              <h4>Root Canal Treatment</h4>
              <p>
                The implant fixture is first placed, so that it is likely to
                osseointegrate, then a dental prosthetic is added
              </p>
            </div>
          </div>
          <div className="service__card">
            <div className="service__icon">
              <FaTooth className="service__icon" />
            </div>
            <div className="service__textz">
              <h4>Artifical Teeth</h4>
              <p>
                The implant fixture is first placed, so that it is likely to
                osseointegrate, then a dental prosthetic is added
              </p>
            </div>
          </div>
          <div className="service__card">
            <div className="service__icon">
              <FaTooth className="service__icon" />
            </div>
            <div className="service__textz">
              <h4>Dental Filling</h4>
              <p>
                The implant fixture is first placed, so that it is likely to
                osseointegrate, then a dental prosthetic is added
              </p>
            </div>
          </div>
          <div className="service__card">
            <div className="service__icon">
              <FaTooth className="service__icon" />
            </div>
            <div className="service__textz">
              <h4>Orthodentic Treatment</h4>
              <p>
                The implant fixture is first placed, so that it is likely to
                osseointegrate, then a dental prosthetic is added
              </p>
            </div>
          </div>
        </div>
        <div>
          <Button name="Broswer Services" />
        </div>
      </div>
    </div>
  );
}

export default Services;
