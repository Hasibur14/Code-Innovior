import React from 'react';
import courseBg from "../../../assets/courseBg.png";
import uiUx from "../../../assets/uiUx.mp4";
import web from "../../../assets/web.mp4";
import webDev from "../../../assets/webDev.mp4";

const OurCourse = () => {
    return (
        <div
            className="relative w-full h-[2478px]"
            style={{
                backgroundImage: `url(${courseBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="absolute ">
                <h2 className="font-mono md:py-44  text-3xl text-center md:text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#CAFFF1] to-[#05B689] z-20">
                    Our Courses_
                </h2>

                <div className='lg:mx-[340px] space-y-10 md:space-y-44 font-mondo'>
                    {/* First Section */}
                    <div className="flex flex-col md:flex-row mb-16 gap-6 ">
                        <div className="md:w-1/2 p-6">
                            <div className="bg-gradient-to-r from-[#003326] to-[#2EB391] rounded-3xl p-4 md:p-6">
                                <video className="w-full h-full rounded-lg" controls>
                                    <source src={webDev} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <h3 className="text-xl md:text-2xl lg:text-3xl text-white font-bold mt-4">Complete Web Development</h3>
                                <button className="bg-gradient-to-r from-[#2EB391]  to-[#005841] text-white px-10 py-2 rounded mt-4">Enroll</button>
                            </div>
                        </div>
                        <div className="md:w-1/2 p-4 space-y-6 flex flex-col justify-center ">
                            <h3 className="text-2xl md:text-4xl font-semibold bg-gradient-to-r from-[#2EB391] to-[#02664C] bg-clip-text text-transparent ">
                                Kickstart your journey in Web Development
                            </h3>
                            <p className="text-gray-300 mt-2 text-justify ">
                                Welcome to Programming Hero! Dive into the world of modern web development with a focus on MERN stack - MongoDB, Express.js, React, and Node.js course from the beginning of your journey until you get an internship or a full-time job.
                            </p>
                            <div className="flex mt-4 gap-3">
                                <button className="bg-gradient-to-r from-[#2EB391]  to-[#005841] text-white px-8 py-2 rounded mr-2">Explore</button>
                                <button className=" text-[#2EB391] border-2 border-[#247f68] px-8 py-2 rounded-lg">Success</button>
                            </div>
                        </div>
                    </div>


                    {/* Second Section */}
                    <div className="flex flex-col md:flex-row gap-6 ">
                        <div className="md:w-1/2 p-4 space-y-6 flex flex-col justify-center ">
                            <h3 className="text-2xl md:text-4xl font-semibold bg-gradient-to-r from-[#89B3FF] to-[#003FB4] bg-clip-text text-transparent">
                                Design UI/UX professionally
                                using FIGMA
                            </h3>
                            <p className="text-gray-300 mt-2 text-justify">
                                Welcome to CodeInnovior! Dive into the world of
                                modern web development with a focus on MERN stack - MongoDB,
                                Express.js, React, and Node.js course from the beginning of
                                your journey until you get an internship or a full-time job.
                            </p>
                            <div className="flex mt-4 gap-3">
                                <button className="bg-gradient-to-r from-[#89B3FF] to-[#003FB4] text-white px-8 py-2 rounded mr-2">Explore</button>
                                <button className=" text-[#89B3FF] border-2 border-[#89B3FF] px-8 py-2 rounded-lg">Success</button>
                            </div>
                        </div>
                        <div className="md:w-1/2 p-6">
                            <div className="bg-gradient-to-r from-[#003FB4] to-[#6c97e8] rounded-3xl p-4 md:p-6">
                                <video className="w-full h-full rounded-lg" controls>
                                    <source src={uiUx} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <h3 className="text-xl md:text-2xl lg:text-3xl text-white font-bold mt-4">Professional UI/UX Design</h3>
                                <button className="bg-gradient-to-r from-[#6c97e8]  to-[#003FB4] text-white px-10 py-2 rounded mt-4">Enroll</button>
                            </div>
                        </div>
                    </div>
                    {/* Third Section */}
                    <div className="flex flex-col md:flex-row mb-16 gap-6 ">
                        <div className="md:w-1/2 p-6">
                            <div className="bg-gradient-to-r from-[#4B1A50] to-[#B300C6] rounded-3xl p-4 md:p-6">
                                <video className="w-full h-full rounded-lg" controls>
                                    <source src={web} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <h3 className="text-xl md:text-2xl lg:text-3xl text-white font-bold mt-4">
                                    Advanced Graphic Design</h3>
                                <button className="bg-gradient-to-r from-[#B300C6]  to-[#4B1A50] text-white px-10 py-2 rounded mt-4">Enroll</button>
                            </div>
                        </div>
                        <div className="md:w-1/2 p-4 space-y-6 flex flex-col justify-center ">
                            <h3 className="text-2xl md:text-4xl font-semibold bg-gradient-to-r from-[#B300C6] to-[#4B1A50] bg-clip-text text-transparent">
                                Explore your journey in
                                Web Development
                            </h3>
                            <p className="text-gray-300 mt-2 text-justify">
                                Welcome to CodeInnovior! Dive into the world of
                                modern web development with a focus on MERN stack - MongoDB,
                                Express.js, React, and Node.js course from the beginning of
                                your journey until you get an internship or a full-time job.
                            </p>
                            <div className="flex mt-4 gap-3">
                                <button className="bg-gradient-to-r from-[#B300C6] to-[#4B1A50] text-white px-8 py-2 rounded mr-2">Explore</button>
                                <button className=" text-[#B300C6] border-2 border-[#B300C6] px-8 py-2 rounded-lg">Success</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurCourse;


const coursesData = [
    {
        title: "Complete Web Development",
        description:
            "Welcome to Programming Hero! Dive into the world of modern web development with a focus on MERN stack - MongoDB, Express.js, React, and Node.js course from the beginning of your journey until you get an internship or a full-time job.",
        videoSrc: "/videos/video1.mp4",
        buttons: [
            { text: "Let's Code", className: "bg-blue-500" },
            { text: "Explore", className: "bg-green-500" },
        ],
    },
    {
        title: "CSE Fundamentals with Pithron",
        description:
            "Welcome to Pithron! This comprehensive program is designed to lay the foundation for your Computer Science and Engineering journey. Explore core concepts, problem-solving, algorithms, data structures, cloud computing, and more.",
        videoSrc: "/videos/video2.mp4",
        buttons: [
            { text: "Explore", className: "bg-blue-500" },
            { text: "Curriculum", className: "bg-yellow-500" },
        ],
    },
    // Add more courses here
];
