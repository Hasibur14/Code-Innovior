
import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";
import Navbar from "../components/Shared/Navbar/Navbar";

const Main = () => {

    return (
        <div>
            <Navbar />
            <div className="min-h-[calc(100vh-465px)] bg-black font-mondo">
                <Outlet></Outlet>
            </div>
            <Footer />
        </div>
    );
};

export default Main;
