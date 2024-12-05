import React, { useState } from "react";
import womenImage from "../assets/person.jpg";

const CostumerSection = () => {
    const testimonials = [
        {
          image: womenImage,
          text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
          name: "Stella Larson",
        },
        {
          image: womenImage,
          text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
          name: "Nick Johnson",
        },
        {
          image: womenImage,
          text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
          name: "Olga Ivanova",
        },
        {
          image: womenImage,
          text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
          name: "Paul Hudson",
        },
        {
          image: womenImage,
          text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
          name: "Cash Hudson",
        },
        {
          image: womenImage,
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
            <div
              key={index}
              className="flex items-center bg-none  animate-customAnimationIn2 px-12"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={testimonial.image}
                alt={`${testimonial.name}'s testimonial`}
                className="m-4 w-24 h-24 rounded sm:rounded-full lg:rounded-full object-cover border-[12px] border-customYellow object-cover"
              />
              <div className="p-6 text-start flex flex-col items-start">
                <p className="text-gray-600 italic mb-2">{testimonial.text}</p>
                <h6 className="text-gray-800 font-semibold">{testimonial.name}</h6>
              </div>
            </div>
          ))}
        </div>

        </div>
      </section>
    )
}
export default CostumerSection;