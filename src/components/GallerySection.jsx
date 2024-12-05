import React, { useState } from "react";
import womenImage from "../assets/women.jpg";

const GallerySection = () => {

    return (
        <section className="text-center py-16" id="carousel_4de0">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            We create, restore & evolve iconic brands
          </h2>
          <div className="relative">
            <div
              className="carousel-inner"
              id="carousel-a3d5"
              data-u-ride="carousel"
              data-interval="5000"
            >
              <div className="carousel-items flex flex-row">
                {[
                  {
                    src: `url(${womenImage})`,
                    title: "Sample Title 1",
                    text: "Sample Text 1",
                  },
                  {
                    src: `url(${womenImage})`,
                    title: "Sample Title 2",
                    text: "Sample Text 2",
                  },
                  {
                    src: `url(${womenImage})`,
                    title: "Sample Title 3",
                    text: "Sample Text 3",
                  },
                  {
                    src: `url(${womenImage})`,
                    title: "Sample Title 4",
                    text: "Sample Text 4",
                  },
                  {
                    src: `url(${womenImage})`,
                    title: "Sample Title 5",
                    text: "Sample Text 5",
                  },
                  {
                    src: `url(${womenImage})`,
                    title: "Sample Title 6",
                    text: "Sample Text 6",
                  },
                  {
                    src: `url(${womenImage})`,
                    title: "Sample Title 7",
                    text: "Sample Text 7",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="carousel-item relative mb-8"
                  >
                    <img
                      className="w-full object-cover h-96"
                      src={item.src}
                      alt={item.title}
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center text-white">
                      <div className="text-center">
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p>{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute top-1/2 left-0 right-0 flex justify-between">
                <button
                  className="carousel-control-prev bg-gray-900 p-3 rounded-full opacity-70 hover:opacity-100"
                  data-u-slide="prev"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 451.847 451.847"
                    className="w-6 h-6 text-white"
                  >
                    <path d="M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z"></path>
                  </svg>
                </button>
                <button
                  className="carousel-control-next bg-gray-900 p-3 rounded-full opacity-70 hover:opacity-100"
                  data-u-slide="next"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 451.846 451.847"
                    className="w-6 h-6 text-white"
                  >
                    <path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <p className="text-xl mt-4">
            Sample text. Click to select the text box. Click again or double click to start editing the text.
          </p>
        </div>
      </section>
    );
}
export default GallerySection;