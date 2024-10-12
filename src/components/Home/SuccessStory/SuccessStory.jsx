import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa6";
import successBg from "../../../assets/success.png";
import Modal from "../../Modal/SuccessModal.jsx";

const SuccessStory = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTestimonial, setSelectedTestimonial] = useState(null);

    // Auto slide functionality
    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prev) => (prev === dataInfo.length - 1 ? 0 : prev + 1));
        }, 3000);

        return () => clearInterval(slideInterval);
    }, []);

    const bgColors = [
        "from-[#5D3619] to-[#120818]",
        "from-[#1D0D64] to-[#0F0620]",
        "from-[#205960] to-[#0F0D22]",
        "from-[#5F0D67] to-[#15061F]",
    ];

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedTestimonial(null);
    };

    const truncateMessage = (message) => {
        const words = message.split(" ");
        return words.length > 25 ? words.slice(0, 25).join(" ") + "" : message;
    };

    const handleOpenModal = (testimonial) => {
        setSelectedTestimonial(testimonial);
        setIsModalOpen(true);
    };

    return (
        <div
            className="relative flex flex-col justify-center md:h-[1064px] items-center overflow-hidden  font-mondo"
            style={{
                backgroundImage: `url(${successBg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '1064px',
            }} >
            <div className="flex  font-mono justify-center items-center  space-y-4">
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#CAFFF1] to-[#05B689] relative md:mb-5">
                    Success Story_
                    <span className="block absolute left-0 w-3/12 h-3  bg-gradient-to-r from-[#5DEDC8] to-[#005841]
                    bottom-[-24px] md:ml-44"></span>
                </h1>
            </div>
            {/* Testimonial cards */}
            <div className="flex gap-10 overflow-hidden w-full mt-36 px-5 justify-center">
                {dataInfo?.map((testimonial, index) => (
                    <div
                        key={testimonial.id}
                        className={`w-[310px] md:w-[440px] md:h-[300px] transition-transform duration-700 ease-in-out flex-shrink-0 p-6 bg-gradient-to-r ${bgColors[index % 4]} text-white rounded-lg`}
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        <div className="flex justify-between mb-5">
                            <FaQuoteLeft className="text-3xl" />
                            <span className="px-3 py-1 bg-gradient-to-r flex text-center justify-center from-[#E95A5D] to-[#ED1377] rounded text-[15px]">{testimonial.batch}</span>
                        </div>
                        <div className="flex flex-col justify-between">
                            <div className="flex items-start mb-4 text-justify">
                                <p>
                                    {truncateMessage(testimonial.message)}
                                    <a
                                        className="text-orange-600 cursor-pointer"
                                        onClick={() => handleOpenModal(testimonial)}> ...More</a>
                                </p>
                            </div>
                            <div className="flex space-x-4 mt-5">
                                <img
                                    alt="person"
                                    src={testimonial.image}
                                    className="object-cover w-16 h-16 rounded-full shadow text-white"
                                />
                                <div className="flex flex-col space-y-1">
                                    <h2 className="text-[17px] font-semibold">{testimonial.name}</h2>
                                    <h2 className="text-sm opacity-70 font-semibold ">{testimonial.title}</h2>
                                    <span className="text-[15px]">{testimonial.company}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal to display selected testimonial */}
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                testimonial={selectedTestimonial}
            />
        </div>
    );
};

export default SuccessStory;







const dataInfo = [
    {
        "id": 1,
        "name": "Mahabub Saki",
        "title": "Front End Developer",
        "company": "S7works",
        "batch": "Batch 5",
        "message": "They helped me build my portfolio and LinkedIn profile. During the course, I learned valuable skills that boosted my confidence. I now feel equipped to tackle real-world challenges.",
        "image": "https://i.postimg.cc/vm5mnvSj/images.jpg"
    },
    {
        "id": 2,
        "name": "Md. Moniruzzaman",
        "title": "Software Engineer",
        "company": "Newtech technology",
        "batch": "Batch 5",
        "message": "Enrolling in this course was the best decision of my life. As a non-CSE student, I gained practical knowledge and experience. The support from the Phero team, especially Jhankai bhai, was invaluable.",
        "image": "https://i.postimg.cc/vm5mnvSj/images.jpg"
    },
    {
        "id": 3,
        "name": "Md. Adnan Shafiq",
        "title": "Support Engineer",
        "company": "Dorik",
        "batch": "Batch 9",
        "message": "I don’t have an interesting story, but the controlled and reward-based delivery system helped me stay on track. It encouraged me to push my limits and meet deadlines. I am now more productive than ever.",
        "image": "https://i.postimg.cc/vm5mnvSj/images.jpg"
    },
    {
        "id": 4,
        "name": "Md. Solaiman",
        "title": "Front End Developer",
        "company": "bdCalling IT",
        "batch": "Batch 9",
        "message": "সত্যি কথা বলতে, আমার জীবনের গতিপথ পরিবর্তনে সবচেয়ে বড় ভূমিকা প্রোগ্রামিং হিরো এবং তাদের শিক্ষণ পদ্ধতি। আমি খুব অল্প সময়ে অনেক কিছু শিখেছি। এর ফলে আমি আমার ক্যারিয়ারের নতুন দিগন্ত খুলতে পেরেছি।",
        "image": "https://i.postimg.cc/vm5mnvSj/images.jpg"
    },
    {
        "id": 5,
        "name": "Rahul Sharma",
        "title": "Full Stack Developer",
        "company": "Tech Solutions",
        "batch": "Batch 10",
        "message": "The course structure is amazing! It took me from a beginner to a professional in just a few months. I gained hands-on experience through practical projects, which made the learning process enjoyable and effective.",
        "image": "https://i.postimg.cc/vm5mnvSj/images.jpg"
    },
    {
        "id": 6,
        "name": "Sarah Khan",
        "title": "UI/UX Designer",
        "company": "Creative Minds",
        "batch": "Batch 8",
        "message": "I never thought I could design user interfaces so effectively. The course guided me at every step, helping me understand user experience principles. I now create designs that truly resonate with users.",
        "image": "https://i.postimg.cc/vm5mnvSj/images.jpg"
    },
    {
        "id": 7,
        "name": "Ahmed Farhan",
        "title": "Backend Developer",
        "company": "Innovate IT",
        "batch": "Batch 11",
        "message": "The practical sessions and projects were incredibly useful. I learned more than just theory and can now apply my skills confidently. This course has set a solid foundation for my career.",
        "image": "https://i.postimg.cc/vm5mnvSj/images.jpg"
    },
    {
        "id": 8,
        "name": "Jessica Lee",
        "title": "Data Scientist",
        "company": "DataWorks",
        "batch": "Batch 7",
        "message": "The mentorship and real-world projects prepared me for my data science role at DataWorks. I learned how to analyze data effectively and derive insights. The experience was invaluable for my career.",
        "image": "https://i.postimg.cc/vm5mnvSj/images.jpg"
    },
    {
        "id": 9,
        "name": "Samuel Wright",
        "title": "DevOps Engineer",
        "company": "CloudSphere",
        "batch": "Batch 6",
        "message": "Amazing experience! The hands-on labs gave me the confidence to manage cloud infrastructure effectively. I feel well-prepared for the challenges of a DevOps role. This training has truly transformed my skill set.",
        "image": "https://i.postimg.cc/vm5mnvSj/images.jpg"
    },
    {
        "id": 10,
        "name": "Maria Gomez",
        "title": "Frontend Developer",
        "company": "PixelPerfection",
        "batch": "Batch 12",
        "message": "With their help, I was able to land my dream job as a frontend developer at PixelPerfection. The skills I acquired during the course were directly applicable in my interviews. I am grateful for this opportunity.",
        "image": "https://i.postimg.cc/vm5mnvSj/images.jpg"
    },
    {
        "id": 11,
        "name": "Lucas Martins",
        "title": "Mobile App Developer",
        "company": "AppHub",
        "batch": "Batch 7",
        "message": "The mobile app development course was comprehensive and very practical. It helped me build apps from scratch, covering everything from design to deployment. I now feel confident in my app development skills.",
        "image": "https://i.postimg.cc/vm5mnvSj/images.jpg"
    },
    {
        "id": 12,
        "name": "Hiba Noor",
        "title": "Machine Learning Engineer",
        "company": "ML Solutions",
        "batch": "Batch 10",
        "message": "I was able to understand complex ML algorithms and apply them in real-world projects thanks to the course. The supportive environment encouraged my growth. I now work confidently in machine learning.",
        "image": "https://i.postimg.cc/vm5mnvSj/images.jpg"
    },
    {
        "id": 13,
        "name": "David Kim",
        "title": "Cybersecurity Analyst",
        "company": "SecureTech",
        "batch": "Batch 9",
        "message": "The cybersecurity training was in-depth and very current. I now work confidently in my role as a security analyst, knowing I have the skills to protect systems. The course was a game-changer for me.",
        "image": "https://i.postimg.cc/vm5mnvSj/images.jpg"
    },
    {
        "id": 14,
        "name": "Anika Singh",
        "title": "Software Engineer",
        "company": "BrightTech",
        "batch": "Batch 11",
        "message": "Their structured learning path and constant support made me the software engineer I am today. I appreciate the real-world applications we worked on, which helped bridge the gap between theory and practice.",
        "image": "https://i.postimg.cc/vm5mnvSj/images.jpg"
    },
    {
        "id": 15,
        "name": "Mohammed Ali",
        "title": "DevOps Engineer",
        "company": "Buildify",
        "batch": "Batch 8",
        "message": "I highly recommend this program for anyone interested in DevOps. The practical labs were really helpful and provided hands-on experience. I feel ready to tackle any challenges in my new role.",
        "image": "https://i.postimg.cc/vm5mnvSj/images.jpg"
    },
    {
        "id": 16,
        "name": "Sophia Brown",
        "title": "Digital Marketing Specialist",
        "company": "AdOptimize",
        "batch": "Batch 7",
        "message": "The digital marketing course is the best I've taken. It covers everything from SEO to social media marketing. The knowledge gained has significantly improved my campaigns and results.",
        "image": "https://i.postimg.cc/vm5mnvSj/images.jpg"
    },
    {
        "id": 17,
        "name": "Leonardo Rossi",
        "title": "Data Analyst",
        "company": "DataSync",
        "batch": "Batch 6",
        "message": "I was able to transition to a data analyst role seamlessly thanks to the course's project-based approach. The practical skills I learned are now invaluable in my daily work. I truly recommend this course to others.",
        "image": "https://i.postimg.cc/vm5mnvSj/images.jpg"
    },
    {
        "id": 18,
        "name": "Emily Green",
        "title": "Content Writer",
        "company": "CopyPro",
        "batch": "Batch 9",
        "message": "This program honed my writing skills and taught me the best practices in the content industry. I now feel more confident in my ability to produce engaging content. It has opened many doors for my career.",
        "image": "https://i.postimg.cc/vm5mnvSj/images.jpg"
    },
    {
        "id": 19,
        "name": "Liam O'Connor",
        "title": "Web Developer",
        "company": "SiteMasters",
        "batch": "Batch 10",
        "message": "My experience was transformative! The web development course provided hands-on experience that was crucial for my learning. I now confidently build responsive websites that meet client needs.",
        "image": "https://i.postimg.cc/vm5mnvSj/images.jpg"
    },
    {
        "id": 20,
        "name": "Isabella Carter",
        "title": "Graphic Designer",
        "company": "DesignLab",
        "batch": "Batch 12",
        "message": "This course gave me a solid foundation in graphic design. The feedback from instructors was invaluable, and I learned to use industry-standard tools effectively. I’m now creating designs that impress clients.",
        "image": "https://i.postimg.cc/vm5mnvSj/images.jpg"
    },
    {
        "id": 21,
        "name": "Nina Patel",
        "title": "SEO Specialist",
        "company": "RankRise",
        "batch": "Batch 8",
        "message": "The SEO training was thorough and up-to-date. I learned techniques that significantly boosted my website rankings. I am now a confident SEO specialist, equipped to handle various challenges.",
        "image": "https://i.postimg.cc/vm5mnvSj/images.jpg"
    },
    {
        "id": 22,
        "name": "Oliver Taylor",
        "title": "Blockchain Developer",
        "company": "BlockTech",
        "batch": "Batch 9",
        "message": "The blockchain development course was engaging and informative. I gained hands-on experience with real projects, which helped solidify my understanding of blockchain technology. I’m excited to work in this innovative field.",
        "image": "https://i.postimg.cc/vm5mnvSj/images.jpg"
    }
];


