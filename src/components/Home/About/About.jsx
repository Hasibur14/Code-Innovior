import bgImage from "../../../assets/aboutkids.png";
import mobileImage from "../../../assets/mobile.png";
const About = () => {
    return (
        <div>
            <div className="py-12 text-center">
                <h2 className="text-2xl md:text-5xl lg:text-7xl font-bold font-mono bg-clip-text text-transparent  bg-gradient-to-r from-[#CAFFF1] to-[#05B689]">
                    Are you Worried About_Kids?
                </h2>
            </div>
            <div className="relative text-white md:py-16  h-[1456px] px-2 md:px-16 lg:px-24"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}>
                <div className="absolute md:mx-[88px] font-mono md:flex items-center justify-center ">
                    <img className="md:h-[1050px] w-[875px] mt-44"
                        src={mobileImage} alt="code Innovior" />

                    <div className="px-2 md:px-0 mt-32">
                        <h2 className="text-2xl lg:text-5xl  font-mono text-[#D5FFF4] mb-14">We Think About Kids To Explore Programming World</h2>
                        <div className="flex justify-between items-center md:h-56 bg-gradient-to-r from-[#00D8A1] to-[#1D725D] rounded-xl p-1 md:p-6 text-white w-5/6">

                            <div className="text-center border-r border-white md:px-6">
                                <h4 className="text-lg">Grades</h4>
                                <h3 className="text-2xl md:text-7xl font-bold">K-5</h3>
                                <p className="mt-2">Learn To Make Authentic</p>
                            </div>
                            <div className="text-center border-r border-white md:px-6">
                                <h4 className="text-lg">Grades</h4>
                                <h3 className="text-2xl md:text-7xl font-bold">6-12</h3>
                                <p className="mt-2">Build Real Working Apps</p>
                            </div>
                            <div className="text-center md:px-6">
                                <h4 className="text-lg">Beyond</h4>
                                <h3 className="text-2xl md:text-7xl font-bold">K-12</h3>
                                <p className="mt-2">Computer Science Adventure</p>
                            </div>
                        </div>
                        <p className="my-3 text-md md:text-lg font-mondo"> WHAT ABOUT SCIENCE, TECHNOLOGY, ENGINEERING, AND MATH? </p>
                        <p className="mb-6 text-md md:text-lg font-mondo"> That's a lot of complicated information crammed into one acronym.</p>

                        {/* Buttons */}
                        <div className="flex text-md md:text-xl font-mondo justify-center md:justify-start space-x-4">
                            <button className="bg-gradient-to-r from-[#00D8A1] to-[#1D725D] hover:bg-[#1D725D] text-white font-semibold py-2 px-7 rounded-lg transition">
                                Explore
                            </button>
                            <button className="bg-gradient-to-r from-[#002A1F] to-[#00674D] hover:bg-[#1D725D] text-white font-semibold py-2 px-7 rounded-lg transition">
                                Watch Videos
                            </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            );
};

            export default About;
