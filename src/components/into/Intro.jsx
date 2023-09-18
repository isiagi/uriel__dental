import img from "../../assets1/images/6.jpg";
import Button from "../button/Button";
import Heading from "../heading/Heading";

import "./intro.css";

function Intro() {
  return (
    <div className="intro__container">
      <div className="intro__wrapper">
        <Heading
          head="WELCOME TO URIEL DENTAL CLINIC"
          tail="We are ready to help you anytime"
        />
        <div className="intro__wrapper2">
          <div className="intro__wrapper2__img">
            <img src={img} alt="Dr_Victoria" />
          </div>
          <div className="intro__wrapper2__text">
            <p>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer of the truth.
            </p>

            <br />

            <p>
              This mistaken idea of denouncing pleasure and praising pain was
              born and I will give you a complete account of the system, and
              expound the actualteaching.
            </p>
            <h5>-Dr ....</h5>

            <Button name="More about us" bgColor={"#2f512f"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
