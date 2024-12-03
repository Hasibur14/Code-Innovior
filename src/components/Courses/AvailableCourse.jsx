import { useState, useEffect } from "react";
import { FaPhone } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { FaCalendarCheck } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";



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
        <div className="bg-gradient-to-b from-black to-blue-900 text-white py-10 px-4">
            <div className="container mx-auto">
                {/* Content Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Left Text Section */}
                    <div className="md:w-1/2 text-left">
                        <h2 className="text-2xl md:text-5xl lg:text-7xl font-mono font-extrabold">CodeInnovior <br /> Available Course </h2>
                        <p className="text-lg font-mono font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#CAFFF1] to-[#05B689]">
                            Our goal is to offer tailored learning experiences and empower
                            individuals to launch their careers with confidence.
                        </p>

                        <div className="md:flex gap-10">
                            <button class="relative inline-block px-4 py-2 font-medium group">
                                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-blue-800 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span class="absolute inset-0 w-full h-full bg-blue-500 border-2 border-blue-500 group-hover:bg-blue-500"></span>
                                <span class="relative flex gap-2 text-white py-3">
                                    <FaCalendarCheck className="text-xl" />
                                    Book A Free Class
                                </span>
                            </button>
                            <button class="relative inline-block px-4 py-2 font-medium group">
                                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-neutral-300 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span class="absolute inset-0 w-full h-full bg-white border-2 border-neutral-300 group-hover:bg-white"></span>
                                <span class="relative text-black flex gap-2 py-3">
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
                                className="w-full h-80 object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Location Section */}
                <div className="md:flex justify-between mt-10">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Our Location:</h3>
                        <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-full">
                            <div className="text-2xl">
                                <FaLocationDot className="bg-gray-600 bg-opacity-80 rounded-full w-14 h-14 p-3 " />
                            </div>
                            <div>
                                <p className="text-lg">Mirpur DOHS, Dhaka</p>
                                <p className="text-sm">House: 774, Road: 11, Avenue: 02</p>
                            </div>
                        </div>
                    </div>
                    <button
                        className={`flex items-center gap-2  bg-green-500 text-white shadow-lg transition-all duration-1000  ${callButtonExpanded ? "w-96 rounded-l-full rounded-tr-full " : "w-16 h-16 rounded-full justify-center"
                            }`}
                        onClick={() => alert("Call for details")}
                    >
                        <FaPhone />
                        {callButtonExpanded && <span>Call for Details</span>}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AvailableCourse;
