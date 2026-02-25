import { useState } from "react";
import closeIcon from "../assets/close_icon.svg";
import menuIcon from "../assets/menu_icon.svg";

const NavBar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="flex justify-between items-center px-10 py-10 bg-black sticky top-0">

      {/* Logo */}
      <div className="text-white text-lg font-semibold">
        MyLogo
      </div>

      {/* Full screen Menu */}
      <div className="hidden sm:flex gap-6 text-white">
        <a href="/" className="border-b-2 border-transparent hover:border-white">
          Home
        </a>
        <a href="about" className="border-b-2 border-transparent hover:border-white">
          About Me
        </a>
        <a href="projects" className="border-b-2 border-transparent hover:border-white">
          Projects
        </a>
        <a href="contact" className="border-b-2 border-transparent hover:border-white">
          Contact Me
        </a>
      </div>

      {/*  Menu Icon */}
      <img
        src={menuIcon}
        alt="menu"
        onClick={() => setMenu(true)}
        className="w-8 cursor-pointer sm:hidden bg-white"
      />

      {/* This is the Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-60 bg-black text-white flex flex-col pt-20 gap-6 transition-transform duration-300 sm:hidden
        ${menu ? "translate-x-0" : "translate-x-full"}`}
      >

        <img
          src={closeIcon}
          alt="close"
          className="w-5 absolute top-5 right-5 cursor-pointer"
          onClick={() => setMenu(false)}
        />

        <a onClick={() => setMenu(false)} href="/" className="px-6 border-b border-transparent hover:border-white">
          Home
        </a>
        <a onClick={() => setMenu(false)} href="about" className="px-6 border-b border-transparent hover:border-white">
          About Me
        </a>
        <a onClick={() => setMenu(false)} href="projects" className="px-6 border-b border-transparent hover:border-white">
          Projects
        </a>
        <a onClick={() => setMenu(false)} href="contact" className="px-6 border-b border-transparent hover:border-white">
          Contact Me
        </a>

      </div>

    </div>
  );
};

export default NavBar;
