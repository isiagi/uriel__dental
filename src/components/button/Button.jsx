import React from "react";

import "./button.css";

function Button({ name, bgColor }) {
  return (
    <button className="service__btn" style={{ backgroundColor: bgColor }}>
      {name}
    </button>
  );
}

export default Button;
