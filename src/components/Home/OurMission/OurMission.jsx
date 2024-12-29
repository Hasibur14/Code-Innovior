import image from "../../../assets/image.png";
import missionBg from "../../../assets/ourMission.png";

const OurMission = () => {
    return (
        <div className="pb-16">
            <div className="relative flex justify-center items-center"
                style={{
                    backgroundImage: `url(${missionBg})`,
                    height: '200px',
                    width: '90%',
                    backgroundPosition: 'center',
                    marginLeft: '40px'
                }}>
                <h2 className="absolute mb-4 text-3xl md:text-4xl lg:text-6xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-[#CAFFF1] to-[#05B689] z-20">
                    Our Mission
                </h2>
            </div>
            <section className="container mx-auto max-w-7xl lg:flex justify-between md:p-8 ">
                <div className="w-full lg:w-[55%] p-2 md:p-4">
                    <img
                        src={image}
                        alt="Mission"
                        className="w-full h-[266] object-cover bg-[#0b3b2e] p-3 rounded-xl opacity-90 hover:opacity-100"
                    />
                </div>
                <div className="w-full lg:w-[45%] p-4 font-mono  space-y-14 opacity-90">
                    <p className="text-lg text-white mt-4 text-justify">
                        We are the appropriate technology education partner to support and assist you in all of your endeavors to improve your skills and professional abilities in order to compete in the digital job market. On the other side, there are many outstanding students in our rural areas who want to pursue a career.
                    </p>
                    <p className="text-lg text-white mt-4 text-justify">
                        We are the appropriate technology education partner to support and assist you in all of your endeavors to improve your skills and professional abilities in order to compete in the digital job market. On the other side, there are many outstanding students in our rural areas who want to pursue a career.
                    </p>
                </div>
            </section>
        </div >
    );
};

export default OurMission;
