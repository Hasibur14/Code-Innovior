
import image from "../../../assets/image.png";
import missionBg from "../../../assets/ourMission.png";

const OurMission = () => {
    return (
        <div className='py-5 md:py-16 h-screen'>
            <div className="relative flex justify-center items-center"
                style={{
                    backgroundImage: `url(${missionBg})`,
                    height: '200px',
                    width: '100%',
                    backgroundPosition: 'center',
                    marginLeft: '40px'
                }}>
                <h2 className="absolute mr-20 mb-4 text-3xl md:text-5xl lg:text-7xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-[#CAFFF1] to-[#05B689] z-20">
                    Our Mission
                </h2>
            </div>
            <section className="container mx-auto lg:flex flex-wrap  md:p-8 ">
                <div className="w-full lg:w-[55%] p-2 md:p-4">
                    <img
                        src={image}
                        alt="Mission"
                        className="w-full h-[266] object-cover"
                    />
                </div>
                <div className="w-full lg:w-[45%] p-4 font-mono  space-y-14">
                    <p className="text-lg text-white mt-4 text-justify">
                        We are the appropriate technology education partner to support and assist you in all of your endeavors to improve your skills and professional abilities in order to compete in the digital job market. On the other side, there are many outstanding students in our rural areas who want to pursue a career.
                    </p>
                    <p className="text-lg text-white mt-4 text-justify">
                        We are the appropriate technology education partner to support and assist you in all of your endeavors to improve your skills and professional abilities in order to compete in the digital job market. On the other side, there are many outstanding students in our rural areas who want to pursue a career.
                    </p>
                    <button className="bg-gradient-to-r from-[#2EB391]  to-[#005841] text-white px-8 py-2 rounded mr-2">Explore</button>
                </div>

            </section>
        </div>
    );
};

export default OurMission;
