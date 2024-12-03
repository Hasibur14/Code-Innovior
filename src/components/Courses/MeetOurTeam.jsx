import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Correct import for Swiper CSS
import 'swiper/css/pagination'; // Optionally import specific Swiper components (e.g., Pagination, Navigation)

const MeetOurTeam = () => {
    const [activeTab, setActiveTab] = useState("UI/UX Design");

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
        "UI/UX Design": [
            { name: "Tarif", img: "https://via.placeholder.com/150" },
            { name: "Supto", img: "https://via.placeholder.com/150" },
        ],
        "Graphics Design": [
            { name: "John", img: "https://via.placeholder.com/150" },
            { name: "Doe", img: "https://via.placeholder.com/150" },
        ],
        "Web Development": [
            { name: "Alice", img: "https://via.placeholder.com/150" },
            { name: "Bob", img: "https://via.placeholder.com/150" },
        ],
        "Cyber Security": [
            { name: "Charlie", img: "https://via.placeholder.com/150" },
            { name: "Dave", img: "https://via.placeholder.com/150" },
        ],
    };

    return (
        <div className="bg-gray-900">
            <div className="container mx-auto max-w-7xl">
                <div className=" text-white p-6">
                    {/* Tab Buttons with Swiper Slider */}
                    <Swiper
                       spaceBetween={10}
                       slidesPerView={4} // Display only one slide at a time
                       centeredSlides={true}
                       className="mb-6"
                    >
                        {tabs.map((tab) => (
                            <SwiperSlide key={tab.title}>
                                <button
                                    onClick={() => setActiveTab(tab.title)}
                                    className={`flex gap-3 px-4 py-2 rounded-full ${activeTab === tab.title
                                        ? "bg-opacity-50 rounded-full border-2 border-[#5FEAC7] bg-[#5FEAC7] text-[#41e97e]"
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
                    <div className="grid grid-cols-2 gap-4">
                        {content[activeTab].map((item) => (
                            <div
                                key={item.name}
                                className="bg-green-800 p-4 rounded-lg text-center"
                            >
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="w-24 h-24 mx-auto rounded-full mb-2"
                                />
                                <p className="text-xl font-bold">{item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MeetOurTeam;
