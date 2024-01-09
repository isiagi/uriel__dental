import Heading from "../heading/Heading";
import "./team.css";

function Team() {
  return (
    <div className="team__container">
      <div className="middle__class">
        <div className="team__wrapper">
          <Heading head="Meet Our Team" tail="Top Professionals In Industry" />
          <div className="team__card">
            <div className="team__card__item">
              <div className="team__card__img">
                <img
                  src={
                    "https://media.licdn.com/dms/image/D4E03AQGg8BQ9yr82-g/profile-displayphoto-shrink_800_800/0/1686175399354?e=1703721600&v=beta&t=YsKrcIXvfpE8huqSRVlmxaLHJoSYOyyyKmeTz3ubWsc"
                  }
                  alt=""
                />
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
