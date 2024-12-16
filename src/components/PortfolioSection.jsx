import React, { useState, useEffect } from "react";

const PortfolioSection = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    // Fetch the portfolio items from the API
    fetch("http://127.0.0.1:8000/portfolio/api")
      .then((response) => response.json())
      .then((data) => {
        // Extract the last four items
        const lastFourItems = data.slice(-4);
        setPortfolioItems(lastFourItems);
      })
      .catch((error) => {
        console.error("Error fetching portfolio data:", error);
      });
  }, []);

  // Ensure we have at least four items before rendering
  if (portfolioItems.length < 4) {
    return <div>Loading...</div>;
  }

  // Separate the first item and the remaining three items
  const [firstItem, ...otherItems] = portfolioItems;

  // Function to close the modal
  const closeModal = () => setSelectedItem(null);

  return (
    <section id="portfolios" className="bg-customYellow flex justify-center">
      <div className="relative container py-10 flex justify-center items-center">
        {/* Decorative SVG Shape */}
        <div className="h-[70vh] w-full md:h-2/3 md:w-full lg:h-full py-24 mb:10 flex justify-center absolute top-0 left-0 transform delay-500">
          <svg preserveAspectRatio="none" viewBox="0 0 160 150">
            <path
              className="fill-white opacity-50"
              d="M43.2,126.9c14.2,1.3,27.6,7,39.1,15.6c8.3,6.1,19.4,10.3,32.7,5.3c11.7-4.4,18.6-17.4,21-30.2c2.6-13.3,8.1-25.9,15.7-37.1
                c8.3-12.1,10.8-27.9,5.3-42.7C150.5,20.3,134.6,9,117,7.6C107.9,6.9,98.8,5,90.1,1.9C83-0.6,75-0.7,67.4,2.1
                c-9.9,3.7-17,11.6-20.1,21c-3.3,10.1-10.9,18-20.6,22.2c-0.1,0-0.1,0.1-0.2,0.1c-20.3,8.9-31,32-24.6,53.2
                C6.9,115.6,25.2,125.2,43.2,126.9z"
            />
          </svg>
        </div>

        {/* Main Content */}
        <div className="relative grid w-[80%] mt-24">
          {/* Display the first item's image */}
          <img
            src={`http://127.0.0.1:8000/storage/${firstItem.image}`}
            alt={firstItem.title}
            className="rounded-lg shadow-lg w-[85%] justify-self-start"
          />

          {/* List Section */}
          <div className="w-[85%] grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-self-end -translate-y-[68px]">
            {otherItems.map((item) => (
              <div
                key={item.id}
                className="rounded-lg bg-white shadow-md p-5 hover:shadow-lg transition-transform transform hover:scale-105"
              >
                <img
                  src={`http://127.0.0.1:8000/storage/${item.image}`}
                  alt={item.title}
                  className="rounded-md mb-4 w-full"
                />
                <p className="text-gray-700 mb-4 line-clamp-4">{item.description}</p>
                <button
                  onClick={() => setSelectedItem(item)}
                  className="text-teal-600 font-semibold hover:underline"
                >
                  More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for detailed view */}
{/* Modal for detailed view */}
{selectedItem && (
  <div
    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    onClick={closeModal}
  >
    <div
      className="bg-white rounded-lg shadow-lg w-[90%] max-w-3xl p-6 relative"
      onClick={(e) => e.stopPropagation()} // Prevent closing modal on click inside
    >
      <button
        className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl font-bold"
        onClick={closeModal}
      >
        &times;
      </button>
      <h2 className="text-2xl font-bold mb-4">{selectedItem.title}</h2>

      {/* Smaller Image */}
      <img
        src={`http://127.0.0.1:8000/storage/${selectedItem.image}`}
        alt={selectedItem.title}
        className="rounded-md mb-4 w-[60%] h-auto object-cover mx-auto" // Adjusted size here
      />

      {/* Additional details */}
      <p className="text-gray-700 mb-4">
        <strong>Client:</strong> {selectedItem.client}
      </p>
      <p className="text-gray-700 mb-4">
        <strong>Category:</strong> {selectedItem.category}
      </p>

      <p className="text-gray-700 mb-4">{selectedItem.description}</p>
    </div>
  </div>
)}


    </section>
  );
};

export default PortfolioSection;
