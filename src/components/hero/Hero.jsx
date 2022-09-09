import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

import CoreStyles from "react-awesome-slider/src/core/styles.scss";
// import AnimationStyles from "react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss";
import AnimationStyles from "react-awesome-slider/src/styled/fall-animation/index";

import "./hero.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

function Hero() {
  return (
    <div>
      <AutoplaySlider
        bullets={false}
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={4000}
        animation="fallAnimation"
        cssModule={[CoreStyles, AnimationStyles]}
        className="slider"
      >
        <div className="hero__one">
          <div className="hero__text">
            <h1>Welcome To Arron's Dental Hub</h1>
            <h2>Have a Better Smile</h2>
          </div>
        </div>
        <div className="hero__two">
          <div className="hero__text">
            <h1>Welcome To Arron's Dental Hub</h1>
            <h2>Have a Better Smile</h2>
          </div>
        </div>
        <div className="hero__three">
          <div className="hero__text">
            <h1>Welcome To Arron's Dental Hub</h1>
            <h2>Have a Better Smile</h2>
          </div>
        </div>
      </AutoplaySlider>
    </div>
  );
}

export default Hero;
