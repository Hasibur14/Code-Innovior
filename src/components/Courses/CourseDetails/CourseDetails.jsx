import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { LiaHandPointRight } from "react-icons/lia";

const CourseDetails = () => {
  const courseData = useLoaderData();
  const { title, image, courseOutcomes, price, subtitle } = courseData;

  return (
    <div className="min-h-screen bg-black text-white pt-28">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center">{subtitle}</h1>
        <p className="text-center mt-4 text-lg">
          Professional online courses designed for your targeted expertise level.
        </p>
      </div>

      {/* Course Content and Pricing Section */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Course Content */}
        <div className="col-span-2 bg-zinc-800 bg-opacity-50 p-6 rounded-lg space-y-4">
          <h3 className="badge badge-warning text-lg">{title}</h3>
          <h4 className="text-lg font-semibold">PROGRAM OVERVIEW</h4>
          <p className="text-lg">
            This course covers a comprehensive range of topics, targeting different expertise levels (beginner, intermediate, or advanced).
          </p>
          <h2 className="text-2xl font-semibold mb-4">Course Content</h2>
          <div className="divide-y divide-gray-700">
            {courseOutcomes?.map((content, index) => (
              <details key={index} className="py-4 cursor-pointer group hover:bg-[#18554b] px-4 rounded-md">
                <summary className="flex justify-between items-center text-lg font-medium group-open:text-orange-500">
                  Mission {content.mission}: {content.title}
                  <span className="ml-4">+</span>
                </summary>
                <div className="mt-2 pl-4 text-white">
                  {Array.isArray(content.description) && (
                    <ul>
                      {content.description.map((point, idx) => (
                        <li key={idx} className="flex gap-2">
                          <LiaHandPointRight className="text-lg text-cyan-300" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Pricing Card */}
        <div className="bg-zinc-900 p-6 pb-10 rounded-lg text-center">
          <img src={image} alt="Course Banner" className="w-full rounded-md mb-6" />
          <h3 className="text-2xl font-semibold mb-4">{price}  BDT</h3>
          <Link
            to="https://docs.google.com/forms/d/e/1FAIpQLScaznBotsVDotTS535do76sKZDcEcKXdhpPL9T5BQozJiEDqw/viewform?usp=sharing"
            className="bg-blue-500 px-7 py-4 rounded-md text-white hover:bg-blue-600"
          >
           Enroll Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
