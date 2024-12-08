import React from 'react';
import courseBg from "../../../assets/courseBg.png";
import uiUx from "../../../assets/uiUx.mp4";
import web from "../../../assets/web.mp4";
import webDev from "../../../assets/webDev.mp4";

const OurCourse = () => {
    return (
        <div
            className="relative w-full h-[2150px]"
            style={{
                backgroundImage: `url(${courseBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0">
                <h2 className="font-mono py-10 md:py-20 text-3xl text-center md:text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#CAFFF1] to-[#05B689] z-20">
                    Our Courses_
                </h2>

                <section className="container mx-auto max-w-7xl px-4 md:px-8 mt-24">
                    <div className="space-y-12 md:space-y-20 font-mono">
                        {/* Section Template */}
                        {[
                            {
                                title: 'Complete Web Development',
                                description:
                                    'Kickstart your journey in Web Development. Dive into the world of modern web development focusing on MERN stack technologies.',
                                videoSrc: webDev,
                                gradientFrom: '#003326',
                                gradientTo: '#2EB391',
                                exploreGradient: '#2EB391',
                                successGradient: '#247f68',
                            },
                            {
                                title: 'Professional UI/UX Design',
                                description:
                                    'Design UI/UX professionally using FIGMA. Learn all the essential tools and techniques to become a professional designer.',
                                videoSrc: uiUx,
                                gradientFrom: '#003FB4',
                                gradientTo: '#89B3FF',
                                exploreGradient: '#89B3FF',
                                successGradient: '#003FB4',
                            },
                            {
                                title: 'Advanced Graphic Design',
                                description:
                                    'Explore your creativity and design visually stunning graphics with advanced tools and techniques.',
                                videoSrc: web,
                                gradientFrom: '#4B1A50',
                                gradientTo: '#B300C6',
                                exploreGradient: '#B300C6',
                                successGradient: '#4B1A50',
                            },
                        ].map((course, index) => (
                            <div
                                key={index}
                                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    } gap-6`}
                            >
                                <div className="md:w-1/2 p-6">
                                    <div
                                        className="rounded-3xl p-4 md:p-6"
                                        style={{
                                            background: `linear-gradient(to right, ${course.gradientFrom}, ${course.gradientTo})`,
                                        }}
                                    >
                                        <video
                                            className="w-full h-full rounded-lg"
                                            controls
                                        >
                                            <source
                                                src={course.videoSrc}
                                                type="video/mp4"
                                            />
                                            Your browser does not support the video
                                            tag.
                                        </video>
                                        <h3 className="text-xl md:text-2xl lg:text-3xl text-white font-bold mt-4">
                                            {course.title}
                                        </h3>
                                        <button
                                            className="text-white px-10 py-2 rounded mt-4"
                                            style={{
                                                background: `linear-gradient(to right, ${course.gradientTo}, ${course.gradientFrom})`,
                                            }}
                                        >
                                            Enroll
                                        </button>
                                    </div>
                                </div>
                                <div className="md:w-1/2 p-4 flex flex-col justify-center space-y-6">
                                    <h3
                                        className="text-2xl md:text-5xl font-semibold bg-clip-text text-transparent"
                                        style={{
                                            backgroundImage: `linear-gradient(to right, ${course.gradientFrom}, ${course.gradientTo})`,
                                            WebkitBackgroundClip: "text",
                                            backgroundClip: "text",      
                                        }}
                                    >
                                        {course.title}
                                    </h3>

                                    <p className="text-gray-300 mt-2 text-justify">
                                        {course.description}
                                    </p>
                                    <div className="flex mt-4 gap-3">
                                        <button
                                            className="text-white px-8 py-2 rounded"
                                            style={{
                                                background: `linear-gradient(to right, ${course.exploreGradient}, ${course.gradientTo})`,
                                            }}
                                        >
                                            Explore
                                        </button>
                                        <button
                                            className="px-8 py-2 rounded-lg"
                                            style={{
                                                color: course.exploreGradient,
                                                border: `2px solid ${course.successGradient}`,
                                            }}
                                        >
                                            Success
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default OurCourse;
