import React from "react";
import Banner from "../components/banner/Banner";
import Hero from "../components/hero/Hero";
import Intro from "../components/into/Intro";

import Services from "../components/services/Services";
import Team from "../components/team/Team";
import Testmonial from "../components/testmo/Testmonial";
import Show from "../components/show/Show";
import useScrollToTop from "../hooks/useScrollToTop";
import { Helmet } from "react-helmet";

function Home() {
  useScrollToTop();

  return (
    <>
      <Helmet>
        <title>URIEL DENTAL CLINIC</title>
        <meta
          name="description"
          content="Uriel Dental Clinic: Your Smile, Our Priority. Our experienced
              team is dedicated to your oral health and a confident smile. From
              routine check-ups to advanced treatments, we offer comprehensive
              dental care. Contact us today for personalized, cutting-edge
              dentistry."
        />
      </Helmet>
      <Hero />
      <Intro />
      <Services />
      <Show />
      <Team />
      <Testmonial />
      <Banner />
    </>
  );
}

export default Home;
