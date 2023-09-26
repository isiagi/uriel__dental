import React from "react";
import Banner from "../components/banner/Banner";
import Hero from "../components/hero/Hero";
import Intro from "../components/into/Intro";

import Services from "../components/services/Services";
import Team from "../components/team/Team";
import Testmonial from "../components/testmo/Testmonial";
import Show from "../components/show/Show";
import useScrollToTop from "../hooks/useScrollToTop";

function Home() {
  useScrollToTop();

  return (
    <>
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
