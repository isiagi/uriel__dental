import "./detail.css";
import Semi_banner from "../../components/semibanner/Semi_banner";
import { Link, useParams } from "react-router-dom";
import Dynamic from "../../components/dynamic/Dynamic";
import Services from "../../components/services/Services";
import useScrollToTop from "../../hooks/useScrollToTop";

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
  useScrollToTop();
  const { section } = useParams();

  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <Semi_banner page={section} />
      <div className="middle__class">
        <div className="detail__wrapper">
          <div className="detail__first">
            <ul>
              {dentalServices.map(({ id, service }) => (
                <Link
                  to={`/services/${service}`}
                  key={id}
                  onClick={handleScroll}
                >
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
      <Services />
    </div>
  );
}

export default Detail;

// vaulit
