import ServiceCard from "../components/serviceCard.jsx";
import backgroundImage from "../assets/main-back.jpg";

const Home = () => (
  <div>
    {/* Hero Section */}
    <section className="bg-blue-500 text-white text-center">
      <div
        className="bg-cover bg-center h-[1080px] flex items-center justify-center flex-col"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <h2 className="text-customGreen relative">Get the website</h2>
        <h1 className="text-4xl text-customGreen font-bold">Of your dreams</h1>
        <p className="text-customGreen mx-20 mt-3 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud.
        </p>
        <button className="active:bg-black rounded-full hover:bg-customGreen bg-customYellow text-customGreen hover:text-white px-6 py-2">
          Get Started
        </button>
      </div>
    </section>

    {/* Carousel Section */}
    <section
      className="relative flex flex-col justify-center items-center bg-gray-200 py-12"
      id="carousel_1e99"
    >
      <div className="container mx-auto flex flex-wrap items-center justify-center">

        <div
          className="bg-customYellow rounded-full animate-custom-animation will-change-transform opacity transition-opacity duration-[1500ms] w-[366px] h-[366px] mt-[60px] mr-[-170px] ml-auto"
          style={{ animationDelay: "500ms" }}
        ></div>
        <div className="flex flex-wrap w-full lg:w-2/3 mt-[-215px] mx-auto mb-60px">
          <div className="w-full md:w-1/2 p-4 text-left">
            <h3 className="text-xl font-bold mb-4">Web Development</h3>
            <p className="text-gray-700 mb-4">
              Quickly incentivize impactful action items before tactical
              collaboration and idea-sharing.{" "}
              <a href="#" className="text-blue-500 underline">
                through
              </a>{" "}
              wireless opportunities. Progressively network performance-based
              services for functionalized testing procedures.
            </p>
            <p className="text-gray-500 text-sm">
              Image by{" "}
              <a
                href="https://www.freepik.com/photos/people"
                className="text-blue-500 underline"
              >
                Freepik
              </a>
            </p>
            <a
              href="#"
              className="inline-block bg-black text-white py-2 px-4 rounded-md hover:bg-blue-500 transition"
            >
              Learn More
            </a>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div
              className="h-64 bg-cover bg-center rounded-md shadow-lg"
              style={{
                backgroundImage: "url('https://via.placeholder.com/300')",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>

    {/* Services Section */}
    <section className="p-10 grid grid-cols-1 md:grid-cols-3 gap-4">
      <ServiceCard
        title="Social Media Marketing"
        description="Boost your brand's presence online."
        image="https://via.placeholder.com/300"
      />
      <ServiceCard
        title="SEO Optimization"
        description="Rank higher on search engines."
        image="https://via.placeholder.com/300"
      />
      <ServiceCard
        title="Creative Design"
        description="Stand out with stunning visuals."
        image="https://via.placeholder.com/300"
      />
    </section>
  </div>
);

export default Home;

