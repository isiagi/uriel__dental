import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "../components/footer/index";

import Nav from "../components/nav/index";
import Contact from "./contact/Contact";
import Home from "./Home";
import Serv from "./servicePage/Serv";
import About from "./about/About";
import Detail from "./detail/Detail";

function Index() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Serv />} />
          <Route path="/services/:section" element={<Detail />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="*"
            element={
              <div
                style={{
                  paddingBlock: "40vh",
                  textAlign: "center",
                  color: "#2F512F",
                  background: "#eee",
                }}
              >
                <h2>404</h2>
                <h2>Page Not Found</h2>
              </div>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default Index;
