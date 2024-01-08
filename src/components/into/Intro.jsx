import img from "../../assets1/images/6.jpg";
import Button from "../button/Button";
import Heading from "../heading/Heading";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import "./intro.css";

function Intro() {
  return (
    <div className="intro__container">
      <div className="intro__wrapper middle__class">
        <Heading
          head="WELCOME TO URIEL DENTAL CLINIC "
          tail="We are ready to help you anytime"
        />
        <div className="intro__wrapper2">
          <div className="intro__wrapper2__img"></div>
          <div className="intro__wrapper2__text">
            <p>
              At Uriel Dental Clinic, we're dedicated to providing you and your
              family with top-notch dental care in a warm and inviting
              atmosphere. Your smile is a vital part of your overall well-being,
              and we understand the importance of maintaining it with the
              highest level of expertise and care. Our experienced team of
              dental professionals is committed to delivering personalized and
              comprehensive dental solutions to meet your unique needs.
            </p>

            <br />

            <p>
              Step into our clinic, where a dedicated team listens to your
              concerns, crafting tailored treatment plans. Offering routine
              check-ups, advanced procedures, and cosmetic enhancements, we use
              cutting-edge technology for comprehensive care. Your smile is our
              passion, and we're here to ensure it shines at its best. Uriel
              Dental Clinic prioritizes your smile's well-being, creating a
              brighter, healthier dental future. Welcome to a place where your
              smile truly matters.
            </p>

            <Button name="More about us" bgColor={"#40AEEF"} path={"about"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
