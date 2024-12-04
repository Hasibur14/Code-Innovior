import { useState, useEffect } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { GoDownload } from "react-icons/go";
import { FaCalendarCheck } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import bgImg from "../../assets/Courses/available.png"

const AvailableCourse = () => {
    const [callButtonExpanded, setCallButtonExpanded] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        "https://i.postimg.cc/JtwYyJmV/257230903-2133476323485317-8240935452027283122-n.jpg",
        "https://i.postimg.cc/0jKH2nT0/127822170-1857948821038070-6680528216098756630-n.jpg",
        "https://i.postimg.cc/CMZFqgYm/266828217-2154168561416093-427263982243122483-n.jpg",
    ];

    // Auto-slider for images
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCallButtonExpanded((prev) => !prev);
        }, 2000); // Toggle every 2 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="bg-cover bg-center text-white  px-4 font-mondo py-10 md:py-20 "
            style={{
                backgroundImage: `url(${bgImg})`,
            }}
        >
            <div className=" py-10 px-4 rounded-lg shadow-lg">
                <div className="container mx-auto lg:max-w-7xl">
                    {/* Content Section */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        {/* Left Text Section */}
                        <div className="md:w-1/2 text-left space-y-7">
                            <h2 className="text-2xl md:text-5xl lg:text-6xl font-mono font-extrabold">
                                CodeInnovior <br /> Available Course
                            </h2>
                            <p className="text-xl font-mono font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#5ddfbd] to-[#02c393]">
                                Our goal is to offer tailored learning experiences and empower
                                individuals to launch their careers with confidence.
                            </p>

                            <div className="md:flex gap-10">
                                <button className="relative inline-block px-4 py-2 font-medium group">
                                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-blue-800 group-hover:-translate-x-0 group-hover:-translate-y-0 rounded"></span>
                                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#2e60ac] to-[#0d72d2] border-none  group-hover:bg-blue-500 rounded"></span>
                                    <span className="relative flex gap-2 text-white py-3">
                                        <FaCalendarCheck className="text-xl" />
                                        Book A Free Class
                                    </span>
                                </button>
                                <button className="relative inline-block px-4 py-2 font-medium group">
                                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-neutral-400 group-hover:-translate-x-0 group-hover:-translate-y-0  rounded"></span>
                                    <span className="absolute inset-0 w-full h-full bg-white border-2 border-neutral-300 group-hover:bg-white  rounded"></span>
                                    <span className="relative text-black flex gap-2 py-3">
                                        <GoDownload className="text-xl" />
                                        Download Curriculum
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Right Image Slider */}
                        <div className="md:w-1/2">
                            <div className="w-full overflow-hidden rounded-lg shadow-lg">
                                <img
                                    src={images[currentImageIndex]}
                                    alt="Slider"
                                    className="w-full h-96 object-cover bg-gray-700 bg-opacity-50 p-5 rounded-2xl "
                                />
                            </div>
                        </div>
                    </div>

                    {/* Location Section */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 mt-8 font-mono">Our Location:</h3>
                        <div className="md:flex justify-between mt-10">
                            <a
                                href="https://maps.app.goo.gl/vhymLJZ8zbAjU4CC6"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="View Location on Google Maps"
                                className="transition-all duration-500"
                            >
                                <div className="flex items-center gap-4 p-6 bg-neutral-700 bg-opacity-50 rounded-full border-2 hover:border-[#5FEAC7] border-white hover:bg-[#5FEAC7] hover:bg-opacity-20">
                                    <div className="text-2xl">
                                        <FaLocationDot className="bg-gray-600 bg-opacity-80 rounded-full w-14 h-14 p-4" />
                                    </div>
                                    <div>
                                        <p className="text-lg font-bold">Mirpur DOHS, Dhaka</p>
                                        <p className="text-sm">House: 774, Road: 11, Avenue: 02</p>
                                    </div>
                                    <FaLongArrowAltRight className="text-2xl ml-5" />
                                </div>
                            </a>

                            <button
                                className={`flex items-center justify-center gap-2 text-white shadow-lg transition-all duration-1000 ${callButtonExpanded
                                    ? "w-60 h-20 rounded-l-full rounded-tr-full bg-gradient-to-r from-green-400 to-green-600"
                                    : "w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-green-600"
                                    }`}
                                onClick={() => alert("Call for details")}
                            >
                                <BiSolidPhoneCall className="text-2xl" />
                                {callButtonExpanded && <span className="text-center text-xl font-bold font-mondo">Call for Details</span>}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AvailableCourse;
