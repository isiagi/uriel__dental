import React from "react";

import "./about.css";
import Semi_banner from "../../components/semibanner/Semi_banner";
import Show from "../../components/show/Show";
import Team from "../../components/team/Team";
import Services from "../../components/services/Services";
import Banner from "../../components/banner/Banner";
import useScrollToTop from "../../hooks/useScrollToTop";
import Testmonial from "../../components/testmo/Testmonial";
import { Helmet } from "react-helmet";

function About() {
  useScrollToTop();

  return (
    <div>
      <Helmet>
        <title>About Uriel Dental</title>
        <meta
          name="description"
          content="Discover More About Uriel Dental Clinic"
        />
      </Helmet>
      <div>
        <Semi_banner page={"About"} />
        <Show />
        <Team />
        <Banner />
        <Testmonial />
        <Services />
      </div>
    </div>
  );
}

export default About;
