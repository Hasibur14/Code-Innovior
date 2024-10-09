import bgImage from "../../../assets/banner.gif";
import buttonImage from "../../../assets/button.png";

const Banner = () => {
    return (
        <div
            className="relative flex items-center justify-center h-[800px] md:h-[1180px] bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }} >
            <div className="relative z-10 font-mono text-center text-white mb-60">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4">
                    Let's Innovate_Your Profession
                </h1>
                <p className="mb-8 text-[#5FEAC7] text-[20px] font-bold">
                    Our goal is to offer tailored learning experiences and empower <br /> individuals to launch their careers with confidence.
                </p>

                <div className="relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white transition-all rounded-md focus:outline-none focus:ring">
                    <span
                        className="absolute inset-0 w-full h-full transition-transform transform rounded-md"
                        style={{
                            backgroundImage: `url(${buttonImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            transition: 'transform 0.3s ease-in-out',
                            zIndex: 0,
                        }}
                    ></span>
                    <span className="relative z-10 p-7 text-xl font-bold text-white transition-transform transform group-hover:scale-0">
                        EXPLORE
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Banner;
