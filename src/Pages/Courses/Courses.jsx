import AvailableCourse from "../../components/Courses/AvailableCourse";
import Faq from "../../components/Courses/Faq";
import MeetOurTeam from "../../components/Courses/MeetOurTeam";
import OurCourse from "../../components/Courses/OurCourse";
import Questions from "../../components/Courses/Questions";
import UnlockFeature from "../../components/Courses/UnlockFeature";


const Courses = () => {
    return (
        <div>
            <AvailableCourse />
            <OurCourse />
            <UnlockFeature />
            <MeetOurTeam />
            <Faq />
            <Questions />

        </div>
    );
};

export default Courses;