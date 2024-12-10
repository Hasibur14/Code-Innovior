import { useEffect, useState } from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { PiDotOutlineThin } from "react-icons/pi";
import footerBg from "../../../assets/footer.png";
import logo1 from "../../../assets/home/logoColor.png";
import { BiSolidPhoneCall } from "react-icons/bi";



// Data for courses
const coursesGroup1 = [
    "Web Development",
    "Graphics Design",
    "Networking",
    "Cyber Security",
    "Software Development",
    "Database Administration",
    "Terms and Conditions"
];

const coursesGroup2 = [
    "Server Administration",
    "Digital Marketing",
    "App Development",
    "Video Editing",
    "Animation",
    "MS Office Program",
    "Privacy Policy"
];

const CourseList = ({ courses }) => {
    return (
        <div className="mb-4 md:mb-0">
            <ul className="text-[15px] space-y-3">
                {courses?.map((course, index) => (
                    <li className='cursor-pointer  flex gap-2 hover:text-green-500 opacity-80 hover:underline transition-colors duration-500' key={index}>
                        <PiDotOutlineThin className='text-white mt-1' />
                        {course}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const SocialLinks = () => (
    <div className="flex space-x-4">
        <a href="https://www.facebook.com/codeinnovior2020" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook">
            <FaFacebookF className="text-2xl p-1 rounded bg-[#05B689] text-white hover:bg-white hover:text-[#05B689] transition duration-500" />
        </a>
        <a href="https://www.linkedin.com/in/codeinnovior/?fbclid=IwY2xjawHCNntleHRuA2FlbQIxMAABHZkfAI7K79tdnLUP4cy201g7l4eYcbIdJov-ASrUUTKFX1qGD8tdjB06aw_aem_HNEXYOr0ewlHQdYpmZKbOQ" target="_blank" rel="noopener noreferrer" aria-label="Follow us on LinkedIn">
            <FaLinkedinIn className="text-2xl p-1 rounded bg-[#05B689] text-white hover:bg-white hover:text-[#05B689] transition duration-500" />
        </a>
        <a href="https://x.com/i/flow/login?redirect_after_login=%2Fcodeinnovior" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Twitter">
            <FaXTwitter className="text-2xl p-1 rounded bg-[#05B689] text-white hover:bg-white hover:text-[#05B689] transition duration-500" />
        </a>
        <a href="https://www.instagram.com/codeinnovior/?fbclid=IwY2xjawHCNq9leHRuA2FlbQIxMAABHW3p_vv3zmS5Ib0U8tqMCPaUI8mimZsh3UcpGlVi_4WYOvETzYsGbMGQVg_aem_XF4wTR3TmA5aSAexRgh-kQ" target="_blank" rel="noopener noreferrer" aria-label="Email us">
            <FaInstagram className="text-2xl p-1 rounded bg-[#05B689] text-white hover:bg-white hover:text-[#05B689] transition duration-500" />
        </a>
        <a href="https://www.youtube.com/@codeinnovior" target="_blank" rel="noopener noreferrer" aria-label="Email us">
            <IoLogoYoutube className="text-2xl p-1 rounded bg-[#05B689] text-white hover:bg-white hover:text-[#05B689] transition duration-500" />
        </a>
    </div>
);

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [callButtonExpanded, setCallButtonExpanded] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCallButtonExpanded((prev) => !prev);
        }, 2000); // Toggle every 2 seconds
        return () => clearInterval(interval);
    }, []);


    // Handlers for button actions
    const handleCallClick = () => {
        window.location.href = "tel:+8801844185480";
    };

    return (
        <footer
            className="text-white py-6 font-mondo"
            style={{
                background: `url(${footerBg}) lightgray 50% / cover no-repeat`,
            }}
        >
            <div className="container mx-auto md:flex px-4 justify-between">
                <div className="mb-4 md:mb-0 lg:w-1/3 space-y-6">
                    <img
                        className='w-80'
                        src={logo1}
                        alt="code innovior"
                    />
                    <p className="text-[16px] mb-2 text-white text-justify opacity-85">
                        Codeinnovior (a concern of goinnovior technology) is a technology-based learning platform. This platform was created by a group of IT specialists with the goal of sharing knowledge with you. Please follow us on social media to stay up to date.
                    </p>
                    <SocialLinks />
                </div>
                <div>
                    <h2 className='text-xl md:text-3xl mb-4 ml-1 text-slate-200 font opacity-80'>Courses</h2>
                    <div className="flex flex-col text-[12px] md:flex-row space-y-4 md:space-y-0 md:space-x-44 lg:space-x-60">
                        <CourseList courses={coursesGroup1} />
                        <CourseList courses={coursesGroup2} />
                    </div>
                </div>
            </div>
            <div className='container mx-auto my-6 opacity-85'>
                <hr />
            </div>
            <div className="text-center text-sm mt-4">
                © {currentYear} Design & Developed By
                <a
                    className='hover:text-[#00D8A1] transition-colors duration-500 font-semibold'
                    href="http://codeinnovior.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {" "}CodeInnovior
                </a>.
            </div>
            {/* Call Button */}
            <div className="fixed bottom-4 right-4">
                <button
                    onClick={handleCallClick}
                    className={`flex items-center justify-center gap-2 text-white shadow-lg transition-all duration-1000 ${callButtonExpanded
                        ? "w-44 h-16 rounded-l-full rounded-tr-full bg-gradient-to-r from-[#237c66] to-[#00D8A1]"
                        : "w-16 h-16 rounded-full bg-gradient-to-r from-[#00D8A1] to-[#064837]"
                        }`}>
                    <BiSolidPhoneCall className="text-xl" />
                    {callButtonExpanded && <span className="text-center text-md  font-mondo">Call for Details</span>}
                </button>
            </div>
        </footer>
    );
};

export default Footer;
