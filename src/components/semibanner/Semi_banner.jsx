import React from "react";
import "./semi.css";

function Semi_banner({ page }) {
  return (
    <div className="service__wrapper10">
      <h2>{page}</h2>
      <p>Home / {page} </p>
    </div>
  );
}

export default Semi_banner;
