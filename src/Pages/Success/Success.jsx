import { useEffect, useState } from "react";
import Modal from "../../components/Modal/SuccessModal";

const Success = () => {
    const [successStory, setSuccessStory] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTestimonial, setSelectedTestimonial] = useState(null);

    useEffect(() => {
       fetch("/success.json")
       .then(res => res.json())
       .then(data => setSuccessStory(data))
    }, []);


    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedTestimonial(null);
    };

    const truncateMessage = (message) => {
        const words = message.split(" ");
        return words.length > 30 ? `${words.slice(0, 30).join(" ")}...` : message;
    };

    const handleOpenModal = (testimonial) => {
        setSelectedTestimonial(testimonial);
        setIsModalOpen(true);
    };

    return (
        <div className="container mx-auto">
            <div className="md:flex justify-between pt-44 lg:mx-16 ">
                <p className="text-2xl font-bold text-[#52d1b1]">Successful Students</p>
                <div className="relative">
                    <select className="block w-52 md:w-72 px-8 py-2 text-black border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300">
                        <option value="" disabled selected>All Batch student</option>
                        {
                            successStory.map(item => (
                                <option key={item.id} className="py-2">{item.batch}</option>
                            ))
                        }
                    </select>
                </div>
            </div>

            {/* Card */}
            <div className="lg:mx-16 grid grid-cols-1 lg:grid-cols-2 gap-16 pt-24 pb-10 px-4 md:px-0">
                {successStory.map(success => (
                    <div key={success.id} className="font-mondo max-w-2xl md:h-[250px] md:flex gap-8 px-4 py-5 bg-gradient-to-r from-[#10352e] to-[#011811] rounded-lg shadow-md hover:border border-red-500 transition-all duration-300">
                        <div className="w-full md:w-4/12 flex items-center">
                            <img className=" h-full rounded " src={success.image} alt="avatar" />
                        </div>
                        <div className="w-full md:w-8/12 mt-5 md:mt-0">
                            <div className="flex justify-between">
                                <h4 className="text-lg font-bold font-mono text-white opacity-80">{success.company}</h4>
                                <a className="px-3 py-1 font-mono text-sm font-bold text-white transition-colors duration-300 transform bg-gradient-to-r from-[#52d1b1] to-[#005841] rounded cursor-pointer">{success.batch}</a>
                            </div>
                            <div className="mt-2">
                                <h2 className="text-xl font-bold text-white">{success.name}</h2>
                                <h4 className="text-white text-[14px] text-lg font-bold font-mono opacity-80">{success.title}</h4>
                                <p className="text-white text-justify mt-2">
                                    {truncateMessage(success.message)}
                                    <a
                                        className="text-orange-600 cursor-pointer"
                                        onClick={() => handleOpenModal(success)}> ...Read More</a>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
                <Modal isOpen={isModalOpen} onClose={closeModal} testimonial={selectedTestimonial} />
            </div>
        </div>
    );
};

export default Success;
