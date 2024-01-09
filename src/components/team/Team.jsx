import Heading from "../heading/Heading";
import "./team.css";

import img from "../../assets1/images/dentist.jpeg";

function Team() {
  return (
    <div className="team__container">
      <div className="middle__class">
        <div className="team__wrapper">
          <Heading head="Meet Our Team" tail="Top Professionals In Industry" />
          <div className="team__card">
            <div className="team__card__item">
              <div className="team__card__img">
                <img src={img} alt="" />
              </div>
              <div className="team__card__text">
                <h3>Dr Emmanuel Kiwanuka</h3>
                <p>Orthodontist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
