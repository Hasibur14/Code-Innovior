import React from 'react';
import bgImg from '../../../assets/about/about.png';
import { FaLocationDot } from 'react-icons/fa6';
import { FaLongArrowAltRight } from 'react-icons/fa';

const AboutUs = () => {
    return (
        <div
            className="bg-cover bg-center text-white px-4 font-mondo py-10 md:py-28"
            style={{ backgroundImage: `url(${bgImg})` }}
        >
            <div className="py-10 px-4 rounded-lg shadow-lg mt-14">
                <div className="container mx-auto lg:max-w-7xl">
                    {/* Content Section */}
                    <div className="flex flex-col items-center text-center space-y-7">
                        <h2 className="text-2xl md:text-5xl lg:text-6xl font-mono font-extrabold">
                            About Us !
                        </h2>
                        <p className="text-xl font-mono font-bold mb-6 text-white">
                            Codeinnovior is dedicated to equipping students and kids with essential skills for the future. Our programs focus on bridging educational gaps and fostering growth in technology, innovation, and personal development. By providing hands-on learning opportunities, we prepare the next generation to thrive academically, professionally, and socially, empowering them to succeed in an ever-evolving world.
                        </p>
                    </div>

                    {/* Location Section */}
                    <div className="mt-10 flex justify-center">
                        <a
                            href="https://maps.app.goo.gl/vhymLJZ8zbAjU4CC6"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="View Location on Google Maps"
                            className="transition-all duration-500"
                        >
                            <div className="flex items-center gap-4 p-6 bg-neutral-700 bg-opacity-50 rounded-full border-2 hover:border-[#5FEAC7] border-white hover:bg-[#5FEAC7] hover:bg-opacity-20 group">
                                <div className="text-2xl">
                                    <FaLocationDot className="bg-gray-600 group-hover:bg-[#22805f] bg-opacity-80 rounded-full w-14 h-14 p-4" />
                                </div>
                                <div className="text-center">
                                    <p className="text-lg font-bold">Mirpur DOHS, Dhaka</p>
                                    <p className="text-sm">House: 774, Road: 11, Avenue: 02</p>
                                </div>
                                <FaLongArrowAltRight className="text-3xl ml-5 animate-pulse" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
