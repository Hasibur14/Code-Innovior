
import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";
import Navbar from "../components/Shared/Navbar/Navbar";
import { useEffect, useState } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";


const Main = () => {
    const [callButtonExpanded, setCallButtonExpanded] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCallButtonExpanded((prev) => !prev);
        }, 2000); // Toggle every 2 seconds
        return () => clearInterval(interval);
    }, []);


    return (
        <div>
            <Navbar />
            <div className="min-h-[calc(100vh-465px)] bg-black">
                <Outlet></Outlet>
            </div>
            {/* Call Button */}
            <div className="fixed bottom-4 right-4">
                <button
                    className={`flex items-center gap-2 px-4 py-3 bg-green-500 text-white rounded-full shadow-lg transition-all duration-1000 ease-in-out ${callButtonExpanded ? "w-auto" : "w-12 justify-center"
                        }`}
                    onClick={() => alert("Call for details")}
                >
                    <BiSolidPhoneCall />
                    {callButtonExpanded && <span>Call for Details</span>}
                </button>
            </div>
            <Footer />
        </div>
    );
};

export default Main;
