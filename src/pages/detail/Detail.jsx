import "./detail.css";
import Semi_banner from "../../components/semibanner/Semi_banner";
import { Link, useParams } from "react-router-dom";
import Dynamic from "../../components/dynamic/Dynamic";

const dentalServices = [
  {
    id: 1,
    service: "Orthodontics",
  },
  {
    id: 2,
    service: "Prothodontics",
  },
  {
    id: 3,
    service: "Endodontics",
  },
  {
    id: 4,
    service: "Child Dentistry",
  },
  {
    id: 5,
    service: "Cosmetic Dentistry",
  },
];

function Detail() {
  const { section } = useParams();

  return (
    <div>
      <Semi_banner page={section} />
      <div className="middle__class">
        <div className="detail__wrapper">
          <div className="detail__first">
            <ul>
              {dentalServices.map(({ id, service }) => (
                <Link to={`/services/${service}`} key={id}>
                  <li
                    className={`${section === service ? "detail__active" : ""}`}
                  >
                    {service}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          <Dynamic route={section} />
        </div>
      </div>
    </div>
  );
}

export default Detail;

// vaulit
