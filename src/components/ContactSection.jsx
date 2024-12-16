import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS SDK

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    // EmailJS service ID, template ID, and user ID
    const serviceID = "service_17skob5";
    const templateID = "template_dqyezzs";
    const userID = "fmBzPdZE1B__Op2hJ";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(
        (response) => {
          setIsSubmitting(false);
          setSuccessMessage("Thank you! Your message has been sent.");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setIsSubmitting(false);
          setErrorMessage("Unable to send your message. Please try again.");
        }
      );
  };

  return (
    <section id="carousel_a12b">
      <div className="relative flex flex-col items-center bg-customGreen">
        <div className="absolute w-full h-[50%] bg-customYellow"></div>
        <div className="z-10 my-10 max-w-screen-lg py-12 mx-10 bg-white grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <div className="p-8 text-customGreen">
            <h3 className="text-3xl mb-4 font-bold">Contact Us</h3>
            <p className="text-lg mb-8">We'd love to hear from you.</p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" id="siteId" name="siteId" value="2901472" />
              <input type="hidden" id="pageId" name="pageId" value="2909040" />
              <div className="space-y-4">
                <div className="flex flex-col">
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your Name"
                    className="border-2 border-customGreen rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter a valid email address"
                    className="border-2 border-customGreen rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows="4"
                    className="border-2 border-customGreen rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-start">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-customGreen text-white py-3 px-6 rounded-lg hover:bg-customYellow transition duration-200 ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </button>
              </div>
              {successMessage && (
                <div className="text-center text-sm text-green-500 mt-4">{successMessage}</div>
              )}
              {errorMessage && (
                <div className="text-center text-sm text-red-500 mt-4">{errorMessage}</div>
              )}
            </form>
          </div>

          {/* Working Hours and Call Us */}
          <div className="p-8 text-customGreen">
            <h4 className="text-2xl mb-4 font-bold">Working Hours</h4>
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
          <div className="p-4 text-customGreen">
            <h4 className="text-2xl mb-4 font-bold">Location</h4>
            <p className="text-lg mb-4">
              Design Studio<br />
              461 Amsterdam Ave<br />
              New York, New York 10055
            </p>
            <p className="text-lg">
              <a
                href="mailto:contactus@designstudio.com"
                className="break-words text-blue-500 hover:text-blue-700"
              >
                contactus@designstudio.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
