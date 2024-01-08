import "./show.css";
import Button from "../button/Button";
import aui from "../../assets1/videos/uriel1.mp4";
import Player from "../player/Player";

function Show() {
  return (
    <div className="show__container">
      <div className="middle__class show__wrapper">
        <div className="show__image__div">
          <Player video={aui} />
        </div>
        <div className="show__second">
          <h2>Complete Dental Care</h2>
          <h3>
            URIEL DENTAL CLINIC is a modern dental clinic, specialized in
            advanced diagnostics and treatment of dental and oral disorders.
          </h3>
          <p>
            We offer comprehensive services from all fields of dentistry. In
            addition to high-end dental equipment, all services are provided in
            a comfortable, luxury environment. New patients are welcomed with a
            complimentary oral health consultation.
          </p>
          <Button name={"Contact Us"} bgColor={"#40AEEF"} path={"contact"} />
        </div>
      </div>
    </div>
  );
}

export default Show;
