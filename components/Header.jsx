import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["home", "about", "menu", "testimonials", "gallery", "contact"];

  const toggleMenu = () => {
    document.body.classList.toggle("show-mobile-menu");
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    document.body.classList.remove("show-mobile-menu");
    setMenuOpen(false);
  };

  // 👇 Fermer le menu automatiquement quand la largeur devient >= 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && menuOpen) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  return (
    <header className="fixed w-full z-50 text-white top-0">
      <nav className="nav1 flex justify-between items-center px-6 py4 max-w-[1300px]">
        <div className="flex gap-4 items-center">
          <img
            src="./images/hot-beverages.png"
            alt="coffee"
            className="w-8 h-8"
          />
          <h2 className="text-3xl font-semibold text-white">Coffee</h2>
        </div>

        <ul
          className={`md:flex gap-8 list-none transition-all duration-300 
            ${menuOpen ? "menus" : "hidden md:flex"}`}
        >
          <li className="md:hidden flex justify-end">
            <FaTimes
              //   onClick={() => setMenuOpen(false)}
              onClick={closeMenu}
              className="close-btn absolute text-xl cursor-pointer text-black top-[30px] right-[20px] sm:right-[30px] hover:text-red-600"
            />
          </li>

          {links.map((link) => (
            <li key={link}>
              <Link
                to={link}
                smooth={true}
                duration={500}
                onClick={closeMenu}
                className="relative capitalize text-base font-medium cursor-pointer text-white"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <div
          className="md:hidden text-xl cursor-pointer text-white"
          //   onClick={() => setMenuOpen(true)}
          onClick={toggleMenu}
        >
          <FaBars />
        </div>
      </nav>
    </header>
  );
};

export default Header;
