import React from 'react'

const Graphics = () => {

    // Define the skills data
    const skills = [
        {
            name: "Adobe illustrator",
            description: "Learn Latest HTML.",
            icon: "https://i.postimg.cc/4db6c19K/adoill.png"
        },
        {
            name: "Adobe Photoshop",
            description: "Learn Advance Level Adobe Photoshop.",
            icon: "https://i.postimg.cc/RhmN75B9/photoshop.png"
        },
        {
            name: "Canva",
            description: "Learn Basic Level Canva.",
            icon: "https://i.postimg.cc/SsCnYQHD/canva.png"
        },
        {
            name: "Adobe Express",
            description: "Learn Basic Level Adobe Express.",
            icon: "https://i.postimg.cc/mr0cr1pP/express.png"
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
                Graphics Design
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-5">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="bg-gradient-to-br from-black via-black to-[#04503d] p-6 rounded-lg shadow-md  hover:shadow-[#326158] flex flex-col items-center hover:bg-gradient-to-bl hover:from-black hover:via-black hover:to-[#01261d] transition-colors duration-500 "
                        data-aos="zoom-in-right">
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
    )
}

export default Graphics;