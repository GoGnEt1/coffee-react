import React from "react";
import "./App.css";
import Header from "../components/Header";
import Home from "../components/Home";
import About from "../components/About";
import Menu from "../components/Menu";
import Testimonials from "../components/testimonials";
import Gallery from "../components/Gallery";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Menu />
      <Testimonials />
      <Gallery />
    </>
  );
};

export default App;
