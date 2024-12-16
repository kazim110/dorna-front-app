import React, { useState, useEffect } from "react";
import secBack from "../assets/sec-back.jpg";
import axios from "axios";

const ServicesSection = () => {
  const [features, setFeatures] = useState([]);
  const [selectedFeature, setSelectedFeature] = useState(null);

  useEffect(() => {
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

  const handleReadMore = (feature) => {
    setSelectedFeature(feature);
  };

  const closeModal = () => {
    setSelectedFeature(null);
  };

  return (
    <section
      id="features"
      className="h-full bg-cover bg-center flex justify-center md:justify-start md:pl-[15%]"
      style={{ backgroundImage: `url(${secBack})` }}
    >
      <div className="flex flex-col w-[60%] md:w-[60%] lg:[45%] items-center justify-center mt-10">
        <div className="max-w-5xl">
          <h2 className="text-customGreen text-2xl md:text-4xl font-bold mb-4">
            Epic Design and Engineering
          </h2>
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
                {/* Adjust image container to prevent cropping */}
                <div className="self-center w-20 h-20 bg-white rounded-full overflow-hidden mb-4">
                  <img
                    className="w-full h-full object-contain p-5" // Ensure the image fits inside the circle
                    src={feature.image}
                    alt=""
                  />
                </div>
                <h5 className="text-xl font-semibold mb-2">{feature.title}</h5>
                <p className="text-customGreen line-clamp-5 mb-2">
                  {feature.description}
                </p>
                <button
                  className="text-white bg-customGreen py-2 px-4 rounded-md hover:bg-gray-300 hover:text-white transition"
                  onClick={() => handleReadMore(feature)}
                >
                  Read More
                </button>
              </div>

            ))
          ) : (
            <p className="text-center text-gray-500">Loading Services...</p>
          )}
        </div>
      </div>

      {selectedFeature && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-[90%] md:w-[60%] lg:w-[40%] relative">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-700 text-2xl"
              onClick={closeModal}
            >
              ✕
            </button>

            {/* Display the icon-style image */}
            <img
              className="w-20 h-20 object-contain mb-4 mx-auto"
              src={selectedFeature.image} // Use the icon source
              alt={selectedFeature.title}
            />

            <h3 className="text-2xl font-bold mb-4">{selectedFeature.title}</h3>
            <p className="text-gray-700">{selectedFeature.description}</p>
          </div>
        </div>
      )}

    </section>
  );
};

export default ServicesSection;
