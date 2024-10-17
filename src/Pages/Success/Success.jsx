import { useEffect, useState } from "react";

const Success = () => {

    const [successStory, setSuccessStory] = useState([])

    useEffect(() => {
        fetch("./success.json")
            .then(res => res.json())
            .then(data => setSuccessStory(data))
    }, [])

    return (
        <div className="container mx-auto ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pt-32 ">
                {
                    successStory?.map(success => (
                        <div key={success.id}
                            className="font-mondo max-w-2xl flex gap-8 px-4 py-5 bg-gradient-to-r from-[#0e2722] to-[#00412e]  rounded-lg shadow-md hover:border border-red-500 transition-all duration-300 ">

                            <div className="w-4/12 flex items-center">
                                <img
                                    className="hidden  h-full  rounded sm:block"
                                    src={success.image}
                                    alt="avatar" />
                            </div>
                            <div className="w-8/12">
                                <div className="flex justify-between">
                                    <h4 className="text-lg font-bold font-mono text-white opacity-80">{success.company}</h4>
                                    <a className="px-3 py-1 font-mono text-sm font-bold text-white transition-colors duration-300 transform bg-gradient-to-r from-[#52d1b1] to-[#005841] rounded cursor-pointer">{success.batch}</a>
                                </div>
                                <div className="mt-2 space-y-2">
                                    <h2 className="text-xl font-bold text-white">{success.name}</h2>
                                    <h4 className="text-white text-[14px]">{success.title}</h4>
                                    <p className=" text-white dark:text-gray-300 font-mondo">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. </p>
                                </div>

                                <div className="flex items-center justify-between mt-4">
                                    <a href="#" className="text-orange-600 dark:text-blue-400 hover:underline" tabIndex="0" role="link">Read more</a>

                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Success;