import ServiceCard from "../components/serviceCard.jsx";
import backgroundImage from "../assets/main-back.jpg";
import womenImage from "../assets/women.jpg";
import './Home.css';
import secBack from "../assets/sec-back.jpg";

const Home = () => {

  const stats = [
    {
      percentage: "50%",
      text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
      textColor: "text-gray-600",
      bgColor: "bg-black",
      textDelay: "1000ms",
    },
    {
      percentage: "36%",
      text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
      textColor: "text-gray-800",
      bgColor: "bg-green-500",
      textDelay: "1000ms",
    },
    {
      percentage: "20%",
      text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
      textColor: "text-gray-200",
      bgColor: "bg-black",
      textDelay: "1000ms",
    },
    {
      percentage: "13%",
      text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
      textColor: "text-gray-800",
      bgColor: "bg-green-500",
      textDelay: "1500ms",
    },
  ];
  const testimonials = [
    {
      image: "/path-to-image1.jpg",
      text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
      name: "Stella Larson",
    },
    {
      image: "/path-to-image2.jpg",
      text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
      name: "Nick Johnson",
    },
    {
      image: "/path-to-image3.jpg",
      text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
      name: "Olga Ivanova",
    },
    {
      image: "/path-to-image4.jpg",
      text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
      name: "Paul Hudson",
    },
    {
      image: "/path-to-image5.jpg",
      text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
      name: "Cash Hudson",
    },
    {
      image: "/path-to-image6.jpg",
      text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
      name: "Mike Perry",
    },
  ];
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
      className="relative flex flex-col justify-center items-center bg-gray-200 pt-[12%] pb-[10px]"
      id="carousel_1e99"
    >
      <div className="relative w-[220vh] h-[100vh] border container mx-auto flex flex-wrap">

        <div
          className="bg-customYellow rounded-full animate-custom-animation will-change-transform opacity transition-opacity duration-[1500ms] absolute w-[366px] h-[366px] top-0 right-0 translate-x-1/6 -translate-y-1/3"
          style={{ animationDelay: "500ms" }}
        ></div>
        <div className="py-8 flex z-10 flex-wrap w-full lg:w-2/3 mx-auto mb-[6%]">
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
    <section className="relative bg-customYellow py-10" id="carousel_02fc">
      <div className="container mx-auto flex justify-center">
        {/* Decorative SVG Shape */}
        <div className="h-[100%] w-[100%] pt-24 flex justify-center absolute top-0 left-0 transform delay-500">
          <svg
            className="h-[130vh] w-[180vh]"
            preserveAspectRatio="none"
            viewBox="0 0 160 150"
          >
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
        <div className="relative w-[80%] mt-24">
          <img
            src="//images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/5f2cac1f3cfd566a91b4507b/gffgfgfg-min.jpg"
            alt=""
            className="rounded-lg shadow-lg w-[85%] justify-self-start"
          />

          {/* List Section */}
          <div className="w-[85%] grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-self-end -translate-y-1/3">
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
        </div>
      </div>
    </section>
    <section
      id="features"
      className="h-[130vh] bg-cover bg-center py-12 px-6"
      style={{ backgroundImage: `url(${secBack})` }}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-4">Epic Design and Engineering</h2>
          <p className="text-lg text-gray-700 mb-6">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
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
      </div>
    </section>
    <section id="team" className="relative bg-gray-100 py-12 flex flex-row items-center">
      {/* Background Shape */}
      <div className="absolute top-0 left-0 w-[50%] h-full bg-green-300"></div>

      {/* Team Circle Images */}
      <div className="relative flex flex-col flex-wrap justify-center items-center gap-6 mt-20">
        <div
          className="w-40 h-40 bg-cover bg-center rounded-full animate-customAnimationIn"
          style={{
            backgroundImage: "url('/path-to-image1.jpg')",
          }}
        ></div>
        <div
          className="w-48 h-48 bg-cover bg-center rounded-full animate-customAnimationIn"
          style={{
            backgroundImage: "url('/path-to-image2.jpg')",
            animationDelay: "500ms",
          }}
        ></div>
        <div
          className="w-36 h-36 border-4 border-green-300 bg-cover bg-center rounded-full animate-customAnimationIn"
          style={{
            backgroundImage: "url('/path-to-image3.jpg')",
            animationDelay: "750ms",
          }}
        ></div>
        <div
          className="w-40 h-40 bg-cover bg-center rounded-full animate-customAnimationIn"
          style={{
            backgroundImage: "url('/path-to-image4.jpg')",
            animationDelay: "250ms",
          }}
        ></div>
      </div>

      {/* Team Info Section */}
      <div className="relative z-10 bg-black text-white rounded-lg p-6 mt-12 shadow-lg max-w-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Our Team</h2>
        <p className="text-gray-300 mb-4">
          Nunc mi ipsum faucibus vitae aliquet. Pellentesque elit eget gravida
          cum sociis natoque penatibus. Urna duis convallis convallis tellus id
          interdum velit. Proin sed libero enim sed faucibus turpis in.
        </p>
        <a
          href="#"
          className="inline-block px-6 py-2 bg-green-300 text-black rounded-lg hover:bg-green-400 transition"
        >
          Read More
        </a>
        <p className="mt-4 text-gray-400">
          Image from{" "}
          <a
            href="https://www.freepik.com/photos/people"
            className="text-green-300 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Freepik
          </a>
        </p>
      </div>
    </section>
    <section id="testimonials" className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <h2
          className="text-4xl font-bold text-center mb-8 animate-customAnimationIn2"
          style={{ animationDelay: "500ms" }}
        >
          Testimonials
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center animate-customAnimationIn2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-green-300 bg-cover bg-center"
                style={{ backgroundImage: `url(${testimonial.image})` }}
              ></div>
              <p className="text-gray-600 italic mb-2">{testimonial.text}</p>
              <h6 className="text-gray-800 font-semibold">{testimonial.name}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section id="memorable-websites" className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2
          className="text-4xl font-bold text-center mb-8 animate-customAnimationIn3"
          style={{ animationDelay: "500ms" }}
        >
          Memorable Websites That Sell
        </h2>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex items-center justify-center p-6 rounded-full shadow-lg animate-customAnimationIn3 ${stat.bgColor}`}
              style={{ animationDelay: `${index * 300}ms` }}
            >
              <div className="text-center">
                <h3
                  className={`text-4xl font-semibold ${stat.textColor}`}
                  style={{ animationDuration: "3000ms" }}
                >
                  {stat.percentage}
                </h3>
                <p
                  className={`mt-4 text-lg ${stat.textColor} animate-customAnimationIn3`}
                  style={{ animationDuration: "1000ms", animationDelay: stat.textDelay }}
                >
                  {stat.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="text-center py-16" id="carousel_4de0">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
          We create, restore & evolve iconic brands
        </h2>
        <div className="relative">
          <div
            className="carousel-inner"
            id="carousel-a3d5"
            data-u-ride="carousel"
            data-interval="5000"
          >
            <div className="carousel-items flex flex-row">
              {[
                {
                  src: "//images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/e9b7d28c1320536f89b69106/nb.jpg",
                  title: "Sample Title 1",
                  text: "Sample Text 1",
                },
                {
                  src: "//images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/973e7b71cc2e5de2a6364059/bvvvvv.jpg",
                  title: "Sample Title 2",
                  text: "Sample Text 2",
                },
                {
                  src: "//images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/ac3b09f013c455f1be302b93/2.jpg",
                  title: "Sample Title 3",
                  text: "Sample Text 3",
                },
                {
                  src: "//images02.nicepagecdn.com/c461c07a441a5d220e8feb1a/9aed9ba7ac2455269e565127/debossed-logo-mockup-kraft-paper_149660-758.jpg",
                  title: "Sample Title 4",
                  text: "Sample Text 4",
                },
                {
                  src: "//images02.nicepagecdn.com/c461c07a441a5d220e8feb1a/2fab027daf5856dfa9864afe/3d-logo-mockup-modern-facade-sign_145275-209.jpg",
                  title: "Sample Title 5",
                  text: "Sample Text 5",
                },
                {
                  src: "//images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/4f42bf0df1b3556db8f7990d/jhjj.jpg",
                  title: "Sample Title 6",
                  text: "Sample Text 6",
                },
                {
                  src: "//images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/1e7e04fd36fb5e83aa6dab78/1.jpg",
                  title: "Sample Title 7",
                  text: "Sample Text 7",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="carousel-item relative mb-8"
                >
                  <img
                    className="w-full object-cover h-96"
                    src={item.src}
                    alt={item.title}
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center text-white">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute top-1/2 left-0 right-0 flex justify-between">
              <button
                className="carousel-control-prev bg-gray-900 p-3 rounded-full opacity-70 hover:opacity-100"
                data-u-slide="prev"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 451.847 451.847"
                  className="w-6 h-6 text-white"
                >
                  <path d="M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z"></path>
                </svg>
              </button>
              <button
                className="carousel-control-next bg-gray-900 p-3 rounded-full opacity-70 hover:opacity-100"
                data-u-slide="next"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 451.846 451.847"
                  className="w-6 h-6 text-white"
                >
                  <path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <p className="text-xl mt-4">
          Sample text. Click to select the text box. Click again or double click to start editing the text.
        </p>
        <p className="mt-4">
          Image by{" "}
          <a
            href="https://www.freepik.com/psd/mockup"
            className="text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Freepik
          </a>
        </p>
      </div>
    </section>
    <section className="bg-black text-white py-16" id="carousel_a12b">
      <div className="w-full bg-primary-500 h-1/4"></div> {/* Custom color block */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Contact Form */}
        <div className="p-8 bg-white text-black rounded-lg shadow-lg animated">
          <h3 className="text-3xl mb-4">Contact Us</h3>
          <p className="text-lg mb-8">We'd love to hear from you.</p>
          <form action="https://forms.nicepagesrv.com/Form/Process" className="space-y-6">
            <input type="hidden" id="siteId" name="siteId" value="2901472" />
            <input type="hidden" id="pageId" name="pageId" value="2909040" />
            <div className="space-y-4">
              <div className="flex flex-col">
                <label htmlFor="name" className="sr-only">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your Name"
                  className="border-2 border-gray-600 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter a valid email address"
                  className="border-2 border-gray-600 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  rows="4"
                  className="border-2 border-gray-600 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                ></textarea>
              </div>
            </div>
            <div className="flex justify-start">
              <button
                type="submit"
                className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-200"
              >
                Submit
              </button>
            </div>
            <div className="text-center text-sm text-gray-500 mt-4">
              <div className="hidden">Thank you! Your message has been sent.</div>
              <div className="hidden">Unable to send your message. Please fix errors and try again.</div>
            </div>
          </form>
        </div>

        {/* Working Hours and Call Us */}
        <div className="p-8 bg-white text-black rounded-lg shadow-lg">
          <h4 className="text-2xl mb-4">Working Hours</h4>
          <p className="text-lg mb-8">Mon – Fri: 10 am – 8 pm, Sat – Sun: Closed</p>
          <h4 className="text-2xl mb-4">Call Us</h4>
          <a href="tel:+12345678910" className="flex items-center text-blue-500 hover:text-blue-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 405.333 405.333"
              className="w-6 h-6 mr-2"
            >
              <path
                d="M373.333,266.88c-25.003,0-49.493-3.904-72.704-11.563c-11.328-3.904-24.192-0.896-31.637,6.699l-46.016,34.752c-52.8-28.181-86.592-61.952-114.389-114.368l33.813-44.928c8.512-8.512,11.563-20.971,7.915-32.64C142.592,81.472,138.667,56.96,138.667,32c0-17.643-14.357-32-32-32H32C14.357,0,0,14.357,0,32c0,205.845,167.488,373.333,373.333,373.333c17.643,0,32-14.357,32-32V298.88C405.333,281.237,390.976,266.88,373.333,266.88z"
              ></path>
            </svg>
            +1 (234) 567-8910
          </a>
        </div>

        {/* Location */}
        <div className="p-8 bg-white text-black rounded-lg shadow-lg">
          <h4 className="text-2xl mb-4">Location</h4>
          <p className="text-lg mb-4">
            Design Studio<br />
            461 Amsterdam Ave<br />
            New York, New York 10055
          </p>
          <p className="text-lg">
            <a
              href="mailto:contactus@designstudio.com"
              className="text-blue-500 hover:text-blue-700"
            >
              contactus@designstudio.com
            </a>
          </p>
        </div>
      </div>
    </section>
    {/* Services Section */}
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-screen-xl mx-auto text-center">
        <p className="text-sm">
          Sample text. Click to select the Text Element.
        </p>
      </div>
    </footer>
  </div>
)};

export default Home;

