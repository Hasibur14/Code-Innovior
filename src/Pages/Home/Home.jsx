import About from "../../components/Home/About/About";
import Banner from "../../components/Home/Banner/Banner";
import Feature from "../../components/Home/Feature/Feature";
import OurCourse from "../../components/Home/OurCourse/OurCourse";
import OurMission from "../../components/Home/OurMission/OurMission";
import SuccessStory from "../../components/Home/SuccessStory/SuccessStory";




const Home = () => {
    return (
        <div className="bg-black">
            <div className="">
                <Banner />
                <Feature />
                <OurCourse />
                <SuccessStory />
                <OurMission />
            </div>
        </div>
    );
};

export default Home;