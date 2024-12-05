import { Link } from "react-router-dom";
import React, { useState } from "react";
import womenImage from "../assets/women.jpg";

const AbouteSection = () => {

    return (
        <section
      className="relative flex flex-col justify-center items-center bg-gray-200 pt-[12%] pb-[10px]"
      id="carousel_1e99"
    >
      <div className="relative border container mx-auto flex">

        <div
          className="bg-customYellow rounded-full animate-custom-animation will-change-transform opacity transition-opacity duration-[1500ms] absolute w-36 h-36 sm:w-48 sm:h-48 md:w-[320px] md:h-[320px] top-0 right-0 translate-x-1/6 -translate-y-1/3"
          style={{ animationDelay: "500ms" }}
        ></div>
        <div className="py-8 flex z-10 flex-wrap flex-row-reverse w-2/3 mx-auto mb-[6%]">
          <div className="w-full md:w-1/2">
            <img
              className="h-full w-full object-cover shadow-lg"
              src={womenImage}
              alt="Description of image"
            />

          </div>
          <div className="w-full md:w-1/2 text-left flex flex-col item-center justify-center p-[20px]">
            <h3 className="text-xl font-bold mb-4">Web Development</h3>
            <p className="text-gray-700 mb-4">Quickly incentivize impactful action items before tactical collaboration and idea-sharing. Monotonically engage market-driven intellectual capital  wireless opportunities. Progressively network performance based services for functionalized testing procedures.
            </p>
            <a
              href="#"
              className="inline-block bg-black text-white py-2 px-4 rounded-md hover:bg-blue-500 transition"
            >
              Learn More
            </a>
          </div>
          
        </div>
      </div>
    </section>
    );
}

export default AbouteSection;