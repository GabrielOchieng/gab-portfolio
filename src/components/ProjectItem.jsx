"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react"; // Import useState hook

const ProjectItem = ({
  title,
  backgroundImg,
  projectUrl,
  projectPara,
  projectCode,
  description, // Add a new prop for project description
}) => {
  const [showDetails, setShowDetails] = useState(false); // State for modal visibility

  const handleOpenDetails = () => setShowDetails(true); // Function to open modal
  const handleCloseDetails = () => setShowDetails(false); // Function to close modal

  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:flex flex-col items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className=" text-xl md:text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-2 md:pb-4 pt-2 text-white text-center">
          {projectPara}
        </p>
        <div className="flex gap-1 md:gap-3">
          <Link href={projectCode} target="_blank" rel="noopener noreferrer">
            <p className="text-center py-1 md:py-3 rounded-lg text-gray-700 font-bold text-lg cursor-pointer">
              <button className="px-8 py-1 mt-1 md:mt-4 hover:underline">
                Code
              </button>
            </p>
          </Link>
          <Link href={projectUrl} target="_blank" rel="noopener noreferrer">
            <p className="text-center py-1 md:py-3 rounded-lg text-gray-700 font-bold text-lg cursor-pointer">
              <button className="px-8 py-1 mt-1 md:mt-4 hover:underline">
                Demo
              </button>
            </p>
          </Link>
        </div>
        <div>
          {" "}
          <button
            className=" text-center rounded-lg text-white font-bold text-lg cursor-pointer px-4 md:px-8 py-1 md:py-2 mt-2 md:mt-4 hover:underline"
            onClick={handleOpenDetails}
          >
            View More
          </button>
        </div>
      </div>

      {/* Modal content (wrapped in a conditional statement) */}
      {showDetails && (
        <div className="absolute inset-0 bg-gray-500 text-white bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-gradient-to-r from-[#5651e5] to-[#709dff] rounded-lg shadow-lg p-4 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <p className="mb-4">{description}</p>
            {/* Display project description */}
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
              onClick={handleCloseDetails}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectItem;
