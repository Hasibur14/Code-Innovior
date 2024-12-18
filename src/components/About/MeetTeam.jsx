import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa6";

const MeetTeam = () => {

    const content = [
        {
            name: "Jhumur Chakma",
            nickName: "Jhumur",
            img: "https://i.postimg.cc/1tbqfWwy/file-1.png",
            designation: "Team Leader",
            social: {
                fb: "https://facebook.com",
                linkedin: "https://linkedin.com",
                github: "https://github.com"
            }
        },
        {
            name: "Mizanor Rahman Mizan",
            nickName: "Mizan",
            img: "https://i.postimg.cc/VvSJwXV2/mizan.png",
            designation: "Full-Stack Developer",
            social: {
                fb: "https://facebook.com",
                linkedin: "https://linkedin.com",
                github: "https://github.com"
            }
        },
        {
            name: "Mahabub Jamil",
            nickName: "Mahbub",
            img: "https://i.postimg.cc/tg062NVw/IMG-20240714-031040-049-removebg-preview-1-1.png",
            designation: "Business Development & Strategy Analyst",
            social: {
                fb: "https://facebook.com",
                linkedin: "https://linkedin.com",
                github: "https://github.com"
            }
        },
        {
            name: "Hasibur Rahman Hasib",
            nickName: "Hasib",
            img: "https://i.postimg.cc/0jW2zjLD/hasib2.png",
            designation: "Full-Stack Developer",
            social: {
                fb: "https://facebook.com",
                linkedin: "https://linkedin.com",
                github: "https://github.com"
            }
        },
        {
            name: "Daud Supto",
            nickName: "Supto",
            img: "https://i.postimg.cc/0yS7D1Zh/supto.png",
            designation: "UI/UX Designer",
            social: {
                fb: "https://facebook.com",
                linkedin: "https://linkedin.com",
                github: "https://github.com"
            }
        },
        {
            name: "Tannim Rahman Tanim",
            nickName: "Tanim",
            img: "https://i.postimg.cc/L8gftbhj/IMG-20240714-031040-049-removebg-preview-1-2.png",
            designation: "Cyber Security Analyst",
            social: {
                fb: "https://facebook.com",
                linkedin: "https://linkedin.com",
                github: "https://github.com"
            }
        },
        {
            name: "Tarif Khan",
            nickName: "Tarif",
            img: "https://i.postimg.cc/FsB3J4F9/IMG-20240714-031040-049-removebg-preview-1-3.png",
            designation: "UI/UX Designer",
            social: {
                fb: "https://facebook.com",
                linkedin: "https://linkedin.com",
                github: "https://github.com"
            }
        },
        {
            name: "Raddia Akter Hride",
            nickName: "Hride",
            img: "https://i.postimg.cc/jC0SrmNJ/hridhy.png",
            designation: "Graphic Artist",
            social: {
                fb: "https://facebook.com",
                linkedin: "https://linkedin.com",
                github: "https://github.com"
            }
        },
    ];

    return (
        <div className="bg-gradient-to-t from-[#120c1f] to-[#0a050d] font-mondo py-5 md:py-20 mx-4 md:mx-0">
            <div className="container mx-auto mt-20">
                <div className="w-full flex items-center justify-center my-20">
                    <h2 className="text-white text-2xl md:text-4xl lg:text-6xl uppercase text-center font-mono">
                        <span className="text-rose-500">Meet Our Team: </span>
                        The <br /> Experts Across Every Department
                    </h2>
                </div>
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">
                        {content.map((item) => (
                            <div
                                key={item.name}
                                className="relative bg-gradient-to-t from-[#160f25] to-[#1e493e] rounded-lg overflow-hidden group">
                                <h1
                                    className="font-sans text-2xl uppercase text-center opacity-30 group-hover:opacity-0 mt-5 transition-all duration-1000"
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

                                {/* Hover Overlay */}
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-[#3c9786] to-[#011c15] opacity-0 group-hover:opacity-90 transition duration-500"
                                    style={{
                                        background:
                                            "linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 229, 174, 0.63) 100%)",
                                    }}
                                ></div>

                                {/* Content */}
                                <div className="absolute inset-0 flex flex-col items-center justify-end opacity-0 group-hover:opacity-100 transition duration-500">
                                    <h4 className="text-2xl text-white font-bold transform translate-y-10 group-hover:translate-y-0 transition duration-500">
                                        {item.name}
                                    </h4>
                                    <p className="text-lg text-gray-200 mb-3 transform translate-y-10 group-hover:translate-y-0 transition duration-500">
                                        {item.designation}
                                    </p>
                                    <div className="flex space-x-4 mb-4">
                                        <a
                                            href={item.social.fb}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white hover:text-rose-600"
                                        >
                                            <FaFacebookF />
                                        </a>
                                        <a
                                            href={item.social.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white hover:text-rose-600"
                                        >
                                            <FaLinkedinIn />
                                        </a>
                                        <a
                                            href={item.social.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white hover:text-rose-600"
                                        >
                                            <FaGithub />
                                        </a>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MeetTeam;
