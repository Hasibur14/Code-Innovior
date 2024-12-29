import React from 'react'

const CyberSecurity = () => {

    // Define the skills data
    const skills = [
        {
            name: "Wireshark",
            description: "Learn Advance Level Wireshark.",
            icon: "https://i.postimg.cc/QMxrmk8W/library-1.png"
        },
        {
            name: "NMAP",
            description: "Learn Advance Level NMAP.",
            icon: "https://i.postimg.cc/DwcT1YTT/library-1-1.png"
        },
        {
            name: "Kali Linux",
            description: "Learn Mid Level Kali Linux oS.",
            icon: "https://i.postimg.cc/dVFFkcg6/library-1-2.png"
        },
        {
            name: "Aircrack-Ng",
            description: "Learn Advance Level aircrack-ng.",
            icon: "https://i.postimg.cc/5NL122Kj/library-1-3.png"
        },
        {
            name: "Kaspersky",
            description: "Learn Mid Level Kaspersky.",
            icon: "https://i.postimg.cc/WpQTVknQ/library-1-4.png"
        },
        {
            name: "FortiGate ",
            description: "Learn Advance Level FortiGate.",
            icon: "https://i.postimg.cc/kMVqLcxQ/library-1-5.png"
        },
        {
            name: "Upcoming...",
            description: "Upcoming...",
            icon: "https://i.postimg.cc/4N4j07LR/upcoming.png"
        },
    ];

    return (
        <div className="text-white">
           <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-[#228065] to-[#04fabd] text-center text-3xl font-bold uppercase tracking-widest mb-8 border-b border-t border-dashed border-gray-400 opacity-80 py-5">
               Cyber Security
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-5">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="bg-gradient-to-br from-black via-black to-[#04503d] p-6 rounded-lg shadow-md  hover:shadow-[#326158] flex flex-col items-center hover:bg-gradient-to-bl hover:from-black hover:via-black hover:to-[#01261d] transition-colors duration-500 " >
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