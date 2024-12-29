import React from "react";
import bg1 from "../../../assets/home/b1.png";
import bg2 from "../../../assets/home/b2.png";
import circle from "../../../assets/home/hero.gif"
import { FaCalendarCheck } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="relative flex items-center justify-center h-[800px] md:h-[1180px] bg-black text-white font-mono">
            {/* Backgrounds circle */}
            <div
                className="absolute inset-0 bg-no-repeat -top-[500px]"
                style={{ backgroundImage: `url(${circle})`, backgroundSize: "700px" }}
            ></div>
            <div className="container mx-auto">
                <div className="lg:flex justify-between relative z-10">
                    <div className="space-y-10">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
                            Turn Vision into Reality Redefine Your Learning!
                        </h1>
                        <p className="text-lg md:text-xl mb-6 text-[#5FEAC7]">
                            Empowering Your Journey with Innovative Solutions and Unmatched Expertise.
                        </p>
                        <button

                            className="relative inline-block px-4 py-2 font-medium group"
                        >
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-blue-800 group-hover:-translate-x-0 group-hover:-translate-y-0 rounded"></span>
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#2e60ac] to-[#0d72d2] border-none  group-hover:bg-blue-500 rounded"></span>
                            <span className="relative flex gap-4 text-white py-3">
                                <FaCalendarCheck className="text-xl" />
                                Book a Free Class
                            </span>
                        </button>

                        {/* Stats Section */}
                        <div className="flex  gap-10 pt-20">
                            <div className="text-center">
                                <p className="text-6xl ">01+</p>
                                <p>Available Program</p>
                            </div>
                            <div className="text-center">
                                <p className="text-6xl ">21+</p>
                                <p>Active Module</p>
                            </div>
                            <div className="text-center">
                                <p className="text-6xl ">100+</p>
                                <p>Satisfied Students</p>
                            </div>
                        </div>
                    </div>

                    {/* Devices Mockups */}
                    <div className="md:flex justify-center items-center gap-6 mt-10">
                        <img
                            src={bg2}
                            alt="Laptop Mockup"
                            className="shadow-lg mt-20"
                        />
                        <img
                            src={bg1}
                            alt="Mobile Mockup"
                            className=" shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
