import { useEffect, useState } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { ImSpinner9 } from "react-icons/im";
import Modal from "../../components/Modal/SuccessModal";
import SuccessBanner from "./SuccessBanner";

const Success = () => {
    const [successStory, setSuccessStory] = useState([]);
    const [filteredStories, setFilteredStories] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTestimonial, setSelectedTestimonial] = useState(null);
    const [selectedBatch, setSelectedBatch] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [rowsPerPage, setRowsPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(1);
    const [isRefreshing, setIsRefreshing] = useState(false);

    useEffect(() => {
        fetch("/success.json")
            .then((res) => res.json())
            .then((data) => {
                setSuccessStory(data);
                setFilteredStories(data);
            });
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

    const handleFilterChange = (batch) => {
        setSelectedBatch(batch);
        setCurrentPage(1); // Reset to first page on filter change
        if (batch === "") {
            setFilteredStories(successStory);
        } else {
            const filtered = successStory.filter((story) => story.batch === batch);
            setFilteredStories(filtered);
        }
    };

    const handleRowsPerPageChange = (e) => {
        setRowsPerPage(parseInt(e.target.value, 10));
        setCurrentPage(1); // Reset to first page on rows per page change
    };



    // Search filter logic
    useEffect(() => {
        let results = successStory;
        if (searchQuery) {
            results = successStory.filter(
                (story) =>
                    story.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    story.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    story.message.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }
        if (selectedBatch) {
            results = results.filter((story) => story.batch === selectedBatch);
        }
        setFilteredStories(results);
    }, [searchQuery, selectedBatch, successStory]);

    // Calculate the current stories to display based on pagination
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const currentStories = filteredStories.slice(startIndex, endIndex);

    // Calculate total pages
    const totalPages = Math.ceil(filteredStories.length / rowsPerPage);

    // Reset Function (Refesh)
    const handleReset = () => {
        setIsRefreshing(true);
        setTimeout(() => {
            setSearchQuery("");
            setSelectedBatch("");
            setCurrentPage(1);
            setIsRefreshing(false);
        }, 1000);
    };


    return (
        <div className="py-16">
            <SuccessBanner />
            <div className="container mx-auto">
                {/* Filters and Search Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 rounded-lg p-6 shadow-lg shadow-emerald-900">
                    {/* Search Bar */}
                    <div className="w-full">
                        <label className="text-sm font-semibold text-gray-300">Search</label>
                        <input
                            type="text"
                            value={searchQuery}
                            placeholder="Search by any field"
                            className="mt-2 block w-full px-5 py-4 rounded-lg text-gray-900 shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-none border-2 border-gray-300"
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    {/* Batch Filter Dropdown */}
                    <div className="w-full">
                        <label className="text-sm font-semibold text-gray-300">Batch</label>
                        <select
                            className="mt-2 block w-full px-5 py-4 text-gray-900 border-2 border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            value={selectedBatch}
                            onChange={(e) => handleFilterChange(e.target.value)}
                        >
                            <option value="">All Batch Students</option>
                            {[...new Set(successStory.map((item) => item.batch))].map((batch) => (
                                <option key={batch} value={batch}>
                                    {batch}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Rows Per Page Dropdown */}
                    <div className="w-full">
                        <label htmlFor="rowsPerPage" className="text-sm font-semibold text-gray-300">Rows per page</label>
                        <select
                            id="rowsPerPage"
                            value={rowsPerPage}
                            onChange={handleRowsPerPageChange}
                            className="mt-2 block w-full px-5 py-4 text-gray-900 border-2 border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        >
                            <option value={6}>6</option>
                            <option value={12}>12</option>
                            <option value={20}>20</option>
                            <option value={50}>50</option>
                        </select>
                    </div>

                    {/* Refresh Button */}
                    <div className="flex justify-end mt-7">
                        <button
                            onClick={handleReset}
                            type="button"
                            className="flex items-center gap-3 w-full sm:w-auto px-12 py-4 rounded-lg text-white bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-500 focus:outline-none shadow-md"
                        >
                            <ImSpinner9
                                className={`text-2xl ${isRefreshing ? "animate-spin" : ""}`}
                            />
                            <span>Refresh</span>
                        </button>
                    </div>
                </div>


                {/* Card */}
                <div className="lg:mx-16 grid grid-cols-1 lg:grid-cols-2 gap-16 pt-24 pb-10 px-4 md:px-0">
                    {currentStories.map((success) => (
                        <div
                            key={success.id}
                            className="font-mondo max-w-2xl md:flex gap-8 px-4 py-5 bg-gradient-to-r from-[#2f7853] to-[#013a28] rounded shadow-md hover:border border-red-500 transition-all duration-300"
                        >

                            <div className="w-full md:w-4/12 flex items-center">
                                <img
                                    className="h-full rounded"
                                    src={success.image}
                                    alt="avatar"
                                />
                            </div>
                            <div className="w-full md:w-8/12 mt-5 md:mt-0">
                                <div className="flex justify-between">
                                    <h4 className="text-lg font-bold font-mono text-white opacity-80">
                                        {success.company}
                                    </h4>
                                    <a className="px-3 py-1 font-mono text-sm font-bold text-white transition-colors duration-300 transform bg-gradient-to-r from-[#005841] to-[#09cd9c] rounded cursor-pointer">
                                        {success.batch}
                                    </a>
                                </div>
                                <div className="mt-2">
                                    <h2 className="text-xl font-bold text-white">{success.name}</h2>
                                    <h4 className="text-white text-[15px]  opacity-80">
                                        {success.title}
                                    </h4>
                                    <p className="text-white text-justify mt-2">
                                        {truncateMessage(success.message)}
                                        <a
                                            className="text-orange-600 cursor-pointer"
                                            onClick={() => handleOpenModal(success)}
                                        >
                                            {" "}
                                            ...Read More
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                    <Modal
                        isOpen={isModalOpen}
                        onClose={closeModal}
                        testimonial={selectedTestimonial}
                    />
                </div>

                {/* Pagination */}
                <div className="flex justify-center  gap-10 items-center mt-6">
                    <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 flex text-center gap-2 rounded-lg ${currentPage === 1
                            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                            : "bg-blue-500 text-white hover:bg-blue-600"
                            }`}
                    >
                        <FaLongArrowAltLeft />   Previous
                    </button>
                    <div className="flex gap-2">
                        {Array.from({ length: totalPages }).map((_, pageIndex) => (
                            <button
                                key={pageIndex}
                                onClick={() => setCurrentPage(pageIndex + 1)}
                                className={`px-4 py-2 rounded-lg ${currentPage === pageIndex + 1
                                    ? "bg-orange-500 text-white"
                                    : "bg-gray-200  hover:bg-gray-300"
                                    }`}
                            >
                                {pageIndex + 1}
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 flex justify-center gap-2 rounded-lg ${currentPage === totalPages
                            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                            : "bg-blue-500 text-white hover:bg-blue-600"
                            }`}
                    >
                        Next <FaLongArrowAltRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Success;