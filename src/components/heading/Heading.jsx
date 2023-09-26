import "./heading.css";

const Heading = ({ head, tail }) => {
  return (
    <div className="service__wrapper1">
      <h1>{head}</h1>
      <em>
        <p>{tail}</p>
      </em>
    </div>
  );
};

export default Heading;
