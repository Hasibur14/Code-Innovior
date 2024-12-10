import React from 'react';

const SuccessBanner = () => {
    return (
        <div
            className="relative w-full h-64 flex items-center justify-center"
            style={{
                backgroundImage: `url('https://i.postimg.cc/7YykcT8T/nature-3194001-1280.jpg')`, // Replace with your image URL
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Text */}
            <h1 className="relative text-white text-2xl md:text-4xl font-bold z-10">
                Successful Students List
            </h1>
        </div>
    );
};

export default SuccessBanner;
