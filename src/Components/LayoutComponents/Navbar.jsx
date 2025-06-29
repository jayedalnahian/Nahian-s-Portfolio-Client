import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const links = (
    <>
      <li className="hover:text-[#954C2E] transition">
        <Link to='/'>Home</Link>
      </li>
      <li className="hover:text-[#954C2E] transition">
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          offset={-70}
          spy={true}
          className="cursor-pointer"
        >
          About
        </ScrollLink>
      </li>
      <li className="hover:text-[#954C2E] transition">
        <ScrollLink
          to="skills"
          smooth={true}
          duration={500}
          offset={-70}
          spy={true}
          className="cursor-pointer"
        >
          Skills
        </ScrollLink>
      </li>
      <li className="hover:text-[#954C2E] transition">
        <ScrollLink
          to="projects"
          smooth={true}
          duration={500}
          offset={-70}
          spy={true}
          className="cursor-pointer"
        >
          Projects
        </ScrollLink>
      </li>
      <li className="hover:text-[#954C2E] transition">
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          offset={-70}
          spy={true}
          className="cursor-pointer"
        >
          Contact
        </ScrollLink>
      </li>
    </>
  );

  return (
    <nav className="bg-[#131D4F] text-[#EFE4D2] fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold italic tracking-wider">Nahian</div>

        {/* Menu - Desktop */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {links}
        </ul>

        {/* Mobile */}
        <div className="flex justify-center items-center gap-4">
          <div className="avatar">
            <div className="mask mask-squircle w-10">
              <img
                src="https://i.ibb.co/4ZLt5bhW/IMG-20250625-020833-min.jpg"
                alt="Profile"
              />
            </div>
          </div>
          <div className="md:hidden">
            <div className="drawer">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                <label htmlFor="my-drawer" className="drawer-button">
                  <GiHamburgerMenu />
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu bg-base-200/90 text-base-content min-h-full w-40 p-4">
                  {links}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
