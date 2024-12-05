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
          <h2 className="text-6xl font-medium text-customGreen relative">Get the website</h2>
          <h1 className="text-9xl uppercase text-customGreen font-bold">Of your dreams</h1>
          <p className="text-3xl text-customGreen mx-20 mt-3 mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud.
          </p>
          <button className="active:bg-black rounded hover:bg-customGreen bg-customYellow text-customGreen hover:text-white px-20 py-5">
            <p className="">Get Started</p>
          </button>
        </div>
      </section>
    );

}

export default WelcomeSection;