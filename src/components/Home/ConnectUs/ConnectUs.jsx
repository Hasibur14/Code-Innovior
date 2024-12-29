import React from 'react';
import connectUs from "../../../assets/home/connectUs.png";
import { div } from 'framer-motion/client';

const ConnectUs = () => {
    return (
        <div className='bg-gradient-to-l from-[#24427a] to-[#086a52] pt-16'>
            <div className="flex flex-col items-center justify-center px-4 md:px-10 lg:px-20">
                <div className="text-center mb-10">
                    <h4 className="text-[#04fabd] uppercase">Everywhere</h4>
                    <h2 className="font-mono text-3xl md:text-5xl lg:text-7xl font-bold text-white">
                        Connect with Us <br /> Anywhere, Anytime
                    </h2>
                    <p className="text-gray-300 uppercase mt-5 md:mt-10">
                        We’re just a click away! Find us on all major platforms to stay updated, <br />
                        get in touch, or explore our services.
                    </p>
                </div>
                <div className="flex justify-center">
                    <img
                        src={connectUs}
                        alt="connect us"
                        className="w-64 sm:w-80 md:w-[36rem] lg:w-[72rem] max-w-full object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default ConnectUs;
