import React, { useState, useEffect } from "react";
import axios from "axios";

const TeamSection = () => {
  const [teamImages, setTeamImages] = useState([]);
  const [teamDetails, setTeamDetails] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/team/api");
        const images = response.data;
        const lastFourImages = images.slice(-4).map((item) => item.image);
        setTeamImages(lastFourImages);
        setTeamDetails(images); // Store the entire team data
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };

    fetchTeamData();
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="team" className="relative md:h-[140vh] bg-gray-100 flex flex-row items-center">
      <div className="absolute h-full top-0 left-0 w-[50%] bg-customYellow"></div>
      {teamImages.length > 0 && (
        <img
          className="absolute bg-gray-200 sm:bg-none z-10 top-5 right-auto left-[38%] sm:left-[54%] w-48 h-48 md:h-64 md:w-64 border-4 border-customYellow object-cover rounded-full animate-customAnimationIn"
          src={`http://127.0.0.1:8000/storage/${teamImages[0]}`}
          alt="Team Member"
          style={{ animationDelay: "750ms" }}
        />
      )}
      <div className="w-[100%] h-[100%] flex flex-col items-center justify-center">
        <div className="w-full md:w-auto mt-[160px] sm:mt-20 flex flex-col justify-center items-center md:translate-y-[20%] -translate-x-12 sm:-translate-x-1/4">
          {teamImages.slice(1).map((image, index) => (
            <img
              key={index}
              className={`sm:w-64 sm:h-64 w-48 h-48 object-cover rounded-full ${
                index === 0
                  ? "md:-translate-x-3/4 shadow-xl bg-gray-200"
                  : index === 1
                  ? " w-64 h-64 sm:w-[432px] sm:h-[432px] -translate-y-1/4 translate-x-1/2 md:-translate-x-1 shadow-xl bg-gray-300"
                  : "-translate-y-2/3 sm:-translate-y-52 md:-translate-x-2/3 shadow-xl bg-gray-400"
              }`}
              src={`http://127.0.0.1:8000/storage/${image}`}
              alt={`Team Member ${index + 2}`}
            />
          ))}
        </div>
        <div className="mx-20 sm:ml-36 z-10 bg-customGreen text-white rounded-sm p-6 shadow-lg max-w-lg text-left md:translate-x-1/4 -translate-y-40 sm:-translate-y-64">
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <p className="text-gray-300 mb-4">
            Nunc mi ipsum faucibus vitae aliquet. Pellentesque elit eget gravida cum
            sociis natoque penatibus. Urna duis convallis convallis tellus id interdum
            velit. Proin sed libero enim sed faucibus turpis in.
          </p>
          <button
            onClick={openModal}
            className="inline-block px-6 py-2 border border-customYellow text-white hover:text-customGreen hover:bg-gray-200 rounded-sm bg-customYellow transition"
          >
            Read More
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-customYellow text-white rounded-lg shadow-lg max-w-4xl w-full p-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-bold">Our Team</h2>
              <button
                onClick={closeModal}
                className="bg-customGreen text-white hover:text-gray-200"
              >
                ✕
              </button>
            </div>
            <p className="mb-6 text-gray-100">
              Meet our talented team who make everything possible with their
              dedication and creativity.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {teamDetails.map((member) => (
                <div
                  key={member.id}
                  className="flex flex-col items-center text-white bg-customGreen p-4 rounded-lg shadow"
                >
                  <img
                    src={`http://127.0.0.1:8000/storage/${member.image}`}
                    alt={member.name}
                    className="w-32 h-32 object-cover rounded-full mb-3"
                  />
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-sm text-gray-100">{member.position}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TeamSection;
