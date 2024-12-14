import React from 'react';

const BookFreeClassModal = ({ closeBookingModal }) => {
    return (
        <div>
            <div className="fixed inset-0  bg-black bg-opacity-50  flex justify-center items-center z-50">
                <div className="bg-white p-8 rounded-lg w-5/6  lg:w-1/3">
                    <h2 className="text-xl text-black font-bold mb-4">Book Your Free Class</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-black">Name</label>
                            <input type="text" className="w-full p-2 border rounded" placeholder="Enter your name" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-black">Email</label>
                            <input type="email" className="w-full p-2 border rounded" placeholder="Enter your email" />
                        </div>
                        <div className="flex justify-end gap-4">
                            <button
                                type="button"
                                onClick={closeBookingModal}
                                className="px-4 py-2 bg-transparent text-rose-500 hover:text-rose-700 hover:bg-rose-300 hover:bg-opacity-50 rounded"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-2 bg-gradient-to-r from-[#175244] to-[#0ac596] hover:opacity-80 text-white rounded"
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
