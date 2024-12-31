import React from "react";
import bg1 from "../../../assets/home/b1.png";
import bg2 from "../../../assets/home/b2.png";
import circle from "../../../assets/home/hero.gif"
import { FaCalendarCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="relative flex items-center justify-center h-[1800px] md:h-[1500px] lg:h-[1200px] bg-black text-white font-mono ">
            {/* Backgrounds circle */}
            <div
                className="absolute inset-0 bg-no-repeat -top-[500px]"
                style={{ backgroundImage: `url(${circle})`, backgroundSize: "700px" }}
            ></div>
            <div className="lg:flex justify-between w-full relative z-10 mx-4 md:mx-0">
                <div className="w-full pl-[5%] md:pl-[10%]">
                    <div className="space-y-10">
                        <h1 className="text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-4">
                            Turn Vision into Reality Redefine Your Learning!
                        </h1>
                        <p className="text-lg md:text-xl mb-6 text-[#5FEAC7]">
                            Empowering Your Journey with Innovative Solutions and Unmatched Expertise.
                        </p>
                        <Link to="/about"

                            className="relative inline-block px-4 py-2 font-medium group"
                        >
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-blue-800 group-hover:-translate-x-0 group-hover:-translate-y-0 rounded"></span>
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#2e60ac] to-[#0d72d2] border-none  group-hover:bg-blue-500 rounded"></span>
                            <span className="relative flex gap-4 text-white py-3 uppercase">
                                <FaCalendarCheck className="text-xl" />
                                Explore us
                            </span>
                        </Link>

                        {/* Stats Section */}
                        <div className="flex  gap-10 pt-16">
                            <div className="text-center">
                                <p className="text-4xl md:text-6xl">01+</p>
                                <p>Available Program</p>
                            </div>
                            <div className="text-center">
                                <p className="text-4xl md:text-6xl">21+</p>
                                <p>Active Module</p>
                            </div>
                            <div className="text-center">
                                <p className="text-4xl md:text-6xl">100+</p>
                                <p>Satisfied Students</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" w-full md:flex justify-end">


                    {/* Devices Mockups */}
                    <img
                        src={bg2}
                        alt="Mobile Mockup"
                        className="mt-20 md:w-[300px] lg:w-[200px] xl:w-[300px] 2xl:w-[400px] animate-slow-bounce"
                    />

                    <img
                        src={bg1}
                        alt="Laptop Mockup"
                        className="lg:w-[200px] xl:w-[350px] 2xl:w-[500px]"
                    />

                </div>
            </div>

        </div>
    );
};

export default Banner;
