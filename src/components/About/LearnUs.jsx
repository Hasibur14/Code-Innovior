import React from 'react';
import webdev from "../../assets/about/code.png";
import uiUx from "../../assets/about/ui-ux.png";
import graphics from "../../assets/about/graphics.png";
import cyber from "../../assets/about/cyber.png";
import hr from "../../assets/about/hr.png";
import business from "../../assets/about/business.png";
import software from "../../assets/about/software.png";
import webDev from "../../assets/about/webDev.mp4";



const LearnUs = () => {
    const data = [
        {
            title: "Web Development",
            img: webdev,
            bgcolor: "bg-[rgba(42,101,241,0.2)]",
            textcolor: "text-[#2A65F1]",
        },
        {
            title: "UI/UX Design",
            img: uiUx,
            bgcolor: "bg-[rgba(47,255,202,0.2)]",
            textcolor: "text-[#2FFFCA]",
        },
        {
            title: "Graphics Design",
            img: graphics,
            bgcolor: "bg-[rgba(165,47,255,0.10)]",
            textcolor: "text-[#5A0FB2]",
        },
        {
            title: "Cyber Security",
            img: cyber,
            bgcolor: "bg-[rgba(241,101,41,0.2)]",
            textcolor: "text-[#F16529]",
        },
        {
            title: "HR and General",
            img: hr,
            bgcolor: "bg-[rgba(128,189,0,0.20)]",
            textcolor: "text-[#96DB05]",
        },
        {
            title: "Business Development",
            img: business,
            bgcolor: "bg-[rgba(77,164,63,0.20)]",
            textcolor: "text-[#4DA43F]",
        },
        {
            title: "Software Quality Assurance",
            img: software,
            bgcolor: "bg-[rgba(247,223,30,0.20)]",
            textcolor: "text-[#F7DF1E]",
        },
        {
            title: "Wordpress Development",
            img: webdev,
            bgcolor: "bg-[rgba(182,32,154,0.20)]",
            textcolor: "text-[#DD16AB]",
        },
    ];



    return (
        <div className="container mx-auto my-28 md:mt-60">
            {/* Section Title */}
            <div className="flex items-center justify-center my-20">
                <h2 className="text-white text-2xl md:text-4xl lg:text-6xl uppercase text-center font-mono">
                    What you will learn_ from <br />
                    <span className="text-rose-500 ">Us?</span>_
                </h2>
            </div>
            <div className="flex justify-center items-center">
                <div>
                    <div className="md:flex gap-7">
                        {data.slice(0, 5).map((item, index) => (
                            <button
                                key={index}
                                className={`flex items-center gap-4 px-6 py-2 rounded-xl transition-all duration-300 border-none ${item.bgcolor} backdrop-blur-sm  hover:scale-105 transition-all duration-500 group`}
                            >
                                {/* Icon */}
                                <div className={`w-10 h-10 p-2 rounded-full ${item.bgcolor} bg-opacity-70 backdrop-blur-xl  group-hover:animate-pulse `}>
                                    <img
                                        src={item.img}
                                        alt={`${item.title} icon`}
                                        className="w-full h-full object-contain" />
                                </div>

                                <h3 className={`text-xl font-bold ${item.textcolor}`}>{item.title}</h3>

                            </button>
                        ))}
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="md:flex gap-10 p-6">
                            {data.slice(5).map((item, index) => (
                                <button
                                    key={index}
                                    className={`flex items-center gap-4 px-6 py-2 rounded-2xl transition-all duration-300 border-none ${item.bgcolor} backdrop-blur-sm hover:scale-105 transition-all duration-500 group`}
                                >
                                    {/* Icon */}
                                    <div className={`w-10 h-10 p-2 rounded-full ${item.bgcolor} bg-opacity-70 backdrop-blur-xl  group-hover:animate-pulse `}>
                                        <img
                                            src={item.img}
                                            alt={`${item.title} icon`}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>

                                    <h3 className={`text-xl font-bold ${item.textcolor}`}>{item.title}</h3>

                                </button>
                            ))}
                        </div>

                    </div>


                </div>
            </div>

            {/* Video */}
            <div className="flex justify-center items-center">
                <div className="bg-gradient-to-r from-[#003326] to-[#2EB391] rounded-3xl p-4 md:p-6">
                    <video className="w-full h-full rounded-lg" controls>
                        <source src={webDev} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

        </div>
    );
};

export default LearnUs;
