import { useState } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Modal from '../../Modal/SuccessModal';
import successBg from "../../../assets/success.png";

const SuccessStory = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTestimonial, setSelectedTestimonial] = useState(null);

    const bgColors = [
        "from-[#5D3619] to-[#120818]",
        "from-[#1D0D64] to-[#0F0620]",
        "from-[#205960] to-[#0F0D22]",
        "from-[#5F0D67] to-[#15061F]",
    ];

    const truncateMessage = (message) => {
        const words = message.split(" ");
        return words.length > 30 ? `${words.slice(0, 30).join(" ")}...` : message;
    };

    const handleOpenModal = (testimonial) => {
        setSelectedTestimonial(testimonial);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedTestimonial(null);
    };

    return (
        <div
            className="md:h-[1064px] items-center overflow-hidden font-mondo py-20 lg:py-40"
            style={{
                backgroundImage: `url(${successBg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '1064px',
            }}
        >
            <div className="flex justify-center items-center space-y-4">
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#CAFFF1] to-[#05B689] relative md:mb-5">
                    Success Story_
                    <span className="block absolute left-0 w-3/12 h-3 bg-gradient-to-r from-[#5DEDC8] to-[#005841] bottom-[-24px] md:ml-44"></span>
                </h1>
            </div>
            <div>
                <div className="font-mondo mt-44">
                    <Swiper
                        slidesPerView={1}
                        loop
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        speed={8000}
                        modules={[Autoplay]}
                        breakpoints={{
                            480: { slidesPerView: 1, spaceBetween: 10 },
                            768: { slidesPerView: 3, spaceBetween: 15 },
                            1024: { slidesPerView: 4, spaceBetween: 20 },
                            1500: { slidesPerView: 5, spaceBetween: 20 },
                        }} >
                        {dataInfo?.map((testimonial, index) => (
                            <SwiperSlide
                                key={testimonial.id}
                                className={`w-[350px] h-[600px] bg-gradient-to-r ${bgColors[index % 4]} text-white rounded-lg p-8 flex flex-col justify-between`}
                            >
                                {/* Top Section */}
                                <div>
                                    <div className="flex justify-between items-center">
                                        <FaQuoteLeft className="text-3xl opacity-50" />
                                        <span className="font-mono px-3 py-1 bg-gradient-to-r from-[#c145a8] to-[#d7065a] rounded text-[15px]">
                                            {testimonial.batch}
                                        </span>
                                    </div>
                                    <p className="text-justify mt-10 opacity-85">
                                        {truncateMessage(testimonial.message)}
                                        <span
                                            className="text-orange-600 cursor-pointer"
                                            onClick={() => handleOpenModal(testimonial)}
                                        >
                                            More
                                        </span>
                                    </p>
                                </div>

                                {/* Bottom Section */}
                                <div className="flex items-center mt-10">
                                    <img
                                        alt="person"
                                        src={testimonial.image}
                                        className="w-14 h-14 rounded-full shadow-lg"
                                    />
                                    <div className="ml-4">
                                        <h2 className="text-[17px] font-semibold">{testimonial.name}</h2>
                                        <h3 className="text-sm opacity-70">{testimonial.title}</h3>
                                        <span className="text-[15px] opacity-90 font-mono">{testimonial.company}</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            {isModalOpen && (
                <Modal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    testimonial={selectedTestimonial}
                />
            )}
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

];