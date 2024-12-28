import React from 'react';
import courseBg from "../../../assets/courseBg.png";


const OurCourse = () => {




    return (
        <div
            className="relative w-full h-[2250px] md:h-[2150px] mt-20 font-mondo"
            style={{
                backgroundImage: `url(${courseBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
            <div className="absolute inset-0">
                <h4 className='text-white text-center'>Technology you learn!</h4>
                <h2 className="font-mono text-3xl text-center md:text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#CAFFF1] to-[#05B689] z-20">
                Shape Your Future with Advanced Skills
                </h2>
                <p className='text-center uppercase text-gray-300 mt-10 '>Discover a range of features designed to elevate your experience, combining innovation, <br /> functionality, and uniqueness to meet your needs like never before.</p>

                {/* card section */}
                <section className='container mx-auto max-w-7xl px-4 md:px-8 mt-24'>
                     
                </section>
            </div>
        </div>
    );
};

export default OurCourse;
