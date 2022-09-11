import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "../components/footer/index";


import Nav from "../components/nav/index";
import Contact from "./contact/Contact";
import Home from "./Home";
import Serv from "./servicePage/Serv";

function Index() {
  return (
    <div>
      <Router>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Serv />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default Index;
