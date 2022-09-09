import { FaTooth } from "react-icons/fa";

import "./service.css";

function Services() {
  return (
    <div className="service__container">
      <div className="service__wrapper">
        <div className="service__wrapper1">
          <h1>Our Clinic Services</h1>
          <p>services we offer</p>
        </div>
        <div className="service__wrapper3">
          <div className="service__card">
            <div className="service__icon">
              <FaTooth className='service__icon'/>
            </div>
            <div className="service__textz">
              <h4>Dental Implants</h4>
              <p>
                The implant fixture is first placed, so that it is likely to
                osseointegrate, then a dental prosthetic is added
              </p>
            </div>
          </div>
          <div className="service__card">
            <div className="service__icon">
              <FaTooth className='service__icon'/>
            </div>
            <div className="service__textz">
              <h4>Dental Calculus</h4>
              <p>
                The implant fixture is first placed, so that it is likely to
                osseointegrate, then a dental prosthetic is added
              </p>
            </div>
          </div>
          <div className="service__card">
            <div className="service__icon">
              <FaTooth className='service__icon'/>
            </div>
            <div className="service__textz">
              <h4>Prevention</h4>
              <p>
                The implant fixture is first placed, so that it is likely to
                osseointegrate, then a dental prosthetic is added
              </p>
            </div>
          </div>
          <div className="service__card">
            <div className="service__icon">
              <FaTooth className='service__icon'/>
            </div>
            <div className="service__textz">
              <h4>Cosmetic Dentistry</h4>
              <p>
                The implant fixture is first placed, so that it is likely to
                osseointegrate, then a dental prosthetic is added
              </p>
            </div>
          </div>
        </div>
        <div>
            <button className='service__btn'>view all services</button>
        </div>
      </div>
    </div>
  );
}

export default Services;
