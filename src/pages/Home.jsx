import ServiceCard from "../components/serviceCard.jsx";
import backgroundImage from "../assets/main-back.jpg";
import womenImage from "../assets/women.jpg";

const Home = () => (
  <div>
    {/* Hero Section */}
    <section className="bg-blue-500 text-white text-center">
      <div
        className="bg-cover bg-center h-[1080px] flex items-center justify-center flex-col"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <h2 className="text-6xl font-medium text-customGreen relative">Get the website</h2>
        <h1 className="text-9xl uppercase text-customGreen font-bold">Of your dreams</h1>
        <p className="text-3xl text-customGreen mx-20 mt-3 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud.
        </p>
        <button className="active:bg-black rounded hover:bg-customGreen bg-customYellow text-customGreen hover:text-white px-20 py-5">
          <p className="">Get Started</p>
        </button>
      </div>
    </section>

    {/* Carousel Section */}
    <section
      className="relative flex flex-col justify-center items-center bg-gray-200 py-12"
      id="carousel_1e99"
    >
      <div className="container mx-auto flex flex-wrap">

        <div
          className="bg-customYellow rounded-full animate-custom-animation will-change-transform opacity transition-opacity duration-[1500ms] absolute w-[366px] h-[366px] top-[60px] right-[0px]"
          style={{ animationDelay: "500ms" }}
        ></div>
        <div className="h-[80vh] pt-[10%] flex z-10 flex-wrap w-full lg:w-2/3 mx-auto mb-[6%]">
          <div className="w-full md:w-1/2 text-left flex flex-col item-center justify-center p-[20px]">
            <h3 className="text-xl font-bold mb-4">Web Development</h3>
            <p className="text-gray-700 mb-4">Quickly incentivize impactful action items before tactical collaboration and idea-sharing. Monotonically engage market-driven intellectual capital  wireless opportunities. Progressively network performance based services for functionalized testing procedures.
            </p>
            <a
              href="#"
              className="inline-block bg-black text-white py-2 px-4 rounded-md hover:bg-blue-500 transition"
            >
              Learn More
            </a>
          </div>
          <div className="w-full md:w-1/2">
            <div
              className="h-full bg-cover bg-center shadow-lg"

              style={{ backgroundImage: `url(${womenImage})` }}
              
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

