import React from 'react';

const faqData = [
    {
        question: "What types of courses do you offer?",
        answer: "We offer a variety of courses in UI/UX Design, Web Development, Mobile App Development, Cyber Security, Software Quality Assurance (SQA), and more. Each course is designed to provide practical, industry-focused training."
    },
    {
        question: "Are there internship opportunities available?",
        answer: "Yes, we provide internship opportunities to help you gain real-world experience and prepare you for a professional career."
    },
    {
        question: "Do you offer job placement support?",
        answer: "Absolutely! We have a dedicated placement support team to assist you in finding the right job after completing your course."
    },
    {
        question: "Are your courses suitable for beginners?",
        answer: "Our courses typically range from 3 to 6 months, depending on the subject and learning pace."
    },
    {
        question: "What tools and technologies will I learn?",
        answer: "We offer both online and offline options to cater to your needs and preferences."
    },
    {
        question: "Do I receive a certificate after completing the course?",
        answer: "We offer both online and offline options to cater to your needs and preferences."
    },
    {
        question: "Are your programs online or on-campus?",
        answer: "We offer both online and offline options to cater to your needs and preferences."
    },
    {
        question: "What makes your courses different from others?",
        answer: "We offer both online and offline options to cater to your needs and preferences."
    },
];

const Faq = () => {
    return (
        <div className="container mx-auto font-mondo text-white py-14 md:py-28">
            <h2 className="my-16 text-3xl md:text-5xl lg:text-7xl text-center font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-[#CAFFF1] to-[#05B689] z-20">
                Frequently Asked Questions (FAQ)_
            </h2>
            <div className="lg:flex gap-20">
                <div className="lg:w-1/2">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className="collapse collapse-plus border-b border-[#05B689]"
                        >
                            <input
                                type="radio"
                                name="faq-accordion"
                                defaultChecked={index === 0}
                            />
                            <div className="collapse-title text-xl font-medium">
                                {item.question}
                            </div>
                            <div className="collapse-content text-gray-300">
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="lg:w-1/2">
                    <img
                        src="https://i.postimg.cc/zfHSxvvt/corporate-environment-1.webp"
                        alt="Team"
                        className=" shadow-md p-5 bg-gray-500 bg-opacity-50 rounded-xl mt-14"
                    />
                </div>
            </div>
        </div>
    );
};

export default Faq;
