
import { Link } from "react-router-dom";
import React, { useState } from "react";

const PortfolioSection = () => {
    return (
        <section className="relative bg-customYellow py-10" id="carousel_02fc">
        <div className="container mx-auto flex justify-center">
          {/* Decorative SVG Shape */}
          <div className="h-[100%] w-[100%] pt-24 flex justify-center absolute top-0 left-0 transform delay-500">
            <svg
              className="h-[130vh] w-[180vh]"
              preserveAspectRatio="none"
              viewBox="0 0 160 150"
            >
              <path 
              className="fill-white opacity-50"
              d="M43.2,126.9c14.2,1.3,27.6,7,39.1,15.6c8.3,6.1,19.4,10.3,32.7,5.3c11.7-4.4,18.6-17.4,21-30.2c2.6-13.3,8.1-25.9,15.7-37.1
                c8.3-12.1,10.8-27.9,5.3-42.7C150.5,20.3,134.6,9,117,7.6C107.9,6.9,98.8,5,90.1,1.9C83-0.6,75-0.7,67.4,2.1
                c-9.9,3.7-17,11.6-20.1,21c-3.3,10.1-10.9,18-20.6,22.2c-0.1,0-0.1,0.1-0.2,0.1c-20.3,8.9-31,32-24.6,53.2
                C6.9,115.6,25.2,125.2,43.2,126.9z"
              />
            </svg>
          </div>
  
          {/* Main Content */}
          <div className="relative w-[80%] mt-24">
            <img
              src="//images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/5f2cac1f3cfd566a91b4507b/gffgfgfg-min.jpg"
              alt=""
              className="rounded-lg shadow-lg w-[85%] justify-self-start"
            />
  
            {/* List Section */}
            <div className="w-[85%] grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-self-end -translate-y-1/3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="rounded-lg bg-white shadow-md p-5 hover:shadow-lg transition-transform transform hover:scale-105"
                >
                  <img
                    src={`//images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/${item === 1 ? '5baff195dc3a5b37a0a475e3/hghgh.jpg' : item === 2 ? '27c9b693e86e593b85641f49/hgghhh-min.jpg' : 'f15bf95824015febb49489e4/xcccx.jpg'}`}
                    alt=""
                    className="rounded-md mb-4 w-full"
                  />
                  <p className="text-gray-700 mb-4">
                    Sample text. Click to select the text box. Click again or double click to start editing the text.
                  </p>
                  <a
                    href="#"
                    className="text-teal-600 font-semibold hover:underline"
                  >
                    More
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
        
    )
}

export default PortfolioSection;