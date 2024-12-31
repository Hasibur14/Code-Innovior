import React from "react";
import bg1 from "../../../assets/home/b1.png";
import bg2 from "../../../assets/home/b2.png";
import circle from "../../../assets/home/hero.gif"
import buttonImage from "../../../assets/home/button.png";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="relative flex items-center justify-center h-[1700px] md:h-[1500px] lg:h-[1000px] xl:h-[900px] 2xl:h-[1100px] bg-black text-white font-mono ">
            {/* Backgrounds circle */}
            <div
                className="absolute inset-0 bg-no-repeat -top-[500px]"
                style={{ backgroundImage: `url(${circle})`, backgroundSize: "700px" }}
            ></div>
            <div className="lg:flex justify-between w-full relative z-10 mx-4 md:mx-0">
                <div className="w-full md:pl-[10%]">
                    <div className="space-y-8">
                        <h1 className="text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-4">
                            Turn Vision into Reality Redefine Your Learning!
                        </h1>
                        <p className="text-lg md:text-xl mb-6 text-[#5FEAC7]">
                            Empowering Your Journey with Innovative Solutions and Unmatched Expertise.
                        </p>
                        <Link
                            to="/courses"
                            className="relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white transition-all rounded-md focus:outline-none focus:ring mt-5  hover:opacity-90 group">
                            <span
                                className="absolute inset-0 w-full h-full transition-transform transform rounded-md"
                                style={{
                                    backgroundImage: `url(${buttonImage})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    transition: 'transform 0.3s ease-in-out',
                                    zIndex: 0,
                                }}
                            ></span>
                            <span className="relative z-10 p-7 text-xl font-bold text-white transition-transform transform group-hover:scale-50 group-hover:text-rose-500">
                                EXPLORE
                            </span>
                        </Link>


                        {/* Stats Section */}
                        <div className="md:flex justify-between ">
                            <div className="flex items-center gap-4 p-3 md:p-5 bg-neutral-700 bg-opacity-50 rounded-3xl border-2 hover:border-[#5FEAC7] border-white hover:bg-[#5FEAC7] hover:bg-opacity-20 transition-colors duration-500 group">
                                <div className="flex gap-3 lg:gap-4 xl:gap-5 2xl:gap-6 lg:px-10">
                                    <div className="text-center">
                                        <p className="text-3xl lg:text-4xl xl:text-4xl 2xl:text-6xl ">05+</p>
                                        <p>Available Program</p>
                                    </div>
                                    <div className="border-r-2"></div>
                                    <div className="text-center ">
                                        <p className="text-3xl lg:text-4xl xl:text-4xl 2xl:text-6xl">21+</p>
                                        <p>Active Module</p>
                                    </div>
                                    <div className="border-r-2"></div>
                                    <div className="text-center">
                                        <p className="text-3xl lg:text-4xl xl:text-4xl 2xl:text-6xl">100+</p>
                                        <p>Satisfied Students</p>
                                    </div>
                                </div>

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
