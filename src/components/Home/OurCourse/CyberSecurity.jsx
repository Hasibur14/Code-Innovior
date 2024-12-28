import React from 'react'

const CyberSecurity = () => {

    // Define the skills data
    const skills = [
        {
            name: "HTML",
            description: "Learn Latest HTML.",
            icon: "https://i.postimg.cc/pddTXLXw/html.png"
        },
        {
            name: "CSS",
            description: "Learn Latest CSS.",
            icon: "https://i.postimg.cc/JnW25GDg/css.png"
        },
        {
            name: "JavaScript",
            description: "Learn Latest JavaScript.",
            icon: "https://i.postimg.cc/NjSVLNgQ/js.png"
        },
        {
            name: "Tailwind CSS",
            description: "Learn Latest Tailwind CSS Frameworks.",
            icon: "https://i.postimg.cc/ZqNQNrRp/tailwind.png"
        },
        {
            name: "Angular.JS",
            description: "Learn Latest Angular Frameworks.",
            icon: "https://i.postimg.cc/pLp4WNM0/angular.png"
        },
        {
            name: "React.JS",
            description: "Learn Latest React Frameworks.",
            icon: "https://i.postimg.cc/yYf2C1tg/react.png"
        },
        {
            name: "Upcoming...",
            description: "Upcoming...",
            icon: "https://i.postimg.cc/4N4j07LR/upcoming.png"
        },
    ];

    return (
        <div className="text-white">
            <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-[#CAFFF1] to-[#05B689] text-center text-3xl font-bold uppercase tracking-widest mb-8 border-b border-t border-dashed opacity-80 py-5">
             Cyber Security
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-5">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="bg-gradient-to-br from-black via-black to-[#01261d] p-6 rounded-lg shadow-md  hover:shadow-[#326158] flex flex-col items-center hover:bg-gradient-to-bl hover:from-black hover:via-black hover:to-[#01261d] transition-colors duration-500 " >
                        {/* Skill Icon */}
                        <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-16 h-16 mb-4 bg-white p-3 rounded-full"
                        />

                        <h3 className="text-xl font-semibold">{skill.name}</h3>
                        <p className="text-center text-sm opacity-85 mt-2">{skill.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CyberSecurity;