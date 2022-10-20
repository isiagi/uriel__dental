import React from 'react'
import { FaTooth } from "react-icons/fa";

import Testmonial from "../../components/testmo/Testmonial"

import './serv.css'

function Serv() {
  return (
    <div className="service__containr">

      <div className="service__wrapper">
      <div className="service__wrapper0">
        <h2>Services</h2>
        <p>Home / Service </p>
      </div>
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
              <h4>Root Canal Treatment</h4>
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
              <h4>Artifical Teeth</h4>
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
              <h4>Dental Filling</h4>
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
              <h4>Orthodentic Treatment</h4>
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
              <h4>Teeth Extraction</h4>
              <p>
                The implant fixture is first placed, so that it is likely to
                osseointegrate, then a dental prosthetic is added
              </p>
            </div>
          </div>   
        </div> 
        {/* <div>
          <Testmonial />
        </div>  */}
      </div>
    </div>
  )
}

export default Serv