import About from "../../components/Home/About/About";
import Banner from "../../components/Home/Banner/Banner";
import ConnectUs from "../../components/Home/ConnectUs/ConnectUs";
import Feature from "../../components/Home/Feature/Feature";
import OurCourse from "../../components/Home/OurCourse/OurCourse";
import OurMission from "../../components/Home/OurMission/OurMission";
import SuccessStory from "../../components/Home/SuccessStory/SuccessStory";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Home = () => {
    return (
        <div className="bg-black">
                <Banner />
                <Feature />
                <OurCourse />
                <ConnectUs />
                <SuccessStory />
                <OurMission />  
        </div>
    );
};

export default Home;