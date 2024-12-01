import ServiceCard from "../components/serviceCard.jsx";
import backgroundImage from "../assets/main-back.jpg";
import womenImage from "../assets/women.jpg";

const Home = () => {
  const features = [
    {
      title: "Strategy",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
      icon: "icon1", // Add SVG or an icon class here
    },
    {
      title: "Branding",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
      icon: "icon2", // Add SVG or an icon class here
    },
    {
      title: "Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
      icon: "icon3", // Add SVG or an icon class here
    },
    {
      title: "Web Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
      icon: "icon4", // Add SVG or an icon class here
    },
    {
      title: "Social Media",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
      icon: "icon5", // Add SVG or an icon class here
    },
    {
      title: "Ecommerce",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
      icon: "icon6", // Add SVG or an icon class here
    },
  ];
  return (
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
    <section className="relative bg-teal-500 py-10" id="carousel_02fc">
      <div className="container mx-auto">
        {/* Decorative SVG Shape */}
        <div className="h-[100%] w-[100%] py-10 px-20 absolute top-0 left-0 transform delay-500">
          <svg
            className="h-[100%] w-[100%] text-teal-300"
            preserveAspectRatio="none"
            viewBox="0 0 160 150"
          >
            <path d="M43.2,126.9c14.2,1.3,27.6,7,39.1,15.6c8.3,6.1,19.4,10.3,32.7,5.3c11.7-4.4,18.6-17.4,21-30.2c2.6-13.3,8.1-25.9,15.7-37.1
              c8.3-12.1,10.8-27.9,5.3-42.7C150.5,20.3,134.6,9,117,7.6C107.9,6.9,98.8,5,90.1,1.9C83-0.6,75-0.7,67.4,2.1
              c-9.9,3.7-17,11.6-20.1,21c-3.3,10.1-10.9,18-20.6,22.2c-0.1,0-0.1,0.1-0.2,0.1c-20.3,8.9-31,32-24.6,53.2
              C6.9,115.6,25.2,125.2,43.2,126.9z"
            />
          </svg>
        </div>

        {/* Main Content */}
        <div className="relative">
          <img
            src="//images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/5f2cac1f3cfd566a91b4507b/gffgfgfg-min.jpg"
            alt=""
            className="rounded-lg shadow-lg w-full"
          />

          {/* List Section */}
          <div className="grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="rounded-lg bg-white shadow-md p-5 hover:shadow-lg transition-transform transform hover:scale-105"
              >
                <img
                  src={`//images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/${item === 1 ? '5baff195dc3a5b37a0a475e3/hghgh.jpg' : item === 2 ? '27c9b693e86e593b85641f49/hgghhh-min.jpg' : 'f15bf95824015febb49489e4/xcccx.jpg'}`}
                  alt=""
                  className="rounded-md mb-4 w-full"
                />
                <p className="text-gray-700 mb-4">
                  Sample text. Click to select the text box. Click again or double click to start editing the text.
                </p>
                <a
                  href="#"
                  className="text-teal-600 font-semibold hover:underline"
                >
                  More
                </a>
              </div>
            ))}
          </div>

          {/* Attribution */}
          <p className="mt-6 text-sm text-gray-500">
            Images from{" "}
            <a
              href="https://www.freepik.com/psd/mockup"
              className="text-teal-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Freepik
            </a>
          </p>
        </div>
      </div>
    </section>
    <section
      id="features"
      className="flex flex-col items-center justify-center bg-cover bg-center py-12 px-6"
      style={{ backgroundImage: `url('/path-to-image.jpg')` }}
    >
      <div className="max-w-5xl text-center">
        <h2 className="text-3xl font-bold mb-4">Epic Design and Engineering</h2>
        <p className="text-lg text-gray-700 mb-6">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className="text-gray-500">
          Image from{" "}
          <a
            href="https://www.freepik.com/photos/desk-flatlay"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Freepik
          </a>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-start bg-green-300 text-white rounded-lg p-6 shadow-lg transition-transform duration-500 hover:scale-105"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-white text-green-600 rounded-full mb-4">
              {/* Replace with actual SVG */}
              <span>{feature.icon}</span>
            </div>
            <h5 className="text-xl font-semibold mb-2">{feature.title}</h5>
            <p className="text-gray-800">{feature.description}</p>
          </div>
        ))}
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
)};

export default Home;

