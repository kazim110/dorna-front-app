import React, { useState } from "react";
import secBack from "../assets/sec-back.jpg";

const ServicesSection = () => {
    const features = [
        {
          title: "Strategy",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
          icon: "icon1", // Add SVG or an icon class here
        },
        {
          title: "Branding",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
          icon: "icon2", // Add SVG or an icon class here
        },
        {
          title: "Development",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
          icon: "icon3", // Add SVG or an icon class here
        },
        {
          title: "Web Design",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
          icon: "icon4", // Add SVG or an icon class here
        },
        {
          title: "Social Media",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
          icon: "icon5", // Add SVG or an icon class here
        },
        {
          title: "Ecommerce",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
          icon: "icon6", // Add SVG or an icon class here
        },
      ];
    return (
        <section
        id="features"
        className="h-[130vh] bg-cover bg-center flex justify-center"
        style={{ backgroundImage: `url(${secBack})` }}
      >
        <div className="flex flex-col items-center justify-center w-[110vh] absolute left-[14%] mt-10">
          <div className="max-w-5xl">
            <h2 className="text-3xl font-bold mb-4">Epic Design and Engineering</h2>
            <p className="text-lg text-gray-700 mb-6">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-start bg-customYellow text-white rounded-lg p-6 shadow-lg transition-transform duration-500 hover:scale-105"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-white text-green-600 rounded-full mb-4">
                  {/* Replace with actual SVG */}
                  <span>{feature.icon}</span>
                </div>
                <h5 className="text-xl font-semibold mb-2">{feature.title}</h5>
                <p className="text-gray-800">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}

export default ServicesSection;