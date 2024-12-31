import React from 'react'
import courseBg from "../../../assets/home/border.png";
import Empoweri from './Empoweri';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Feature = () => {

    const features = [
        {
            id: 1,
            icon: 'https://i.postimg.cc/fb5sq1XM/library-1-9.png',
            title: 'Tailored Learning Experiences',
            description: 'We offer customized learning experiences designed to empower individuals to launch their careers with confidence.',
        },
        {
            id: 2,
            icon: 'https://i.postimg.cc/d1xYwd4X/library-1-8.png',
            title: 'Comprehensive Course Offerings',
            description: 'We offer a variety of courses in Web Development, Cyber Security, UI/UX Design, & Graphic Design with industry-level training, etc.',
        },
        {
            id: 3,
            icon: 'https://i.postimg.cc/G22CWzJG/library-1-7.png',
            title: 'Hands-On Projects & Expert Mentorship',
            description: 'Students enjoy hands-on projects, interactive workshops, & guidance from industry professionals to build practical skills and real-world expertise.',
        },
    ];

    return (
        <div className="relative w-full h-[1750px] md:h-[1410px] lg:h-[950px] font-mondo bg-gradient-to-t from-[#061e1d] to-black">

            <div className="absolute inset-0">
                <h4 className='text-center text-[#3ff0c4] uppercase'>Why we are Unique?</h4>
                <h2 className="font-mono text-3xl text-center md:text-4xl lg:text-6xl font-bold text-white z-20">
                    Unmatched Unique Features
                </h2>
                <p className='text-sm md:text-lg text-center uppercase text-gray-300 mt-10 '>Discover a range of features designed to elevate your experience, combining innovation, <br /> functionality, and uniqueness to meet your needs like never before.</p>

                {/* card section */}
                <section className='container mx-auto max-w-7xl px-4 md:px-8 mt-24'>
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature) => (
                            <div
                                key={feature.id}
                                className="bg-gradient-to-t from-[#165043]  to-[#011812]  rounded-lg px-10 py-6 text-white shadow-lg transform transition-transform duration-300 relative group"
                                data-aos="fade-up"
                                data-aos-duration="3000" >
                                <img
                                    className="bg-[#135f4c] bg-opacity-50 rounded-full p-4"
                                    src={feature.icon}
                                    alt="icon" />
                                <h3 className="text-2xl font-bold my-7">{feature.title}</h3>
                                <p className="text-lg opacity-85">{feature.description}</p>

                                <div className="absolute top-0 left-0 w-2/3 h-2/3 border-l-4 border-t-4 border-[#36e3b8] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                                <div className="absolute bottom-0 right-0 w-2/3 h-2/3  border-r-4 border-b-4 border-[#36e3b8] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                            </div>

                        ))}
                    </div>
                </section>
                <div className='mt-16 lg:mt-0'>
                    <Empoweri />
                </div>
            </div>
            <img src={courseBg} alt="" />
        </div>
    )
}

export default Feature;