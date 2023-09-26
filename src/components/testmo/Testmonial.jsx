import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import { ImQuotesLeft } from "react-icons/im";

import img from "../../assets1/images/18.jpg";

import "./test.css";

const slideImages = [
  {
    url: img,
    caption:
      "I got denials from different dental doctors because of a unique and complicated case. Dr. Phillips however brought hope and eagerly took me into surgery that was successful. Now I can say that I’ve never been happier. Thank you Doctor!",
  },
  {
    url: img,
    caption:
      "I got denials from different dental doctors because of a unique and complicated case. Dr. Phillips however brought hope and eagerly took me into surgery that was successful. Now I can say that I’ve never been happier. Thank you Doctor!",
  },
  {
    url: img,
    caption:
      "I got denials from different dental doctors because of a unique and complicated case. Dr. Phillips however brought hope and eagerly took me into surgery that was successful. Now I can say that I’ve never been happier. Thank you Doctor!",
  },
];

function Testmonial() {
  return (
    <div className="testmonial__container">
      <div className="testmonial__wrapper">
        <div className="testmonial__yeah">
          <h1>Our Happy Clients</h1>
          <p>What people say about us</p>
        </div>
        <div className="slidex">
          <Slide arrows={false}>
            {slideImages.map((slideImage, index) => (
              <div className="each-slide middle__class" key={index}>
                <ImQuotesLeft
                  style={{
                    color: "#E4E5E6",
                    fontSize: "30px",
                  }}
                />
                <div>
                  <span style={{ color: "#E4E5E6", lineHeight: "2rem" }}>
                    {slideImage.caption}
                  </span>
                </div>
                <img src={img} alt="" />

                <h2 style={{ paddingBlock: "48px" }}>John Doe</h2>
              </div>
            ))}
          </Slide>
        </div>
      </div>
    </div>
  );
}

export default Testmonial;
