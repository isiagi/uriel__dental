import React from "react";
import { FaTooth } from "react-icons/fa";

import Testmonial from "../../components/testmo/Testmonial";

import "./serv.css";
import Button from "../../components/button/Button";
import Semi_banner from "../../components/semibanner/Semi_banner";
import { Link } from "react-router-dom";

function Serv() {
  return (
    <div className="service__containr">
      <div className="service__wrapper">
        <Semi_banner page={"Services"} />
        <div className="service__wrapper1">
          <h1>Our Clinic Services</h1>
          <p>services we offer</p>
        </div>
        <div className="service__wrapper3">
          {[1, 2, 3, 4, 5].map((item) => (
            <div className="service__card" key={item}>
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
              <Link to="/services/detail">
                <Button name={"View Service"} />
              </Link>
            </div>
          ))}
          {/* <div className="service__card">
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
          <div className="service__card">
            <div className="service__icon">
              <FaTooth className="service__icon" />
            </div>
            <div className="service__textz">
              <h4>Teeth Extraction</h4>
              <p>
                The implant fixture is first placed, so that it is likely to
                osseointegrate, then a dental prosthetic is added
              </p>
            </div>
          </div> */}
        </div>
        {/* <div>
          <Testmonial />
        </div>  */}
      </div>
    </div>
  );
}

export default Serv;
