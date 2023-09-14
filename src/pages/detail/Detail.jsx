import "./detail.css";
import Semi_banner from "../../components/semibanner/Semi_banner";
import { Link, useParams } from "react-router-dom";
import Dynamic from "../../components/dynamic/Dynamic";

function Detail() {
  const { section } = useParams();
  return (
    <div>
      <Semi_banner page={section} />
      <div className="detail__wrapper">
        <div className="detail__first">
          <ul>
            <Link to="/services/treat">
              <li>Dental Service</li>
            </Link>
            <li>Dental Service</li>
            <li>Dental Service</li>
            <li>Dental Service</li>
            <Link to="/services/try">
              <li>Dental Service</li>
            </Link>
          </ul>
        </div>
        <Dynamic route={section} />
      </div>
    </div>
  );
}

export default Detail;
