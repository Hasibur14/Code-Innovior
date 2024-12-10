import { useEffect, useState } from 'react';
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
    const [successStory, setSuccessStory] = useState([]);

    useEffect(() => {
        fetch("/success.json")
            .then((res) => res.json())
            .then((data) => {
                setSuccessStory(data);
            });
    }, []);

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
                        {successStory?.map((testimonial, index) => (
                            // card 
                            <SwiperSlide
                                key={testimonial.id}
                                className={`w-[350px] h-[600px] bg-gradient-to-r ${bgColors[index % 4]} text-white rounded-lg p-8 flex flex-col justify-between`}
                            >
                                {/* Top Section */}
                                <div className="flex-grow">
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
