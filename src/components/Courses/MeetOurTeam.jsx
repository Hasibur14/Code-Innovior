import React, { useState } from "react";
import { FaFacebookF, FaLinkedinIn, } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const MeetOurTeam = () => {
    const [activeTab, setActiveTab] = useState("Web Development");

    // Tab data
    const tabs = [
        {
            title: "Web Development",
            description: "Robust Solutions",
            image: "https://i.postimg.cc/wBZfMvJd/code.png"
        },
        {
            title: "UI/UX Design",
            description: "Best in Business",
            image: "https://i.postimg.cc/wBZfMvJd/code.png"
        },
        {
            title: "Graphics Design",
            description: "Creative Works",
            image: "https://i.postimg.cc/wBZfMvJd/code.png"
        },
        {
            title: "Cyber Security",
            description: "Mobile First",
            image: "https://i.postimg.cc/wBZfMvJd/code.png"
        },
        {
            title: "Business Development",
            description: "Mobile First",
            image: "https://i.postimg.cc/wBZfMvJd/code.png"
        },
        {
            title: "SQA",
            description: "Mobile First",
            image: "https://i.postimg.cc/wBZfMvJd/code.png"
        },
    ];

    // Tab content data
    const content = {
        "Web Development": [
            {
                name: "Mizanor Rahman Mizan",
                img: "https://i.postimg.cc/8zJsjBjn/photo-gallery-img-02.jpg",
                designation: "Full-Stack Developer",
                fb: "https://facebook.com",
                linkedin: "https://linkedin.com",
                github: "https://github.com"
            },
            {
                name: "Hasibur Rahman Hasib",
                img: "https://i.postimg.cc/8zJsjBjn/photo-gallery-img-02.jpg",
                designation: "Full-Stack Developer",
                fb: "https://facebook.com",
                linkedin: "https://linkedin.com",
                github: "https://github.com"
            },
        ],
        "UI/UX Design": [
            {
                name: "Tarif",
                img: "https://i.postimg.cc/8zJsjBjn/photo-gallery-img-02.jpg",
                designation: "UI Designer",
                fb: "https://facebook.com",
                linkedin: "https://linkedin.com",
                github: "https://github.com"
            },
            {
                name: "Supto",
                img: "https://i.postimg.cc/8zJsjBjn/photo-gallery-img-02.jpg",
                designation: "UX Designer",
                fb: "https://facebook.com",
                linkedin: "https://linkedin.com",
                github: "https://github.com"
            },
        ],
        "Graphics Design": [
            {
                name: "John",
                img: "https://i.postimg.cc/8zJsjBjn/photo-gallery-img-02.jpg",
                designation: "Graphic Artist",
                fb: "https://facebook.com",
                linkedin: "https://linkedin.com",
                github: "https://github.com"
            },
            {
                name: "Doe",
                img: "https://i.postimg.cc/8zJsjBjn/photo-gallery-img-02.jpg",
                designation: "Graphic Designer",
                fb: "https://facebook.com",
                linkedin: "https://linkedin.com",
                github: "https://github.com"
            },
        ],
        "Cyber Security": [
            {
                name: "Tasnim Tanim",
                img: "https://i.postimg.cc/8zJsjBjn/photo-gallery-img-02.jpg",
                designation: "Cyber Security Analyst",
                fb: "https://facebook.com",
                linkedin: "https://linkedin.com",
                github: "https://github.com"
            },
            {
                name: "Dave",
                img: "https://i.postimg.cc/8zJsjBjn/photo-gallery-img-02.jpg",
                designation: "Security Engineer",
                fb: "https://facebook.com",
                linkedin: "https://linkedin.com",
                github: "https://github.com"
            },
        ],
    };


    return (
        <div className="bg-gradient-to-t from-[#1e493e] to-[#000403] font-mondo">
            <div className="container mx-auto mt-20">
                <div className="w-full flex items-center justify-center my-20">
                    <h2
                        className="text-white text-2xl md:text-4xl lg:text-6xl  uppercase  text-center font-mono">
                        <span className="text-rose-500">Meet Our Team: </span>
                        The <br /> Experts Across Every Depertment_
                    </h2>
                </div>
                <div className="container mx-auto max-w-7xl">
                    <div className=" text-white p-6">
                        {/* Tab Buttons with Swiper Slider */}
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={3} // Display only one slide at a time

                            className="mb-6"
                        >
                            {tabs.map((tab) => (
                                <SwiperSlide key={tab.title}>
                                    <button
                                        onClick={() => setActiveTab(tab.title)}
                                        className={`flex w-full gap-3 px-4 py-2 rounded-full ${activeTab === tab.title
                                            ? "bg-opacity-50 rounded-full border-2 border-[#5FEAC7] bg-[#5FEAC7] text-[#3affa3]"
                                            : "bg-gray-700 text-gray-300 bg-opacity-50 border-2"
                                            }`}
                                    >
                                        <div className="text-2xl">
                                            <img
                                                className="bg-gray-600 bg-opacity-80 rounded-full w-14 h-14 p-4"
                                                src={tab.image}
                                                alt={tab.title}
                                            />
                                        </div>
                                        <div>
                                            <span className="text-xl">{tab.title}</span>
                                            <span className="block text-sm">{tab.description}</span>
                                        </div>
                                    </button>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Tab Content */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 lg:mx-40">
                            {content[activeTab].map((item) => (
                                <div
                                    key={item.name}
                                    className="bg-gradient-to-t from-[#050c0a] to-[#1e493e] p-4 rounded-lg text-center"
                                >
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="w-72 h-72 mx-auto rounded mb-2"
                                    />
                                    <p className="text-xl font-bold">{item.name}</p>
                                    <p className="text-sm text-gray-400 mb-3">{item.designation}</p>
                                    <div className="flex justify-center space-x-4">
                                        <a
                                            href={item.fb}
                                            target="_blank" rel="noopener noreferrer"
                                            aria-label="Follow us on Facebook">
                                            <FaFacebookF className="text-2xl p-1 rounded bg-[#05B689] text-white hover:bg-white hover:text-[#05B689] transition duration-500" />
                                        </a>
                                        <a
                                            href={item.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Follow us on LinkedIn">
                                            <FaLinkedinIn className="text-2xl p-1 rounded bg-[#05B689] text-white hover:bg-white hover:text-[#05B689] transition duration-500" />
                                        </a>
                                        <a
                                            href="https://twitter.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Follow us on Twitter">
                                            <FaGithub className="text-2xl p-1 rounded bg-[#05B689] text-white hover:bg-white hover:text-[#05B689] transition duration-500" />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default MeetOurTeam;
