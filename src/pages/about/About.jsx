import React from "react";

import "./about.css";
import Semi_banner from "../../components/semibanner/Semi_banner";
import Show from "../../components/show/Show";
import Team from "../../components/team/Team";
import Services from "../../components/services/Services";
import Banner from "../../components/banner/Banner";

function About() {
  return (
    <div>
      <div>
        <Semi_banner page={"About"} />
        <Show />
        <Team />
        <Banner />
        <Services />
      </div>
    </div>
  );
}

export default About;
