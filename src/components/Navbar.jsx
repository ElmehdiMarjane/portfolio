import React, { useState } from "react";
import Logo from "../assets/logo.png";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import { HiOutlineMail } from "react-icons/hi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handlClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-100 z-10">
      <div className="z-10 scale-75 md:scale-100 duration-200 ">
        <img src={Logo} alt="Logo" style={{ width: "50px" }} />
      </div>

      {/*PC */}

      <div>
        <ul className="hidden md:flex">
          <li className="py-6 text-xl border-b-4 border-transparent font-medium hover:font-semibold hover:text-teal-400 hover:border-teal-400">
            Home
          </li>
          <li className="py-6 text-xl border-b-4 border-transparent font-medium hover:font-semibold hover:text-teal-400 hover:border-teal-400">
            About
          </li>
          <li className="py-6 text-xl border-b-4 border-transparent font-medium hover:font-semibold hover:text-teal-400 hover:border-teal-400">
            Skills
          </li>
          <li className="py-6 text-xl border-b-4 border-transparent font-medium hover:font-semibold hover:text-teal-400 hover:border-teal-400">
            Projects
          </li>
          <li className="py-6 text-xl border-b-4 border-transparent font-medium hover:font-semibold hover:text-teal-400 hover:border-teal-400">
            Contact me
          </li>
        </ul>
      </div>

      {/*Mobile */}

      <div onClick={handlClick} className="md:hidden z-10 duration-400">
        {!nav ? (
          <FaBars className=" hover:mb-1 duration-300" size={30} />
        ) : (
          <FaTimes className=" hover:mb-1 duration-300" size={30} />
        )}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center md:hidden "
        }
      >
        <li className="py-6 text-4xl  hover:mb-2 duration-300 border-b-4 border-transparent font-medium hover:font-semibold hover:text-white hover:border-indigo-100">
          Home
        </li>
        <li className="py-6 text-4xl  hover:mb-2 duration-300 border-b-4 border-transparent font-medium hover:font-semibold hover:text-white hover:border-indigo-100">
          About
        </li>
        <li className="py-6 text-4xl  hover:mb-2 duration-300 border-b-4 border-transparent font-medium hover:font-semibold hover:text-white hover:border-indigo-100">
          Skills
        </li>
        <li className="py-6 text-4xl  hover:mb-2 duration-300 border-b-4 border-transparent font-medium hover:font-semibold hover:text-white hover:border-indigo-100">
          Projects
        </li>
        <li className="py-6 text-4xl  hover:mb-2 duration-300 border-b-4 border-transparent font-medium hover:font-semibold hover:text-white hover:border-indigo-100">
          Contact me
        </li>
      </ul>

      {/*Social Media*/}
      <div className="flex fixed flex-col bottom-0 left-0">
        <ul>
          <li className="w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200  bg-[#171515] md:hover:ml-[0px]">
            <a className="flex justify-between items-center w-full" href="/">
              Github
              <FaGithub color="white" size={30} />
            </a>
          </li>
          <li className="w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200  bg-[#0E76A8]">
            <a className="flex justify-between items-center w-full" href="/">
              Linkedin
              <FaLinkedin color="white" size={30} />
            </a>
          </li>
          <li className="w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200  bg-teal-500">
            <a className="flex justify-between items-center w-full" href="/">
              Email
              <HiOutlineMail color="white" size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
