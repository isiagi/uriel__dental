import React from "react";

import "./button.css";
import { Link } from "react-router-dom";

function Button({ name, bgColor, path }) {
  return (
    <Link to={`/${path}`}>
      <button className="service__btn" style={{ backgroundColor: bgColor }}>
        {name}
      </button>
    </Link>
  );
}

export default Button;
