import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import { ImQuotesLeft } from "react-icons/im";

import img from "../../assets1/images/18.jpg";

import "./test.css";

const slideImages = [
  {
    url: img,
    caption:
      "Dr.Emma may God bless your gifted hands to reach everyone because everyone deserves the smile 😊 confidence you give people Long live",
    person: "Aine Mbabazi",
  },
  {
    url: img,
    caption:
      "The best dental care I have ever experienced.the team is professional , welcoming and friendly.they made me feel like family and restored my smile.I highly recommend you all to trust them",
    person: "Murungi Jacky",
  },
  {
    url: img,
    caption:
      "Uriel dental clinic.. Thank you so much for your excellent care, kindness and compansion…your really appreciated 🤝for your selfness and Generosity 👍and bringing new smiles ..🌹🌹",
    person: "Patricia Nakitto",
  },
  {
    url: img,
    caption:
      "I can't believe that in only five months my dream of having a confident smile had come true. Dr Emmanuel is so caring and friendly, you can't fail to feel at home at Uriel dental clinic. I really appreciate your services Dr, may God reward you",
    person: "Nansimbe Viola",
  },
  {
    url: img,
    caption:
      "Five months down the road having my teeth corrected and its been an amazing experience, not only i but those who have followed my braces journey will agree that there is positive progress. Thank You Dr. Emmanuel",
    person: "Anyango Elizabeth",
  },
  {
    url: img,
    caption:
      "Uriel dental clinic is Excellent with excellent care and compassion! Highly recommend for your dental needs/care!!! I am so elated by the new technology they have..eloquent hospitality at the reception.",
    person: "Daniel Ikomoli",
  },
  {
    url: img,
    caption:
      "Uriel Dental Clinic is the best dental clinic within Kampala City, because recent I had better service ever from them. Trust them you will not regret.",
    person: "Amanya Gibson",
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
          <Slide arrows={true}>
            {slideImages.map(({ url, caption, person }) => (
              <div className="each-slide middle__class" key={person}>
                <ImQuotesLeft
                  style={{
                    color: "#E4E5E6",
                    fontSize: "30px",
                  }}
                />
                <div style={{ paddingBlock: "2rem" }}>
                  <span
                    style={{
                      color: "#E4E5E6",
                      lineHeight: "2rem",
                      fontSize: "20px",
                    }}
                  >
                    {caption}
                  </span>
                </div>
                <h3
                  style={{
                    backgroundColor: "#2F512F",
                    width: "80px",
                    height: "80px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    fontSize: "30px",
                  }}
                >
                  {person[0]}
                </h3>

                <h2 style={{ paddingBlock: "48px" }}>{person}</h2>
              </div>
            ))}
          </Slide>
        </div>
      </div>
    </div>
  );
}

export default Testmonial;
