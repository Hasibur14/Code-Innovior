import Journey from "../../components/About/Journey/Journey";
import OurMission from "../../components/About/OurMission/OurMission";
import Slider from "../../components/keen-slide/Slider";


const About = () => {
    return (
        <div className="mx-4 md:mx-0">
            <Journey />
            <OurMission />
            <Slider/>
        </div>
    );
};

export default About;