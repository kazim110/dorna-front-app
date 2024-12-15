import React, { useState, useEffect } from "react";
import secBack from "../assets/sec-back.jpg";
import axios from "axios";
import womenImage from "../assets/women.jpg"

const ServicesSection = () => {

    const [features, setFeatures] = useState([]);

    useEffect(()=>{
      const fetchFeatures = async () => {
        try {
          const response = await axios.get("http://127.0.0.1:8000/service/api");
          const data = response.data.map((item) => ({
            image: `http://127.0.0.1:8000/storage/${item.image}`,
            description: item.description,
            title: item.title,
          }));
          setFeatures(data);
        } catch (error) {
          console.error("Error fetching services:", error);
        }
      };
      fetchFeatures();
    }, []);

    return (
        <section
        id="features"
        className="h-full bg-cover bg-center flex justify-center md:justify-start md:pl-[15%] "
        style={{ backgroundImage: `url(${secBack})` }}
      >
        <div className="flex flex-col w-[60%] md:w-[60%] lg:[45%] items-center justify-center mt-10">
          <div className="max-w-5xl">
            <h2 className="text-customGreen text-2xl md:text-4xl font-bold mb-4">Epic Design and Engineering</h2>
            <p className="text-md md:text-lg text-gray-700 mb-6">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
            {features.length > 0 ? (
              features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start bg-customYellow text-white rounded-lg p-6 shadow-lg transition-transform duration-500 hover:scale-105"
                >
                  <img className="self-center w-20 h-20 bg-white text-green-600 rounded-full mb-4" src={feature.image} alt="" />
                  <h5 className="text-xl font-semibold mb-2">{feature.title}</h5>
                  <p className="text-customGreen">{feature.description}</p>
                </div>
              ))) : (
                <p className="text-center text-gray-500">Loading Services...</p>
              )}
          </div>
        </div>
      </section>
    )
}

export default ServicesSection;