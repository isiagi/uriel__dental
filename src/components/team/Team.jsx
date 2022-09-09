import img from '../../assets/4.jpeg'
import "./team.css";

function Team() {
  return (
    <div className="team__container">
      <div className="team__wrapper">
        <div className="team__text">
          <h1>Meet Our Team</h1>
          <p>Top professionals in industry</p>
        </div>
        <div className="team__card">
            <div className="team__card__item">
                <div className="team__card__img">
                    <img src={img} alt="" />
                </div>
                <div className="team__card__text">
                    <h3>Dr. Victoria</h3>
                    <p>Senior Doctor</p>
                </div>
            </div>
            <div className="team__card__item">
                <div className="team__card__img">
                    <img src={img} alt="" />
                </div>
                <div className="team__card__text">
                    <h3>Dr. Victoria</h3>
                    <p>Senior Doctor</p>
                </div>
            </div>
            <div className="team__card__item">
                <div className="team__card__img">
                    <img src={img} alt="" />
                </div>
                <div className="team__card__text">
                    <h3>Dr. Victoria</h3>
                    <p>Senior Doctor</p>
                </div>
            </div>
            <div className="team__card__item">
                <div className="team__card__img">
                    <img src={img} alt="" />
                </div>
                <div className="team__card__text">
                    <h3>Dr. Victoria</h3>
                    <p>Senior Doctor</p>
                </div>
            </div>
            <div className="team__card__item">
                <div className="team__card__img">
                    <img src={img} alt="" />
                </div>
                <div className="team__card__text">
                    <h3>Dr. Victoria</h3>
                    <p>Senior Doctor</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
