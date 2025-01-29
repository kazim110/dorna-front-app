import { Link } from "react-router-dom";
import React, { useState } from "react";
import backgroundImage from "../assets/main-back.jpg";

const WelcomeSection = () => {

    return (
        <section id="welcome" className="bg-blue-500 text-white text-center">
        <div
          className="bg-cover bg-center h-[1080px] flex items-center justify-center flex-col"
          style={{ 
            backgroundColor: "#f2f2f2"
            // backgroundImage: `url(${backgroundImage})` 
          }}
        >
          <h1 className="w-[80%] lg:text-8xl text-6xl uppercase text-customGreen font-bold">Dorna Media</h1>
          <h2 className="text-xl lg:text-6xl font-medium text-customGreen relative">On Creativity Line</h2>
          <p className="w-[50%] text-xl text-customGreen mx-20 mt-3 mb-10">
          We transform your vision into impactful advertising solutions. With a team of professionals and
           creative thinkers, we deliver tailored strategies to connect your brand with its audience.
          </p>
          <a
          href="#contact" // Link to the contact section
          className="active:bg-black rounded hover:bg-customGreen bg-customYellow text-customGreen hover:text-white px-32 py-5"
        >
          <p className="uppercase text-xl">Get Started</p>
        </a>
        </div>
      </section>
    );

}

export default WelcomeSection;