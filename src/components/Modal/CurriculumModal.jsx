import React from 'react';

const CurriculumModal = ({ handleDownload, closeDownloadModal }) => {
    return (
        <div>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white text-black p-8 rounded-lg w-1/3">
                    <h2 className="text-xl font-bold mb-4">Download Curriculum</h2>
                    <p>Click below to download the curriculum PDF.</p>
                    <div className='md:flex justify-end gap-10'>
                        <button
                            onClick={handleDownload}
                            className="px-4 py-2 bg-gradient-to-r from-[#175244] to-[#0ac596] hover:scale-105 transition-all duration-500 text-white rounded mt-4"
                        >
                            Download Curriculum
                        </button>
                        <button
                            onClick={closeDownloadModal}
                            className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded mt-4"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurriculumModal;
