import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

import CoreStyles from "react-awesome-slider/src/core/styles.scss";
// import AnimationStyles from "react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss";
import AnimationStyles from "react-awesome-slider/src/styled/fall-animation/index";

import "./hero.css";
import Button from "../button/Button";
import { Link } from "react-router-dom";

const AutoplaySlider = withAutoplay(AwesomeSlider);

function Hero() {
  return (
    <AutoplaySlider
      bullets={false}
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={4000}
      animation="fallAnimation"
      cssModule={[CoreStyles, AnimationStyles]}
      className="slider"
      selected={2}
    >
      <div className="hero__one">
        <div className="hero__textz middle__class">
          <h1>Complete Dental Care</h1>
          <div className="hero__try">
            <h2
              style={{
                color: "#545f63",
                paddingBottom: ".8rem",
                textAlign: "center",
              }}
            >
              FOR HEALTHY TEETHS &{" "}
              <span style={{ color: "#366937" }}>CONFIDENT SMILE</span>
            </h2>

            <Button
              name="View Services"
              bgColor={"#40AEEF"}
              path={"services"}
            />
          </div>
        </div>
      </div>

      <div className="hero__one">
        <div className="hero__textz middle__class">
          <h1>Your Smile, Our Expertise</h1>
          <div className="hero__try">
            <h2
              style={{
                color: "#545f63",
                paddingBottom: ".8rem",
                textAlign: "center",
              }}
            >
              Elevating smiles with precision and{" "}
              <span style={{ color: "#366937" }}>SMILE</span>
            </h2>
            <Button name="Contact Us" bgColor={"#40AEEF"} path={"contact"} />
          </div>
        </div>
      </div>
    </AutoplaySlider>
  );
}

export default Hero;
