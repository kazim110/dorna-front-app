import React, { useState, useEffect  } from "react";
import womenImage from "../assets/women.jpg";
import g1 from "../assets/g1.jpg";
import g2 from "../assets/g2.jpg";
import g3 from "../assets/g3.jpg";
import axios from "axios";

const GallerySection = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [slides, setSlides] = useState([]);

    useEffect(() => {
      const fetchSlides = async () => {
        try {
          const response = await axios.get("http://127.0.0.1:8000/gallery/api");
          const data = response.data.map((item) => ({
            image: `http://127.0.0.1:8000/storage/${item.image}`,
            name: item.title,
          }));
          setSlides(data);
        } catch (error) {
          console.error("Error fetching slides:", error);
        }
      };
      fetchSlides();
    }, []);
    // const slides = [
    //     { src: g1, alt: "Nature" },
    //     { src: g2, alt: "Snow" },
    //     { src: g3, alt: "Mountains" },
    // ];

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
        <div className="relative max-w-3xl mx-auto py-10">
        <div className="mb-4">
            <h2 className="text-customGreen text-5xl text-center font-bold pb-10">We create, restore & evolve iconic brands</h2>
        </div>
    
        {/* Slideshow */}
        <div className="relative">
        {slides.length > 0 ? (
            slides.map((slide, index) => (
            <img
                key={index}
                src={slide.image}
                alt={slide.title}
                className={`w-full ${
                currentSlide === index ? "block" : "hidden"
                }`}
            />
            ))) : (
                <p className="text-center text-gray-500">Loading Image...</p>
            )}
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
          {slides.length > 0 ? (  
            slides.map((slide, index) => (
            <img
                key={index}
                src={slide.image}
                alt={slide.title}
                className={`w-1/3 h-24 object-cover cursor-pointer transition-opacity ${
                currentSlide === index ? "opacity-100" : "opacity-50"
                } hover:opacity-100`}
                onClick={() => changeSlide(index)}
            />
            ))) : (
                <p className="text-center text-gray-500">Loading Image List...</p>
            )}
        </div>
        </div>
    );


}
export default GallerySection;