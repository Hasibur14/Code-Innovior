import React from 'react'
import courseBg from "../../../assets/courseBg.png";



const Feature = () => {

    const features = [
        {
            id: 1,
            icon: '📘', // Replace this with an appropriate icon
            title: 'Tailored Learning Experiences',
            description: 'We offer customized learning experiences designed to empower individuals to launch their careers with confidence.',
        },
        {
            id: 2,
            icon: '🎓', // Replace this with an appropriate icon
            title: 'Comprehensive Course Offerings',
            description: 'We offer a variety of courses in Web Development, Cyber Security, UI/UX Design, & Graphic Design with industry-level training, etc.',
        },
        {
            id: 3,
            icon: '💻', // Replace this with an appropriate icon
            title: 'Hands-On Projects & Expert Mentorship',
            description: 'Students enjoy hands-on projects, interactive workshops, & guidance from industry professionals to build practical skills and real-world expertise.',
        },
    ];

    return (
          <div
                   className="relative w-full h-[2250px] md:h-[2150px] mt-20 font-mondo"
                   style={{
                       backgroundImage: `url(${courseBg})`,
                       backgroundSize: 'cover',
                       backgroundPosition: 'center',
                   }}>
                   <div className="absolute inset-0">
                       <h4 className='text-white text-center'>Why we are Unique?</h4>
                       <h2 className="font-mono text-3xl text-center md:text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#CAFFF1] to-[#05B689] z-20">
                           Unmatched Unique Features
                       </h2>
                       <p className='text-center uppercase text-gray-300 mt-10 '>Discover a range of features designed to elevate your experience, combining innovation, <br /> functionality, and uniqueness to meet your needs like never before.</p>
       
                       {/* card section */}
                       <section className='container mx-auto max-w-7xl px-4 md:px-8 mt-24'>
                               <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                                   {features.map((feature) => (
                                       <div
                                           key={feature.id}
                                           className="bg-gradient-to-t from-[#165043]  to-[#012c21]  rounded-lg px-10 py-6 text-white shadow-lg transform hover:scale-105 transition-transform duration-300"
                                       >
                                           <div className="text-5xl mb-4 bg-gray-900 rounded-full p-3 w-20 h-20 text-center">{feature.icon}</div>
                                           <h3 className="text-2xl font-bold mb-5">{feature.title}</h3>
                                           <p className="text-lg opacity-85">{feature.description}</p>
                                       </div>
                                   ))}
                               </div>
                       </section>
                   </div>
               </div>
    )
}

export default Feature ;