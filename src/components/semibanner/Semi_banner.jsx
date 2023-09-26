import React from "react";
import "./semi.css";

function Semi_banner({ page }) {
  return (
    <div className="service__wrapper10 middle__class">
      <h2>{page}</h2>
      <p>
        Home <span className="service__slash">/</span>{" "}
        <span className="service__page">{page}</span>
      </p>
    </div>
  );
}

export default Semi_banner;
