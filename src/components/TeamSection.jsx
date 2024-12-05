import React, { useState } from "react";
import womenImage from "../assets/women.jpg";

const TeamSection = () => {

    return (
        <section id="team" className="relative h-[140vh] bg-gray-100 flex flex-row items-center">
            <div className="absolute h-full top-0 left-0 w-[50%] bg-customYellow"></div>

            <img
                className="absolute top-12 right-auto left-[54%] w-64 h-64 border-4 border-customYellow object-cover rounded-full animate-customAnimationIn"
                src={womenImage}
                alt="Team Member"
                style={{ animationDelay: "750ms" }}
            />

            <div className="relative w-[100%] h-[100%] flex flex-col items-center justify-center">
                <div className="absolute top-12 flex flex-col justify-center items-center -translate-x-1/4">
                    <img
                        className="w-64 h-64 object-cover rounded-full -translate-x-3/4 shadow-xl"
                        src={womenImage}
                        alt="Team Member"
                    />
                    <img
                        className="w-[432px] h-[432px] object-cover rounded-full -translate-y-1/4 shadow-xl"
                        src={womenImage}
                        alt="Team Member"
                        style={{ animationDelay: "500ms" }}
                    />
                    <img
                        className="w-64 h-64 object-cover rounded-full -translate-y-2/3 -translate-x-2/3 shadow-xl"
                        src={womenImage}
                        alt="Team Member"
                        style={{ animationDelay: "250ms" }}
                    />
                </div>

                <div className="absolute z-10 bg-black text-white rounded-lg p-6 shadow-lg max-w-lg text-center translate-x-1/4 translate-y-64">
                <h2 className="text-3xl font-bold mb-4">Our Team</h2>
                <p className="text-gray-300 mb-4">
                    Nunc mi ipsum faucibus vitae aliquet. Pellentesque elit eget gravida cum
                    sociis natoque penatibus. Urna duis convallis convallis tellus id interdum
                    velit. Proin sed libero enim sed faucibus turpis in.
                </p>
                <a
                    href="#"
                    className="inline-block px-6 py-2 bg-customYellow text-black rounded-lg hover:bg-green-400 transition"
                >
                    Read More
                </a>
                </div>
            </div>
            </section>

    )
}
export default TeamSection;