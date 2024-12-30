import { useState, useEffect } from 'react';
import { CgMenuRightAlt } from "react-icons/cg";
import { FiMenu, FiX } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';
import logo1 from "../../../assets/home/logoColor.png";
import logo2 from "../../../assets/home/logowhite.png";
import "./navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [logo, setLogo] = useState(logo1);

    useEffect(() => {
        const logoInterval = setInterval(() => {
            setLogo(prevLogo => prevLogo === logo1 ? logo2 : logo1);
        }, 2000);

        return () => clearInterval(logoInterval);
    }, []);

    const toggleMenu = () => {
        if (menuOpen) {
            setIsClosing(true);
            setTimeout(() => {
                setMenuOpen(false);
                setIsClosing(false);
            }, 500);
        } else {
            setMenuOpen(true);
        }
    };

    const toggleServices = () => {
        setServicesOpen(!servicesOpen);
    };

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="z-[9999] nav-bg fixed w-full">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <Link to="/">
                            <img
                                className='w-56 md:w-72 transition-opacity duration-3000'
                                src={logo}
                                alt="logo" />
                        </Link>
                    </div>

                    {/* Menu for larger screens */}
                    <div className="hidden lg:flex space-x-4 items-center">
                        <div className="nav-item">
                            <NavLink
                                to="/"
                                className={({ isActive }) => isActive ? "block text-[#00D8A1] font-bold active" :
                                    "block px-4 py-2 text-white hover:bg-[#00D8A1]"}
                                onClick={handleLinkClick}
                            >
                                Home
                            </NavLink>
                        </div>

                        <div className="nav-item">
                            <NavLink
                                to="/about"
                                className={({ isActive }) => isActive ? "block text-[#00D8A1] font-bold active" :
                                    "block px-4 py-2 hover:bg-[#00D8A1] text-white"}
                                onClick={handleLinkClick}>
                                About
                            </NavLink>
                        </div>

                        <div className="nav-item">
                            <NavLink
                                to="/courses"
                                className={({ isActive }) => isActive ? "block text-[#00D8A1] font-bold active" :
                                    "block px-4 py-2 hover:bg-[#00D8A1] text-white"}
                                onClick={handleLinkClick}>
                                Courses
                            </NavLink>
                        </div>

                        <div className="nav-item">
                            <NavLink
                                to="/success"
                                className={({ isActive }) => isActive ? "block text-[#00D8A1] font-bold active" :
                                    "block px-4 py-2 hover:bg-[#00D8A1] text-white"}
                                onClick={handleLinkClick}>
                                Success
                            </NavLink>
                        </div>

                        <Link to="/" className="kisBtn px-5 py-3 text-lg ml-4 font-semibold text-white hover:scale-105 transition duration-300">
                            Kids Program
                        </Link>
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className="lg:hidden flex items-center border-1 p-1 rounded bg-[#00D8A1] hover:bg-green-400">
                        <button onClick={toggleMenu}>
                            {menuOpen ? (
                                <CgMenuRightAlt className="text-2xl text-white" />
                            ) : (
                                <FiMenu className="text-2xl text-white" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {(menuOpen && !isClosing) && (
                <div className="side-menu">
                    <div className="side-menu-2">
                        <div className="flex justify-between items-center p-4">
                            <img className='w-9/12' src={logo} alt="logo" />
                            <button onClick={toggleMenu}>
                                <FiX className="text-2xl text-red-500 border-2 border-red-500 hover:bg-red-500 hover:text-white rounded" />
                            </button>
                        </div>
                        <div className="mt-4">
                            <NavLink
                                to="/"
                                onClick={handleLinkClick}
                                className={({ isActive }) =>
                                    isActive ? "block px-4 py-2 text-[#00D8A1] font-bold hover:bg-[#00D8A1] hover:text-white " :
                                        "block px-4 py-2 text-gray-900 "}>
                                Home
                            </NavLink>

                            <NavLink
                                to="/about"
                                onClick={handleLinkClick}
                                className={({ isActive }) =>
                                    isActive ? "block px-4 py-2 text-[#00D8A1] font-bold hover:bg-green-600 hover:text-white " :
                                        "block px-4 py-2 text-gray-900 "} >
                                About
                            </NavLink>

                            <NavLink
                                to="/courses"
                                onClick={handleLinkClick}
                                className={({ isActive }) =>
                                    isActive ? "block px-4 py-2 text-[#00D8A1] font-bold hover:bg-green-600 hover:text-white " :
                                        "block px-4 py-2 text-gray-900 "} >
                                Courses
                            </NavLink>

                            <NavLink
                                to="/success"
                                onClick={handleLinkClick}
                                className={({ isActive }) =>
                                    isActive ? "block px-4 py-2 text-[#00D8A1] font-bold hover:bg-green-600 hover:text-white " :
                                        "block px-4 py-2 text-gray-900 "} >
                                Success
                            </NavLink>
                        </div>

                        <div className="mt-4">
                            <button className="px-5 py-3 text-lg ml-4 font-semibold text-white hover:scale-105 transition duration-300 bg-[#00D8A1] rounded">
                                Kids Program
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
