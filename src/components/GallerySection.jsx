import React, { useState } from "react";
import womenImage from "../assets/women.jpg";
import g1 from "../assets/g1.jpg";
import g2 from "../assets/g2.jpg";
import g3 from "../assets/g3.jpg";

const GallerySection = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { src: g1, alt: "Nature" },
        { src: g2, alt: "Snow" },
        { src: g3, alt: "Mountains" },
    ];

    const totalSlides = slides.length;

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };
    const changeSlide = (index) => {
        setCurrentSlide(index);
    };

    
    
    return (
        <div className="relative max-w-5xl mx-auto">
        <div className="mb-4">
            <h2 className="text-2xl font-bold">Slideshow Indicators</h2>
            <p className="text-gray-600">
            Using images to indicate how many slides there are in the slideshow,
            and highlight the image the user is currently viewing.
            </p>
        </div>
    
        {/* Slideshow */}
        <div className="relative">
            {slides.map((slide, index) => (
            <img
                key={index}
                src={slide.src}
                alt={slide.alt}
                className={`w-full ${
                currentSlide === index ? "block" : "hidden"
                }`}
            />
            ))}
        </div>
        <button
        onClick={prevSlide}
        className="absolute z-index-10 top-1/2 left-4 transform -translate-y-1/2 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800"
      >
        &#10094; {/* Left Arrow */}
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800"
      >
        &#10095; {/* Right Arrow */}
      </button>
        {/* Indicators */}
        <div className="flex justify-center mt-4 gap-4">
            {slides.map((slide, index) => (
            <img
                key={index}
                src={slide.src}
                alt={slide.alt}
                className={`w-24 h-16 object-cover cursor-pointer transition-opacity ${
                currentSlide === index ? "opacity-100" : "opacity-50"
                } hover:opacity-100`}
                onClick={() => changeSlide(index)}
            />
            ))}
        </div>
        </div>
    );


}
export default GallerySection;