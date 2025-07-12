import React from "react";
import { Link } from "react-router-dom";
import {
  FaTelegramPlane,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="">
      <div className="containe items-center justify-between flex flex-col md:flex-row">
        <p className="text-center md:text-left">
          &copy; {new Date().getFullYear()} Coffee Shop. All rights reserved.
        </p>

        <div className="reseaux flex gap-5 ">
          <Link className="fa-icons ">
            <FaFacebook />
          </Link>
          <Link className="fa-icons">
            <FaInstagram />
          </Link>
          <Link className="fa-icons">
            <FaTelegramPlane />
          </Link>
          <Link className="fa-icons">
            <FaTwitter />
          </Link>
        </div>

        <p className="text-center md:text-right">
          <Link className="hover:text-[#f3961c]">Privacy Policy</Link> •{" "}
          <Link className="hover:text-[#f3961c]">Refund Policy</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
