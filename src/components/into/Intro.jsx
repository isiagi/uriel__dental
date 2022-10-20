import img from "../../assets/home.jpeg";

import "./intro.css";

function Intro() {
  return (
    <div className="intro__container">
      <div className="intro__wrapper">
        <div className="intro__wrapper1">
          <h1>Welcome To Kawempe Dental Services</h1>
          <p>We are ready to help you anytime</p>
        </div>
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

            <button>More about us</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
