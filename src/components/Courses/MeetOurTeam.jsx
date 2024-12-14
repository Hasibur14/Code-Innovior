import React, { useState } from "react";
import { FaFacebookF, FaLinkedinIn, } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { TfiArrowCircleRight } from "react-icons/tfi";
import { TfiArrowCircleLeft } from "react-icons/tfi";

const MeetOurTeam = () => {
    const [activeTab, setActiveTab] = useState("Web Development");
    const swiperRef = React.useRef(null);


    const handlePrevSlide = () => {
        swiperRef.current?.slidePrev();
    };

    const handleNextSlide = () => {
        swiperRef.current?.slideNext();
    };

    // Tab data
    const tabs = [
        {
            title: "Web Development",
            description: "Build Your Career",
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
            description: "Best in Business",
            image: "https://i.postimg.cc/gjGCYzpq/cyber-security.png"
        },
        {
            title: "Business Development",
            description: "",
            image: "https://i.postimg.cc/wBZfMvJd/code.png"
        },
        {
            title: "SQA",
            description: "Best in Business",
            image: "https://i.postimg.cc/TY7z6v4g/consent.png"
        },
        {
            title: "HR & General",
            description: "Best in Business",
            image: "https://i.postimg.cc/wBZfMvJd/code.png"
        },
    ];

    // Tab content data
    const content = {
        "Web Development": [
            {
                name: "Mizanor Rahman Mizan",
                nickName: "Mizan",
                img: "https://i.postimg.cc/XYhfkrBX/file.png",
                designation: "Full-Stack Developer",
                fb: "https://facebook.com",
                linkedin: "https://linkedin.com",
                github: "https://github.com"
            },
            {
                name: "Hasibur Rahman Hasib",
                nickName: "Hasib",
                img: "https://i.postimg.cc/KYQkryrq/IMG-20240714-031040-049-removebg-preview-1.png",
                designation: "Full-Stack Developer",
                fb: "https://facebook.com",
                linkedin: "https://linkedin.com",
                github: "https://github.com"
            },
        ],
        "UI/UX Design": [
            {
                name: "Supto",
                nickName: "Supto",
                img: "https://i.postimg.cc/L8X7sQ1f/removal-ai-3d5405ee-684d-4749-ac8b-1ad33ce41f0f-photo-gallery-img-02.png",
                designation: "UI/UX Designer",
                fb: "https://facebook.com",
                linkedin: "https://linkedin.com",
                github: "https://github.com"
            },
            {
                name: "Tarif Khan",
                nickName: "Tarif",
                img: "https://i.postimg.cc/FsB3J4F9/IMG-20240714-031040-049-removebg-preview-1-3.png",
                designation: "UX/UI Designer",
                fb: "https://facebook.com",
                linkedin: "https://linkedin.com",
                github: "https://github.com"
            },
        ],
        "Graphics Design": [
            {
                name: "Ridhi",
                nickName: "Ridhi",
                img: "https://i.postimg.cc/L8X7sQ1f/removal-ai-3d5405ee-684d-4749-ac8b-1ad33ce41f0f-photo-gallery-img-02.png",
                designation: "Graphic Artist",
                fb: "https://facebook.com",
                linkedin: "https://linkedin.com",
                github: "https://github.com"
            },
        ],
        "Cyber Security": [
            {
                name: "Tasnim Tanim",
                nickName: "Tanim",
                img: "https://i.postimg.cc/L8gftbhj/IMG-20240714-031040-049-removebg-preview-1-2.png",
                designation: "Cyber Security Analyst",
                fb: "https://facebook.com",
                linkedin: "https://linkedin.com",
                github: "https://github.com"
            },
        ],
        "SQA": [
            {
                name: "Mahabub Jamil",
                nickName: "Mahbub",
                img: "https://i.postimg.cc/tg062NVw/IMG-20240714-031040-049-removebg-preview-1-1.png",
                designation: "SQA",
                fb: "https://facebook.com",
                linkedin: "https://linkedin.com",
                github: "https://github.com"
            },
            {
                name: "Supto",
                nickName: "Supto",
                img: "https://i.postimg.cc/L8X7sQ1f/removal-ai-3d5405ee-684d-4749-ac8b-1ad33ce41f0f-photo-gallery-img-02.png",
                designation: "SQA",
                fb: "https://facebook.com",
                linkedin: "https://linkedin.com",
                github: "https://github.com"
            },

        ],
        "HR & General": [
            {
                name: "Jhumur Chakma",
                nickName: "Jhumur",
                img: "https://i.ibb.co.com/F8hLYMz/file-1.png",
                designation: "HR & General",
                fb: "https://facebook.com",
                linkedin: "https://linkedin.com",
                github: "https://github.com"
            },
        ],
        "Business Development": [
            {
                name: "Mahabub Jamil",
                nickName: "Mahbub",
                img: "https://i.postimg.cc/tg062NVw/IMG-20240714-031040-049-removebg-preview-1-1.png",
                designation: "Business Devlopment & Strategy Analyst",
                fb: "https://facebook.com",
                linkedin: "https://linkedin.com",
                github: "https://github.com"
            }

        ],
    };


    return (
        <div className="bg-gradient-to-t from-[#120c1f] to-[#0a050d] font-mondo py-5 md:py-28">

            <div className="container mx-auto mt-20">
                <div className="w-full flex items-center justify-center my-20">
                    <h2
                        className="text-white text-2xl md:text-4xl lg:text-6xl  uppercase  text-center font-mono">
                        <span className="text-rose-500">Meet Our Team: </span>
                        The <br /> Experts Across Every Depertment
                    </h2>
                </div>
                <div className="container mx-auto max-w-7xl">
                    <div className="text-white p-4 md:p-6">
                        <div className="flex gap-2 md:gap-5">
                            {/* Tab Buttons with Swiper Slider */}
                            <button
                                className="group hover:scale-110 transition-all duration-300 opacity-70"
                                onClick={handlePrevSlide}>
                                <TfiArrowCircleLeft className="text-4xl group-hover:animate-pulse" />
                            </button>

                            <Swiper
                                spaceBetween={30}
                                onSwiper={(swiper) => (swiperRef.current = swiper)}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 1,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                    },
                                }}
                            >
                                {tabs.map((tab) => (
                                    <SwiperSlide key={tab.title}>
                                        <button
                                            onClick={() => setActiveTab(tab.title)}
                                            className={`flex w-full gap-8 px-4 py-2 rounded-full lg:h-20 hover:border-[#5FEAC7] transition-all duration-1000 ${activeTab === tab.title
                                                ? "bg-opacity-50 rounded-full border-2 border-[#5FEAC7] bg-[#5FEAC7] text-[#3affa3]"
                                                : "bg-gray-700 text-gray-300 bg-opacity-30 border-2"
                                                }`}
                                        >
                                            <div className="text-2xl">
                                                <img
                                                    className={`ml-3 ${activeTab === tab.title
                                                        ? "bg-[#3affa3] bg-opacity-20 rounded-full w-14 h-14 p-4"
                                                        : "bg-gray-600 bg-opacity-80 rounded-full w-14 h-14 p-4"
                                                        }`}
                                                    src={tab.image}
                                                    alt={tab.title}
                                                />
                                            </div>
                                            <div>
                                                <span className="text-xl font-semibold">{tab.title}</span>
                                                <span className="block text-sm">{tab.description}</span>
                                            </div>
                                        </button>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <button
                                className="group hover:scale-110 transition-all duration-300 opacity-70"
                                onClick={handleNextSlide}>
                                <TfiArrowCircleRight className="text-4xl group-hover:animate-pulse" />
                            </button>
                        </div>
                        {/* Tab Content */}
                        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-24 lg:mx-48 mt-24">
                            {content[activeTab].map((item) => (
                                <div
                                    key={item.name}
                                    className="relative bg-gradient-to-t from-[#160f25] to-[#1e493e] rounded-lg overflow-hidden group"
                                >
                                    <h1
                                        className="font-sans text-2xl uppercase text-center opacity-30 group-hover:opacity-0 transition-all duration-00 mt-5"
                                        style={{
                                            fontSize: "85px",
                                            fontWeight: 900,
                                            color: "transparent",
                                            WebkitTextStroke: "3px #ffffff",
                                        }}
                                    >
                                        {item.nickName}
                                    </h1>
                                    {/* Image */}
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="w-full h-[440px] mx-auto rounded transition duration-500 transform group-hover:scale-105"
                                    />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-[#3c9786] to-[#1e493e] opacity-0 group-hover:opacity-90 transition duration-500"
                                        style={{
                                            background: "linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 229, 174, 0.63) 100%)",
                                        }}
                                    ></div>
                                    {/* Content */}
                                    <div className="absolute inset-0 flex bottom-10 flex-col items-center justify-end opacity-0 group-hover:opacity-100 transition duration-500">
                                        <h4 className="text-2xl font-bold transform translate-y-10 group-hover:translate-y-0 transition duration-500">
                                            {item.name}
                                        </h4>
                                        <p className="text-lg text-gray-200 mb-3 transform translate-y-10 group-hover:translate-y-0 transition duration-500">
                                            {item.designation}
                                        </p>
                                        {/* Social Media Icons */}
                                        <div className="flex justify-center space-x-4 transform translate-y-10 group-hover:translate-y-0 transition duration-500">
                                            <a
                                                href={item.fb}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="Follow us on Facebook"
                                            >
                                                <FaFacebookF className="text-2xl p-1 rounded bg-white text-[#05B689] hover:bg-[#05B689] hover:text-white transition duration-500" />
                                            </a>
                                            <a
                                                href={item.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="Follow us on LinkedIn"
                                            >
                                                <FaLinkedinIn className="text-2xl p-1 rounded bg-white text-[#05B689] hover:bg-[#05B689] hover:text-white transition duration-500" />
                                            </a>
                                            <a
                                                href="https://twitter.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="Follow us on Twitter"
                                            >
                                                <FaGithub className="text-2xl p-1 rounded bg-white text-[#05B689] hover:bg-[#05B689] hover:text-white transition duration-500" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div >

        </div >
    );
};

export default MeetOurTeam;
