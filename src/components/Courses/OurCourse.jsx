import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCalendarCheck, FaGetPocket } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { SiSololearn } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const OurCourse = () => {
    const wrapperRef = useRef(null);
    const headerRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const cards = cardsRef.current;
        const header = headerRef.current;

        const animation = gsap.timeline();

        cards.forEach((card, index) => {
            if (index > 0) {
                gsap.set(card, { y: index * 500 });
                animation.to(card, { y: 20, duration: index * 0.5, ease: "none" }, 0);
            }
        });

        ScrollTrigger.create({
            trigger: wrapperRef.current,
            start: "top top",
            pin: true,
            end: `+=${cards.length * 500 + header.offsetHeight}`,
            scrub: true,
            animation: animation,
            markers: false,
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    const bgColors = [
        "from-[#5D3619] to-[#261100]",
        "from-[#1D0D64] to-[#0F0620]",
        "from-[#205960] to-[#012327]",
        "from-[#5F0D67] to-[#15061F]",
    ];

    const courseData = [
        {
            title: 'Web Developer',
            subtitle: 'Master Design with Hands-On Projects',
            features: [
                'Hands-on Projects with Expert Mentors (Real World Projects)',
                'Master Design Tools and Trends (Figma, Adobe XD etc.)',
                'User-Centered Design Workshops (wireframing, prototyping, usability testing...)',
                'Career Support and Networking',
            ],
            image: 'https://i.postimg.cc/8P9hxbgT/monitor-1307227-1280.jpg',
        },
        {
            title: 'Cyber Security',
            subtitle: 'Master Design with Hands-On Projects',
            features: [
                'Hands-on Projects with Expert Mentors (Real World Projects)',
                'Master Design Tools and Trends (Figma, Adobe XD etc.)',
                'User-Centered Design Workshops (wireframing, prototyping, usability testing...)',
                'Career Support and Networking',
            ],
            image: 'https://i.postimg.cc/SQw6vrhk/Rectangle-37.png',
        },
        {
            title: 'UI/UX Design',
            subtitle: 'Master Design with Hands-On Projects',
            features: [
                'Hands-on Projects with Expert Mentors (Real World Projects)',
                'Master Design Tools and Trends (Figma, Adobe XD etc.)',
                'User-Centered Design Workshops (wireframing, prototyping, usability testing...)',
                'Career Support and Networking',
            ],
            image: 'https://i.postimg.cc/8P9hxbgT/monitor-1307227-1280.jpg',
        },
        {
            title: 'Graphics Design',
            subtitle: 'Master Design with Hands-On Projects',
            features: [
                'Hands-on Projects with Expert Mentors (Real World Projects)',
                'Master Design Tools and Trends (Figma, Adobe XD etc.)',
                'User-Centered Design Workshops (wireframing, prototyping, usability testing...)',
                'Career Support and Networking',
            ],
            image: 'https://i.postimg.cc/8P9hxbgT/monitor-1307227-1280.jpg',
        },

    ];

    return (
        <div className="bg-gradient-to-t from-[#1e493e] to-[#01110d] font-mondo">
            <div ref={headerRef}></div>
            <div className="container mx-auto max-w-6xl  to-[#012327]">
                <div className="w-full items-center justify-center  mt-28">
                    <h2
                        className="text-2xl md:text-4xl lg:text-6xl  text-rose-500 uppercase  text-center font-mono">
                        our Course_</h2>
                    <p className="text-xl font-mono text-white text-center mt-5">Empowering Minds Through Innovative Learning</p>
                </div>
                <div ref={wrapperRef} className="wrapper relative">
                    <div className="pt-44 grid grid-cols-1 gap-10 space-y-8 h-screen">
                        {courseData.map((item, index) => (
                            <div
                                key={index}
                                ref={(el) => (cardsRef.current[index] = el)}
                                className={`text-white bg-gradient-to-r ${bgColors[index % 4]} bg-opacity-90 rounded-lg  px-14 py-8 w-full absolute left-0`}
                            >
                                {/* Content Section */}
                                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                                    {/* Left Text Section */}
                                    <div className="md:w-1/2 text-left space-y-7">
                                        <h2 className="text-2xl md:text-4xl font-mono font-extrabold">
                                            {item.title}
                                        </h2>
                                        <ul className="space-y-4">
                                            {item.features.map((feature, index) => (
                                                <li key={index} className="flex items-center space-x-3">
                                                    <span className="text-2xl text-yellow-300">
                                                        <FaGetPocket className="text-[16px]" />
                                                    </span>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="md:flex gap-10 space-y-5 md:space-y-0">
                                            <button className="relative inline-block px-4 py-1 font-medium group">
                                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-blue-800 group-hover:-translate-x-0 group-hover:-translate-y-0 rounded-lg"></span>
                                                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#2e60ac] to-[#0d72d2] border-none group-hover:bg-blue-500 rounded-lg"></span>
                                                <span className="relative flex gap-4 text-white py-2">
                                                    <FaCalendarCheck className="text-xl" />
                                                    Book a Free Class
                                                </span>
                                            </button>
                                            <button className="relative inline-block px-4 py-1 font-medium group">
                                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-neutral-400 group-hover:-translate-x-0 group-hover:-translate-y-0 rounded-lg"></span>
                                                <span className="absolute inset-0 w-full h-full bg-white border-2 border-neutral-300 group-hover:bg-white rounded-lg"></span>
                                                <span className="relative text-black flex gap-2 py-2">
                                                    <SiSololearn className="text-lg" />
                                                    Lear More
                                                </span>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Right Image Slider */}
                                    <div className="md:w-1/2">
                                        <div className="w-full overflow-hidden rounded-lg shadow-lg">
                                            <img
                                                src={item.image}
                                                alt="Slider"
                                                className={`w-full h-60 md:h-96 object-cover bg-gradient-to-l ${bgColors[index % 4]}  opacity-70 hover:opacity-100 transition-all duration-500 p-5 rounded-2xl `}
                                            />
                                        </div>
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

export default OurCourse;
