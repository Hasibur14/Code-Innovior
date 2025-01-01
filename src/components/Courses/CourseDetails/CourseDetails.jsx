import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { LiaHandPointRight } from "react-icons/lia";
import {
    FaBook, FaVideo, FaClipboardList, FaFileAlt,
    FaUsers, FaCertificate, FaBriefcase, FaLaptopCode,
    FaMobileAlt, FaCodeBranch, FaCogs
} from "react-icons/fa";
import { RiGraduationCapFill } from "react-icons/ri";
import courseDetailsBg from "../../../assets/Courses/Ellipse.png";

const CourseDetails = () => {
    const courseData = useLoaderData();
    const { title, image, courseOutcomes, price, subtitle } = courseData;

    return (
        <div
            className="text-white py-32 font-mondo"
            style={{
                backgroundImage: `url(${courseDetailsBg})`,
                backgroundPosition: "cover",
                backgroundRepeat: "repeat",
            }}
        >
            {/* Course Content and Pricing Section */}
            <div className="container mx-auto max-w-7xl px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Course Content */}
                <div className="col-span-2 space-y-5">
                    <h4>
                        Course /{" "}
                        <span className="font-semibold text-[#5FEAC7] font-mono">{title}</span>
                    </h4>

                    <button className="flex items-center gap-4 px-4 py-1 mt-10 rounded-full bg-[rgba(99,236,220,0.2)] transition-all duration-300 backdrop-blur-sm group">
                        <div className="w-8 h-8 md:w-10 md:h-10 p-2 rounded-full bg-[rgba(75,160,177,0.2)] backdrop-blur-xl group-hover:animate-pulse">
                            <img
                                src="https://i.postimg.cc/QxCQYfNQ/ui-ux-1.png"
                                alt="course"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <h3 className="text-base md:text-lg font-bold text-[#2FFFCA]">
                            4 Month Duration
                        </h3>
                    </button>

                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-mono">{subtitle}</h1>

                    <div className="flex gap-10">
                        <div className="rating text-lg">
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400 mr-2"
                            />
                            <p>4.9 (1595 ratings)</p>
                        </div>
                        <div className="flex gap-3">
                            <RiGraduationCapFill className="text-2xl" />
                            <p className="text-lg">300+ Students</p>
                        </div>
                    </div>

                    {/* Program Overview */}
                    <div className="bg-[#FFFFFF] backdrop-blur-sm bg-opacity-5 p-6 rounded-lg space-y-4">
                        <h3 className="badge badge-warning text-lg font-mono">{title}</h3>
                        <h4 className="text-lg font-semibold">PROGRAM OVERVIEW</h4>
                        <p className="text-lg">
                            This course covers a comprehensive range of topics, targeting different expertise levels (beginner, intermediate, or advanced).
                        </p>
                        <h2 className="text-2xl font-semibold mb-4 text-[#5FEAC7]">Course Content</h2>
                        <div className="divide-y divide-gray-700">
                            {courseOutcomes?.map((content, index) => (
                                <details
                                    key={index}
                                    className="py-4 cursor-pointer group hover:bg-[#13483b] px-4 rounded-md"
                                >
                                    <summary className="flex justify-between items-center text-lg font-medium group-open:text-orange-500">
                                        Mission {content.mission}: {content.title}
                                        <span className="ml-4">+</span>
                                    </summary>
                                    <div className="mt-2 pl-4 text-white">
                                        {Array.isArray(content.description) && (
                                            <ul>
                                                {content.description.map((point, idx) => (
                                                    <li key={idx} className="flex gap-2">
                                                        <LiaHandPointRight className="text-lg text-cyan-300" />
                                                        {point}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Pricing Section */}
                <div>
                    <div className="bg-[#FFFFFF] backdrop-blur-sm bg-opacity-5 p-6 pb-10 rounded-lg text-center">
                        <img src={image} alt="Course Banner" className="w-full rounded-md mb-6" />
                        <h3 className="text-2xl font-semibold mb-4">{price} BDT</h3>
                        <Link
                            to="https://docs.google.com/forms/d/e/1FAIpQLScaznBotsVDotTS535do76sKZDcEcKXdhpPL9T5BQozJiEDqw/viewform?usp=sharing"
                            className="bg-blue-500 px-7 py-4 rounded-md text-white hover:bg-blue-600"
                        >
                            Enroll Now
                        </Link>
                        <div className="mt-10">
                            <h4 className="text-center text-[#5FEAC7] font-semibold text-lg mb-4">
                                This course includes
                            </h4>
                            <ul className="space-y-3">
                                {[
                                    { icon: FaBook, text: "8 Modules Of Comprehensive Content." },
                                    { icon: FaVideo, text: "3 Live Classes Per Week." },
                                    { icon: FaClipboardList, text: "Daily And Weekly Assessments." },
                                    { icon: FaFileAlt, text: "Chapter-Wise Lecture Sheets." },
                                    { icon: FaUsers, text: "Lifetime Community Support." },
                                    { icon: FaCertificate, text: "Industry-Recognized Certification." },
                                    { icon: FaBriefcase, text: "Exclusive Internship Opportunities." },
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center">
                                        <item.icon className="text-lg mr-4 text-white" />
                                        <span>{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8">
                                <h4 className="text-center text-[#5FEAC7] font-semibold text-lg mb-2">
                                    Hands-On Sessions
                                </h4>
                                <ul className="space-y-3">
                                    {[
                                        { icon: FaLaptopCode, text: "Building A Web Application." },
                                        { icon: FaMobileAlt, text: "Creating A Mobile App." },
                                        { icon: FaCodeBranch, text: "Version Control & Collaborative Development With Git." },
                                        { icon: FaCogs, text: "Automating Development With CI/CD." },
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center">
                                            <item.icon className="text-lg mr-4 text-white" />
                                            <span>{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between mt-2">
                        <p>To learn more about this Course</p>
                        <p className="text-[#5FEAC7] underline">call (01844-185480)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;
