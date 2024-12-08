
import AboutUs from "../../components/About/AboutUs";
import Journey from "../../components/About/Journey";
import LearnUs from "../../components/About/LearnUs";
import MeetTeam from "../../components/About/MeetTeam";
import OurMission from "../../components/About/OurMission";
import Questions from "../../components/Courses/Questions";
import Slider from "../../components/keen-slide/Slider";


const About = () => {
    return (
        <div>
            <AboutUs />
            <Journey />
            <OurMission />
            <LearnUs />
            <MeetTeam />
            {/* <Slider /> */}
            <Questions />
        </div>
    );
};

export default About;