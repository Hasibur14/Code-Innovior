import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { LiaTelegramPlane } from "react-icons/lia";
import { VscDebugBreakpointData } from "react-icons/vsc";
import footerBg from "../../../assets/footer.png";
import logo1 from "../../../assets/logo.png";

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
        <div className="mb-4 md:mb-0 ">
            <h2 className="text-xl md:text-3xl mb-5">Courses</h2>
            <ul className="text-[18px] space-y-3">
                {courses?.map((course, index) => (
                    <li className='cursor-pointer flex gap-2 hover:text-green-500 opacity-80 transition duration-300' key={index}>
                        <VscDebugBreakpointData className='text-white mt-1 ' />{course}</li>
                ))}
            </ul>
        </div>
    );
};


const SocialLinks = () => (
    <div className="flex space-x-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook">
            <FaFacebookF className="text-xl hover:text-green-500 transition" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on LinkedIn">
            <FaLinkedinIn className="text-xl hover:text-green-500 transition" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Twitter">
            <FaXTwitter className="text-xl hover:text-green-500 transition" />
        </a>
        <a href="mailto:info@example.com" target="_blank" rel="noopener noreferrer" aria-label="Email us">
            <LiaTelegramPlane className="text-xl hover:text-green-500 transition" />
        </a>
    </div>
);

const Footer = () => {
    return (
        <footer
            className=" text-white py-6 font-mondo "
            style={{ background: `linear-gradient(0deg, rgba(46, 179, 145, 0.20) 0%, rgba(46, 179, 145, 0.20) 100%), url(${footerBg}) lightgray 50% / cover no-repeat`
            }}
        >
            <div className="container mx-auto md:flex  px-4 justify-between">
                <div className="mb-4 md:mb-0 lg:w-1/3 space-y-6">
                    <div className="flex items-center mb-2">
                        <img className='' src={logo1} alt="code innovior" />

                    </div>
                    <p className="text-[18px] mb-2 text-white opacity-85 ">
                        Codeinnovior (a concern of goinnovior technology) is a technology-based learning platform. This platform was created by a group of IT specialists with the goal of sharing knowledge with you. Please follow us on social media to stay up to date.
                    </p>
                    <SocialLinks />
                </div>


                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-44 lg:space-x-60">
                    <CourseList courses={coursesGroup1} />
                    <CourseList courses={coursesGroup2} />
                </div>
            </div>
            <div className='container mx-auto my-6 opacity-85'>
                <hr />
            </div>
            <div className="text-center text-sm mt-4">
                © 2024 Design & Developed By
                <a
                    className='hover:text-green-500 font-semibold'
                    href="https://www.goinnovior.com/"
                    target="_blank"
                    rel="noopener noreferrer">  CodeInnovior Limited .</a>
            </div>
        </footer>
    );
};

export default Footer;
