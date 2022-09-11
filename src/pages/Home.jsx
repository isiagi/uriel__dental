import React from "react";
import Banner from "../components/banner/Banner";
import Hero from "../components/hero/Hero";
import Intro from "../components/into/Intro";

import Services from "../components/services/Services";
import Team from "../components/team/Team";
import Testmonial from "../components/testmo/Testmonial";

function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Services />
      <Banner />
      <Team />
      <Testmonial />
    </>
  );
}

export default Home;
