import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const Modal = ({ isOpen, onClose, testimonial }) => {
    if (!isOpen || !testimonial) return null; 

    return (
        <dialog className="modal modal-open ">
            <div className="modal-box  bg-[#23594c] bg-opacity-70 rounded-3xl border-2 border-green-600 md:max-w-lg md:w-full">
                <button
                    className="absolute top-4 right-4 flex justify-center items-center border border-red-600 text-red-500 hover:text-white hover:bg-red-500 p-1 rounded-full"
                    onClick={onClose}
                >
                    <IoCloseOutline className="text-xl" />
                </button>
                <div className="flex flex-col text-lg text-[#8ef0eb] font-light p-10 justify-between mt-5">
                    <div className="flex items-start mb-4 text-justify">
                        <p>{testimonial.message}</p>
                    </div>
                    <div className="flex space-x-4 mt-5">
                        <img
                            alt="person"
                            src={testimonial.image}
                            className="object-cover w-16 h-16 rounded-full shadow text-white"
                        />
                        <div className="flex flex-col space-y-1">
                            <h2 className="text-[17px] font-semibold">{testimonial.name}</h2>
                            <h2 className="text-sm opacity-70 font-semibold">{testimonial.title}</h2>
                            <span className="text-[15px]">{testimonial.company}</span>
                        </div>
                    </div>
                </div>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button className="hidden">close</button>
            </form>
        </dialog>
    );
};

export default Modal;
