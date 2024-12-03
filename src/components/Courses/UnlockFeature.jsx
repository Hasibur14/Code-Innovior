import React, { useState } from "react";

const UnlockFeature = () => {


    const features = [
        {
            image: "https://i.postimg.cc/4NPWtwtP/factory.png",
            title: "Campus To Corporate: Your Launchpad To Success!",
            description:
                "Our program bridges the gap between academic learning and professional demands, giving you the skills and confidence to excel in the corporate world.",
        },
        {
            image: "https://i.postimg.cc/dVSnN15T/consent.png",
            title: "Internship Opportunities",
            description:
                "Gain hands-on experience through exclusive internship placements with top-tier companies, preparing you to handle real-world projects effectively.",
        },
        {
            image: "https://i.postimg.cc/Kvx9RCK4/presentation.png",
            title: "Practical, Industry-Focused Training",
            description:
                "Learn through hands-on projects, workshops, and case studies designed by industry experts to ensure you're equipped with the latest skills.",
        },
        {
            image: "https://i.postimg.cc/Y9FXWHfL/mentorship.png",
            title: "Access To Expert Mentorship",
            description:
                "Work closely with industry professionals who provide guidance, feedback, and valuable insights to shape your career path.",
        },
        {
            image: "https://i.postimg.cc/QdM0q5J3/award.png",
            title: "Professional Certifications",
            description:
                "Earn globally recognized certifications to validate your skills and stand out in the competitive job market.",
        },
        {
            image: "https://i.postimg.cc/wBZfMvJd/code.png",
            title: "Hands-On Coding Experience",
            description:
                "Dive into coding projects and develop real-world software solutions while mastering industry standards.",
        },
    ];

    return (
        <div className="bg-gradient-to-t from-[#1e493e] to-[#000403] font-mondo">
            <div className="container mx-auto  mt-20">
                <div className="w-full flex items-center justify-center my-20">
                    <h2
                        className="text-white text-2xl md:text-4xl lg:text-6xl  uppercase  text-center font-mono">
                        <span className="text-rose-500">Unlock Your Feature: </span>
                        The <br /> Unique Edge Of Your Career_
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 text-white group2">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="relative p-6 bg-gradient-to-t from-[#1e493e] to-[#01221a] rounded-2xl hover:shadow-xl transform duration-300 hover:bg-gradient-to-r hover:from-[#317b68] hover:to-[#0f4e3e] group hover:translate-y-0 group-hover:translate-y-5 transition-transform "
                        >
                            <div
                                className="text-4xl mb-4 transform transition-transform duration-300 group-hover:scale-110"
                            >
                                <img className="w-24 mt-10 ml-2" src={feature.image} alt="feature" />
                            </div>
                            <h3
                                className="text-xl lg:text-3xl font-semibold mb-3 translate-y-0 group-hover:translate-y-5 transition-transform duration-300"
                            >
                                {feature.title}
                            </h3>
                            <p
                                className="text-md translate-y-0 group-hover:translate-y-5 transition-transform duration-300 mb-5"
                            >
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default UnlockFeature;
