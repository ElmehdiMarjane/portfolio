import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Logo from "../assets/logo.png";

const Home = () => {
  return (
    <div className="w-full h-screen bg-[#0a192f] ">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="flex-col justify-center">
          <p className="text-teal-400">Hi, my name is</p>
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Elmehdi marjane
          </h1>
          <h2 className="text-[#c0c3c4] text-2xl md:text-2xl font-bold">
            I'm a full stack developer.
          </h2>
          <p>Test</p>
          <p>Test</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
