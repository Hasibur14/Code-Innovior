import About from "../../components/Home/About/About";
import Banner from "../../components/Home/Banner/Banner";


const Home = () => {
    return (
        <div className="bg-black">
            <div className="">
                <Banner />
                <About />
            </div>
        </div>
    );
};

export default Home;