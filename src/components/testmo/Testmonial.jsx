import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import { ImQuotesLeft } from "react-icons/im";

import img from "../../assets/4.jpeg";

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
                <div>
                  <span style={{ color: "#E4E5E6", lineHeight: "2rem" }}>
                    {slideImage.caption}
                  </span>
                </div>
                <ImQuotesLeft
                  style={{
                    color: "#E4E5E6",
                    fontSize: "30px",
                    marginTop: "20px",
                  }}
                />
                <p style={{ paddingTop: "28px" }}>John Doe</p>
              </div>
            ))}
          </Slide>
        </div>
      </div>
    </div>
  );
}

export default Testmonial;
