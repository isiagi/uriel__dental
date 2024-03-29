import { Link } from "react-router-dom";
import "./banner.css";

function Banner() {
  return (
    <div className="banner__container">
      <div className="banner__wrapper middle__class">
        <h1>High Innovative Technology & Professional Dentists</h1>
        <p>Make Appointment or call +256772-150-850/ +256707515267</p>
        <Link to="/contact">
          <button className="banner__btn">Make An Appointment</button>
        </Link>
      </div>
    </div>
  );
}

export default Banner;
