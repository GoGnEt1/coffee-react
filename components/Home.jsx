import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home flex items-center justify-center gap-50 h-[100vh]">
      <div className="text inline-flex flex-col items-baseline">
        <h2 className="text-4xl">best coffee</h2>
        <h3>make your day great with our special coffee</h3>
        <p>
          Welcome ot our coffee paradise, where every bean tells a story and
          every cup sports joy.
        </p>
        <div className="btns flex gap-8">
          <Link to="">Order Now</Link>
          <Link to="">Contact Us</Link>
        </div>
      </div>

      <div className="images">
        <img
          src="../images/coffee-hero-section.png"
          alt="coffee"
          className="w-[80%] h-[80%]"
        />
      </div>
    </div>
  );
};

export default Home;
