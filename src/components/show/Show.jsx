import "./show.css";
import Button from "../button/Button";
import ReactPlayer from "react-player";

function Show() {
  return (
    <div className="show__container">
      <div className="middle__class show__wrapper">
        <div className="show__image__div">
          <ReactPlayer
            width={"100%"}
            height={"100%"}
            url={
              "https://res.cloudinary.com/isiagi/video/upload/v1704643602/loid5v7tpvdeci02hj5i.mp4"
            }
            pip={true}
            controls={true}
            light={false}
            playing={true}
            onError={() => {
              console.log("Something went wroung...");
            }}
          />
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
