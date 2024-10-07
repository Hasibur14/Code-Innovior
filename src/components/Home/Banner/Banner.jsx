import bgImage from "../../../assets/banner.png";
import buttonImage from "../../../assets/kidsBtn.png";

const Banner = () => {
    return (
        <div
            className="relative flex items-center justify-center h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="absolute"></div>
            <div className="relative z-10 font-mono text-center text-white">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4">Let's Innovate_Your Profession</h1>
                <p className="mb-8 text-[#5FEAC7] text-lg font-bold">Our goal is to offer tailored learning experiences and empower <br /> individuals to launch their careers with confidence.</p>
                <button className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white transition-all rounded-md focus:outline-none focus:ring">
                    <span
                        className="absolute inset-0 w-full h-full transition-transform transform rounded-md"
                        style={{
                            transform: 'scale(0)',
                            backgroundImage: `url(${buttonImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    ></span>
                    <span className="relative text-xl font-bold text-white">EXPLORE</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;
