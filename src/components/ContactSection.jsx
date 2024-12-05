import React ,{useState} from "react";

const ContactSection = () => {

    return (
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
    )
}
export default ContactSection;