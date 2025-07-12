import React from "react";
import Header from "../components/Header";
import Home from "../components/Home";
import About from "../components/About";
import Menu from "../components/Menu";
import Testimonials from "../components/testimonials";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Menu />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default App;
