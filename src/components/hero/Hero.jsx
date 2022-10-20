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
            <h1>Kawempe Dental Services</h1>
            <h2>Have a Better Smile</h2>
            <button className='hero__button'>Make An Appointment</button>
          </div>
        </div>
        <div className="hero__two">
          <div className="hero__text">
            <h1>Kawempe Dental Services</h1>
            <h2>Have a Better Smile</h2>
            <button className='hero__button'>Make An Appointment</button>
          </div>
        </div>
        <div className="hero__three">
          <div className="hero__text">
            <h1>Kawempe Dental Services</h1>
            <h2>Have a Better Smile</h2>
            <button className='hero__button'>Make An Appointment</button>
          </div>
        </div>
      </AutoplaySlider>
    
  );
}

export default Hero;
