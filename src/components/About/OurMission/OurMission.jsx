import how from "../../../assets/about/how.png";
import what from "../../../assets/about/what.png";
import why from "../../../assets/about/why.png";

const OurMission = () => {


    return (
        <div className="container mx-auto ">
            <h2 className="text-3xl md:text-5xl lg:text-7xl text-center font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-[#CAFFF1] to-[#05B689] z-20">
                Our Mission_
            </h2>
            <div className="lg:mx-[180px] mt-16 text-white font-mondo">
                {/* Why Card */}
                <div className="bg-gradient-to-r from-[#0b513f] to-[#01291f] p-6 rounded-lg">
                    <h2 className="text-2xl text-[#05B689] font-bold mb-4">WHY</h2>
                    <p>
                        We are passionate about empowering individuals to transform their lives through the power of coding. We believe that everyone should have access to high-quality, affordable coding education, regardless of their background or experience.
                    </p>
                    <div className="flex justify-end">
                        <img src={why} alt="Question Mark" className="w-10 h-10" />
                    </div>
                </div>
                <div className="lg:flex gap-12 mt-12">

                    {/* What Card */}
                    <div className="bg-gradient-to-r from-[#0b513f] to-[#01291f] p-6 rounded-lg">
                        <h2 className="text-2xl text-[#05B689] font-bold mb-4">WHAT</h2>
                        <p>
                            We provide a comprehensive range of online programming courses, from beginner-level Web Development to advanced CSE Fundamentals and Advanced Programming Courses. Our courses are designed to be engaging, effective, and tailored to the needs of today’s learners.
                        </p>
                        <div className="flex justify-end">
                            <img src={what} alt="Target Icon" className="w-10 h-10" />
                        </div>
                    </div>

                    {/* How Card */}
                    <div className="bg-gradient-to-r from-[#0b513f] to-[#01291f] p-6 rounded-lg">
                        <h2 className="text-2xl text-[#05B689] font-bold mb-4">HOW</h2>
                        <div className="flex justify-between">
                            <p>
                                We nurture our students in a personalized and supportive environment that fosters confidence and success. Our friendly and dedicated instructors are always available to guide and mentor our students, ensuring they receive the support they need to achieve their coding goals.
                            </p>
                            <div className="flex justify-end">
                                <img src={how} alt="Puzzle Icon" className="w-36 h-32" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurMission;

