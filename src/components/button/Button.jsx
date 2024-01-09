import "./button.css";
import { Link } from "react-router-dom";

function Button({ name, bgColor, path, submit }) {
  return (
    <Link to={`/${path}`}>
      <button
        type={`${submit ? "submit" : "button"}`}
        className="service__btn"
        style={{ backgroundColor: bgColor }}
      >
        {name}
      </button>
    </Link>
  );
}

export default Button;
