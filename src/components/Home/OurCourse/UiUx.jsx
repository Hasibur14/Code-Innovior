import React from "react";

const UiUx = () => {
    // Define the skills data
    const skills = [
        {
            name: "Figma",
            description: "Learn Latest HTML.",
            icon: "https://i.postimg.cc/VLNqSnL6/figma.png"
        },
        {
            name: "Adobe Xd",
            description: "Learn Advance Level Adobe Xd.",
            icon: "https://i.postimg.cc/c1h74XW2/adobe.png"
        },
        {
            name: "Sketch",
            description: "Learn Advance Level Figma.",
            icon: "https://i.postimg.cc/Hn6bZs3d/sketch.png"
        },
        {
            name: "Adobe illustrator",
            description: "Learn Mid Level Adobe illustrator.",
            icon: "https://i.postimg.cc/4db6c19K/adoill.png"
        },
        {
            name: "Framer Ai",
            description: "Learn Mid Level Framer.",
            icon: "https://i.postimg.cc/nztKMWCb/framer.png"
        },
        {
            name: "webflow",
            description: "Learn Advance Level Webflow.",
            icon: "https://i.postimg.cc/j2xz4JHM/webflow.png"
        },
        {
            name: "Upcoming...",
            description: "Upcoming...",
            icon: "https://i.postimg.cc/4N4j07LR/upcoming.png"
        },
    ];

    return (
        <div className="text-white">
            <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-[#228065] to-[#04fabd] text-center text-xl md:text-3xl font-bold uppercase tracking-widest mb-8 border-b border-t border-dashed border-gray-400 opacity-80 py-5">
               UI/UX Design
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-5">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="bg-gradient-to-br from-black via-black to-[#04503d] p-6 rounded-lg shadow-md  hover:shadow-[#326158] flex flex-col items-center hover:bg-gradient-to-bl hover:from-black hover:via-black hover:to-[#01261d] transition-colors duration-500 " >
                        {/* Skill Icon */}
                        <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-12 md:w-16 h-12 md:h-16 mb-4 bg-white p-3 rounded-full"
                        />

                        <h3 className="text-md md:text-xl font-semibold">{skill.name}</h3>
                        <p className="text-center text-sm opacity-85 mt-2">{skill.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UiUx;
