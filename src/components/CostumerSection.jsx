import React, { useState } from "react";

const CostumerSection = () => {
    const testimonials = [
        {
          image: "/path-to-image1.jpg",
          text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
          name: "Stella Larson",
        },
        {
          image: "/path-to-image2.jpg",
          text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
          name: "Nick Johnson",
        },
        {
          image: "/path-to-image3.jpg",
          text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
          name: "Olga Ivanova",
        },
        {
          image: "/path-to-image4.jpg",
          text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
          name: "Paul Hudson",
        },
        {
          image: "/path-to-image5.jpg",
          text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
          name: "Cash Hudson",
        },
        {
          image: "/path-to-image6.jpg",
          text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
          name: "Mike Perry",
        },
      ];
    return (
        <section id="testimonials" className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <h2
            className="text-4xl font-bold text-center mb-8 animate-customAnimationIn2"
            style={{ animationDelay: "500ms" }}
          >
            Testimonials
          </h2>
  
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index}
                className="flex flex-col items-start text-start bg-none p-6 text-center animate-customAnimationIn2"
                style={{ animationDelay: `${index * 100}ms` }}>
                <div
                  className="w-24 h-24 mx-auto mb-4 rounded-full border-8 border-customYellow bg-cover bg-center"
                  style={{ backgroundImage: `url(${testimonial.image})` }}
                ></div>
                <p className="text-gray-600 italic mb-2">{testimonial.text}</p>
                <h6 className="text-gray-800 font-semibold">{testimonial.name}</h6>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}
export default CostumerSection;