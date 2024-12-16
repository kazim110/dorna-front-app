import { useState, useEffect } from "react";
import axios from "axios";

const AbouteSection = () => {
  const [about, setAbout] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/about/api");
        const { title, description, image } = response.data;

        setAbout({
          title,
          description,
          image: `http://127.0.0.1:8000/storage/${image}`,
        });

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching about:", error);
        setIsLoading(false);
      }
    };

    fetchAbout();
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section
      className="relative flex flex-col justify-center items-center bg-gray-200 pt-[12%] pb-[10px]"
      id="about"
    >
      <div className="relative container mx-auto flex">
        <div
          className="bg-customYellow rounded-full animate-custom-animation will-change-transform opacity transition-opacity duration-[1500ms] absolute w-36 h-36 sm:w-48 sm:h-48 md:w-[320px] md:h-[320px] top-0 right-0 translate-x-1/6 -translate-y-1/3"
          style={{ animationDelay: "500ms" }}
        ></div>

        {isLoading ? (
          <p className="text-center text-gray-500">Loading About...</p>
        ) : about ? (
          <div className="py-8 flex z-10 flex-wrap flex-row-reverse w-2/3 mx-auto mb-[6%]">
            <div className="w-full md:w-1/2">
              <img
                className="h-[80%] w-full object-cover shadow-lg bg-gray-300"
                src={about.image}
                alt={about.title}
              />
            </div>
            <div className="w-full md:w-1/2 text-left flex flex-col item-center justify-center p-[20px]">
              <h3 className="text-customGreen text-xl font-bold mb-4">{about.title}</h3>
              <p className="text-gray-700 mb-4 line-clamp-6">{about.description}</p>
              <button
                onClick={openModal}
                className="inline-block bg-customGreen text-white py-2 px-4 rounded-md hover:bg-customYellow hover:text-white transition"
              >
                Learn More
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">No About information found.</p>
        )}
      </div>

      {/* Modal for Learn More */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-customYellow text-white rounded-lg shadow-lg w-[90%] max-w-3xl p-6 relative">
            <button
              className="absolute top-4 right-4 bg-customGreen text-gray-100 hover:text-black text-2xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4">{about.title}</h3>
            <img
              className="w-full h-64 object-contain rounded-md mb-4"
              src={about.image}
              alt={about.title}
            />
            <p className="text-gray-100">{about.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default AbouteSection;
