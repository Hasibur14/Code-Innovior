import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCalendarCheck, FaGetPocket } from "react-icons/fa";
import { SiSololearn } from "react-icons/si";
import BookFreeClassModal from "../Modal/BookFreeClassModal";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const OurCourse = () => {
  const [courseData, setCourseData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const wrapperRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    fetch("/course.json")
      .then((res) => res.json())
      .then((data) => setCourseData(data))
      .catch((error) => console.error("Error fetching course data:", error));
  }, []);

  useEffect(() => {
    const cards = cardsRef.current;
    const header = headerRef.current;

    const animation = gsap.timeline();
    cards.forEach((card, index) => {
      if (index > 0) {
        gsap.set(card, { y: index * 500 });
        animation.to(card, { y: 20, duration: index * 0.5, ease: "none" }, 0);
      }
    });

    ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: "top top",
      pin: true,
      end: `+=${cards.length * 500 + header.offsetHeight}`,
      scrub: true,
      animation: animation,
      markers: false,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [courseData]);

  const openBookingModal = () => setIsModalOpen(true);
  const closeBookingModal = () => setIsModalOpen(false);

  const bgColors = [
    "from-[#205960] to-[#012327]",
    "from-[#5D3619] to-[#261100]",
    "from-[#1D0D64] to-[#0F0620]",
    "from-[#5F0D67] to-[#15061F]",
  ];

  return (
    <div className="bg-gradient-to-t from-[#21112a] to-[#01110d] font-mondo">
      <div ref={headerRef}></div>
      <div className="container mx-auto max-w-6xl pt-10">
        <div className="w-full items-center justify-center mt-28">
          <h2 className="text-3xl md:text-5xl lg:text-7xl text-center font-mono text-rose-500">
            Our Course_
          </h2>
          <p className="text-xl font-mono text-white text-center mt-5">
            Empowering Minds Through Innovative Learning
          </p>
        </div>
        <div ref={wrapperRef} className="wrapper relative">
          <div className="pt-44 grid grid-cols-1 gap-10 space-y-8 h-screen">
            {courseData?.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`text-white bg-gradient-to-r ${bgColors[index % 4]} bg-opacity-90 rounded-lg px-14 py-8 w-full absolute left-0`}
              >
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="md:w-1/2 text-left space-y-7">
                    <h2 className="text-2xl md:text-4xl font-mono font-extrabold">
                      {item.title}
                    </h2>
                    <ul className="space-y-4">
                      {item.features.map((feature, i) => (
                        <li key={i} className="flex items-center space-x-3">
                          <span className="text-2xl text-yellow-300">
                            <FaGetPocket className="text-[16px]" />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="md:flex gap-10 space-y-5 md:space-y-0">
                      <button
                        onClick={openBookingModal}
                        className="relative inline-block px-4 py-1 font-medium group"
                      >
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-blue-800 group-hover:-translate-x-0 group-hover:-translate-y-0 rounded-lg"></span>
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#2e60ac] to-[#0d72d2] border-none group-hover:bg-blue-500 rounded-lg"></span>
                        <span className="relative flex gap-4 text-white py-2">
                          <FaCalendarCheck className="text-xl" />
                          Book a Free Class
                        </span>
                      </button>
                      <Link to={`/course-details/${item.id}`}>
                        <button className="relative inline-block px-4 py-1 font-medium group mt-5 lg:mt-0">
                          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-neutral-400 group-hover:-translate-x-0 group-hover:-translate-y-0 rounded-lg"></span>
                          <span className="absolute inset-0 w-full h-full bg-white border-2 border-neutral-300 group-hover:bg-white rounded-lg"></span>
                          <span className="relative text-black flex gap-2 py-2">
                            <SiSololearn className="text-lg" />
                            Learn More
                          </span>
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <div className="w-full overflow-hidden rounded-lg shadow-lg">
                      <img
                        src={item.image}
                        alt={item.title}
                        className={`w-full h-60 md:h-96 object-cover bg-gradient-to-l ${bgColors[index % 4]} opacity-80 hover:opacity-100 transition-all duration-500 p-5 rounded-2xl`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {isModalOpen && <BookFreeClassModal closeBookingModal={closeBookingModal} />}
    </div>
  );
};

export default OurCourse;
