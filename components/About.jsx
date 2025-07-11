import React from "react";
import { Link } from "react-scroll";
import {
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";

const About = () => {
  return (
    <section className="about">
      <div className="containe flex items-center gap-40">
        <div className="images">
          <img
            src="../images/about-image.jpg"
            alt="about"
            className="w-[370px] h-[370px] rounded-[50%] object-cover"
          />
        </div>

        <div className="max-w-[55%] flex flex-col items-center">
          <h2 className="title">About us</h2>
          <p className="text-black">
            Coffee, the beloved beverage that has fueled civilizations and
            inspired countless masterpieces, has a rich tapestry of flavors,
            aromas, and origins. Finding the best description for coffee is a
            pursuit that has captivated coffee enthusiasts for centuries.
          </p>
          <ul className="flex list-none transition-all gap-8">
            <li>
              <Link>
                <FaFacebook />
              </Link>
            </li>
            <li>
              <Link>
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link>
                <FaTelegramPlane />
              </Link>
            </li>
            <li>
              <Link>
                <FaWhatsapp />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
