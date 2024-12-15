import React, { useState, useEffect } from "react";
import womenImage from "../assets/person.jpg";
import axios from "axios";

const CostumerSection = () => {

  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/customer/api");
        const data = response.data.map((item) => ({
          image: `http://127.0.0.1:8000/storage/${item.image}`,
          text: item.message,
          name: item.name,
        }));
        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };
    fetchTestimonials();
  }, []);


    return (
        <section id="testimonials" className="bg-gray-100 py-12">
        <div className="container w-[80%] mx-auto px-4">
          {/* Section Header */}
          <h2
            className="text-customGreen text-5xl font-bold uppercase text-center mb-8 animate-customAnimationIn2"
            style={{ animationDelay: "500ms" }}
          >
            Testimonials
          </h2>
  
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {testimonials.length > 0 ? (
            testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex items-center bg-none  animate-customAnimationIn2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={testimonial.image}
                alt={`${testimonial.name}'s testimonial`}
                className="m-4 w-24 h-24 rounded rounded-full object-cover border-[10px] border-customYellow object-cover"
              />
              <div className="p-6 text-start flex flex-col items-start">
                <p className="text-gray-600 italic mb-2">{testimonial.text}</p>
                <h6 className="text-gray-800 font-semibold uppercase">{testimonial.name}</h6>
              </div>
            </div>
          ))) : (
            <p className="text-center text-gray-500">Loading testimonials...</p>
          )}
        </div>

        </div>
      </section>
    )
}
export default CostumerSection;

