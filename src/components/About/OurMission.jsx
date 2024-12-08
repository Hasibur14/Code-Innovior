import { motion } from "framer-motion";

const OurMission = () => {
    const missionData = [
        {
            title: "WHY",
            description:
                "We are passionate about empowering individuals to transform their lives through the power of coding. We believe that everyone should have access to high-quality, affordable coding education, regardless of their background or experience.",
            image: "https://i.postimg.cc/Lhd0vn5k/why.png",
            alt: "Question Mark",
        },
        {
            title: "WHAT",
            description:
                "We provide a comprehensive range of online programming courses, from beginner-level Web Development to advanced CSE Fundamentals and Advanced Programming Courses. Our courses are designed to be engaging, effective, and tailored to the needs of today’s learners.",
            image: "https://i.postimg.cc/4yHSzzfN/what.png",
            alt: "Target Icon",
        },
        {
            title: "HOW",
            description:
                "We nurture our students in a personalized and supportive environment that fosters confidence and success. Our friendly and dedicated instructors are always available to guide and mentor our students, ensuring they receive the support they need to achieve their coding goals.",
            image: "https://i.postimg.cc/k4pH6jdp/how.png",
            alt: "Puzzle Icon",
        },
    ];

    return (
        <div className="container mx-auto px-4 py-10 md:py-16">
            <h2 className="text-3xl md:text-5xl lg:text-7xl text-center font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-[#CAFFF1] to-[#05B689] z-20">
                Our Mission_
            </h2>
            <div className="grid lg:grid-cols-2 gap-8 lg:mx-[180px] mt-16 text-white font-mondo">
                {missionData.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.2,
                            type: "spring",
                            stiffness: 100,
                        }}
                        className={`p-6 rounded-lg bg-gradient-to-r from-[#0b513f] to-[#01291f] transition-transform transform hover:-translate-y-2 hover:shadow-lg ${item.title === "HOW" ? "lg:col-span-2" : ""
                            }`}
                    >
                        <motion.div
                            whileHover={{
                                background:
                                    "linear-gradient(to right, #05B689, #0b513f)",
                            }}
                            className="p-4 rounded-lg transition-colors duration-300"
                        >
                            <h2 className="text-2xl text-[#05B689] font-bold mb-4 hover:text-amber-600 hover:font-extrabold">
                                {item.title}
                            </h2>
                            <div className="flex flex-col lg:flex-row items-center lg:justify-between">
                                <p className="flex-1">{item.description}</p>
                                <motion.div
                                    whileHover={{ rotate: 10 }}
                                    className="mt-4 lg:mt-0 flex-shrink-0"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.alt}
                                        className={`${item.title === "HOW"
                                            ? "w-36 h-32"
                                            : "w-20 h-20" // Increased size for WHY and WHAT
                                            }`}
                                    />
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default OurMission;
