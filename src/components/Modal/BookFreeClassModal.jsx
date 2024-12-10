import React from 'react';

const BookFreeClassModal = ({ closeBookingModal }) => {
    return (
        <div>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-gray-400 bg-opacity-60 p-8 rounded-lg w-1/3">
                    <h2 className="text-xl font-bold mb-4">Book Your Free Class</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block">Name</label>
                            <input type="text" className="w-full p-2 border" placeholder="Enter your name" />
                        </div>
                        <div className="mb-4">
                            <label className="block">Email</label>
                            <input type="email" className="w-full p-2 border" placeholder="Enter your email" />
                        </div>
                        <div className="flex justify-end gap-4">
                            <button
                                type="button"
                                onClick={closeBookingModal}
                                className="px-4 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
                            >
                                Book Now
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookFreeClassModal;
