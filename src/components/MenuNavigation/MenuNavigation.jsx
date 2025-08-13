import React from "react";
import { IoClose } from "react-icons/io5";
import { MenuContext } from "./MenuContext";
import { useContext } from "react";
import { Link } from "react-scroll";
const MenuNavigation = () => {
    const {openMenu}=useContext(MenuContext)
  return (
    <div className="background">
      <button className="List_close" onClick={openMenu}>
        <IoClose />
      </button>
      <nav className="Navigation">
        <Link
         to="news"
         smooth={true}
         duration={500}
         offset={-50}
        >
            <a href="">News</a>
        </Link>
        <Link
            to="Carousel"
            smooth={true}
            duration={500}
            offset={-50}
        >
        <a href="">Carousel</a>
        </Link>
        <Link
            to="Footer"
            smooth={true}
            duration={500}
            offset={-50}
        >
            <a href="">Footer</a>
        </Link>
      </nav>
    </div>
  );
};

export default MenuNavigation;
