import AvailableCourse from "../../components/Courses/AvailableCourse";
import Faq from "../../components/Courses/Faq";
import MeetOurTeam from "../../components/Courses/MeetOurTeam";
import Questions from "../../components/Courses/Questions";
import UnlockFeature from "../../components/Courses/UnlockFeature";


const Courses = () => {
    return (
        <div>
            <AvailableCourse />
            <UnlockFeature />
            <MeetOurTeam />
            <Faq />
            <Questions />

        </div>
    );
};

export default Courses;