import React from 'react';
import courseBg from "../../../assets/courseBg.png";
import WebsiteDevelopment from './WebsiteDev';
import UiUx from './UiUx';
import Graphics from './Graphics';
import CyberSecurity from './CyberSecurity';


const OurCourse = () => {

    return (
        <div
            className="relative w-full h-[2250px] md:h-[2750px] mt-20 font-mondo"
            style={{
                backgroundImage: `url(${courseBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
            <div className="absolute inset-0">
                <h4 className='text-[#04fabd] text-center uppercase'>Technology you learn!</h4>
                <h2 className="font-mono text-3xl text-center md:text-5xl lg:text-7xl font-bold text-white z-20 ">
                    Shape Your Future with <br /> Advanced Skills
                </h2>
                <p className='text-center uppercase text-gray-300 mt-10 '>Discover a range of features designed to elevate your experience, combining innovation, <br /> functionality, and uniqueness to meet your needs like never before.</p>

                {/* card section */}
                <section className='container mx-auto max-w-7xl px-4 md:px-8 mt-24 space-y-36'>
                    <WebsiteDevelopment />
                    <UiUx />
                    <Graphics />
                    <CyberSecurity />
                </section>
            </div>
        </div>
    );
};

export default OurCourse;
