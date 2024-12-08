import React from 'react';
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { MdWifiCalling2 } from "react-icons/md";

const Questions = () => {


    // Handlers for button actions
    const handleCallClick = () => {
        window.location.href = "tel:+8801844185480"; 
    };

    const handleEmailClick = () => {
        window.location.href = "mailto:info@goinnovior.com"; 
    };

    return (
        <div className='py-14 md:py-20'>
            <div className="container mx-auto max-w-[1100px] bg-gradient-to-l from-[#15061F] to-[#681E63] rounded-xl font-mondo py-5 md:py-28 flex items-center justify-center">
                <div className="text-center space-y-4">
                    <img src="https://i.postimg.cc/9FTBPr4L/Frame-64.png" alt="Questions" className="mx-auto" />
                    <h4 className="text-white text-2xl font-semibold">Have any questions?</h4>
                    <p className="text-white text-lg ">Talk to our Student Advisor anytime.</p>
                    <div className="md:flex gap-10 justify-center">
                        {/* Call Us Button */}
                        <button
                            onClick={handleCallClick}
                            className="relative inline-block px-8 py-2 font-medium group rounded-lg"
                        >
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-blue-800 group-hover:-translate-x-0 group-hover:-translate-y-0 rounded"></span>
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#353baf] to-[#0d72d2] border-none group-hover:bg-blue-500 rounded"></span>
                            <span className="relative flex gap-2 text-white py-3">
                                <MdWifiCalling2 className="text-2xl" />
                                Call Us
                            </span>
                        </button>

                        {/* Email Us Button */}
                        <button
                            onClick={handleEmailClick}
                            className="relative inline-block px-8 py-2 font-medium group"
                        >
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-neutral-400 group-hover:-translate-x-0 group-hover:-translate-y-0  rounded"></span>
                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-neutral-300 group-hover:bg-white  rounded"></span>
                            <span className="relative text-black flex gap-2 py-3">
                                <MdOutlineMarkEmailRead className="text-2xl" />
                                Email Us
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Questions;
