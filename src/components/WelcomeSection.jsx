import { Link } from "react-router-dom";
import React, { useState } from "react";
import backgroundImage from "../assets/main-back.jpg";

const WelcomeSection = () => {

    return (
        <section className="bg-blue-500 text-white text-center">
        <div
          className="bg-cover bg-center h-[1080px] flex items-center justify-center flex-col"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <h2 className="lg:text-6xl md:text-2xl font-medium text-customGreen relative">Get the website</h2>
          <h1 className="w-[80%] lg:text-8xl md:text-6xl uppercase text-customGreen font-bold">Of your dreams</h1>
          <p className="w-[50%] text-xl text-customGreen mx-20 mt-3 mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud.
          </p>
          <button className="active:bg-black rounded hover:bg-customGreen bg-customYellow  hover:text-white px-32 py-5">
            <p className="uppercase text-xl">Get Started</p>
          </button>
        </div>
      </section>
    );

}

export default WelcomeSection;