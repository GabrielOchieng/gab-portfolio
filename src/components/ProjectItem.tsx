// "use client";

// import Image, { StaticImageData } from "next/image"; // Added StaticImageData
// import Link from "next/link";
// import React, { useState } from "react";

// // 1. Define the Interface for the Props
// interface ProjectItemProps {
//   title: string;
//   backgroundImg: string | StaticImageData; // Can be a URL string or an imported local image
//   projectUrl: string;
//   projectPara: string;
//   projectCode: string;
//   description: string;
// }

// const ProjectItem: React.FC<ProjectItemProps> = ({
//   title,
//   backgroundImg,
//   projectUrl,
//   projectPara,
//   projectCode,
//   description,
// }) => {
//   const [showDetails, setShowDetails] = useState<boolean>(false);

//   const handleOpenDetails = () => setShowDetails(true);
//   const handleCloseDetails = () => setShowDetails(false);

//   return (
//     <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-linear-to-r from-primary to-secondary transition-all duration-300">
//       <Image
//         className="rounded-xl group-hover:opacity-10 transition-opacity duration-300"
//         src={backgroundImg}
//         alt={title} // Improved accessibility
//         // If backgroundImg is a string, you might need width/height here
//         // If it's a StaticImport, Next.js handles it automatically
//       />

//       {/* Overlay Content */}
//       <div className="hidden group-hover:flex flex-col items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full px-2">
//         <h3 className="text-xl md:text-2xl text-white tracking-wider text-center font-bold">
//           {title}
//         </h3>
//         <p className="pb-2 md:pb-4 pt-2 text-white text-center text-sm md:text-base">
//           {projectPara}
//         </p>

//         <div className="flex gap-1 md:gap-3">
//           <Link href={projectCode} target="_blank" rel="noopener noreferrer">
//             <button className="px-6 cursor-pointer py-1 text-sm md:text-base bg-white text-gray-700 font-bold rounded-lg hover:scale-105 active:scale-95 transition-transform shadow-none normal-case">
//               Code
//             </button>
//           </Link>
//           <Link href={projectUrl} target="_blank" rel="noopener noreferrer">
//             <button className="px-6 cursor-pointer py-1 text-sm md:text-base bg-white text-gray-700 font-bold rounded-lg hover:scale-105 active:scale-95 transition-transform shadow-none normal-case">
//               Demo
//             </button>
//           </Link>
//         </div>

//         <button
//           className="mt-4 text-white font-bold text-sm md:text-base hover:underline underline-offset-4 cursor-pointer bg-transparent shadow-none"
//           onClick={handleOpenDetails}
//         >
//           View More
//         </button>
//       </div>

//       {/* Modal - Improved for CX */}
//       {showDetails && (
//         <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-100 px-4">
//           <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md border-t-4 border-primary">
//             <h2 className="text-2xl font-bold mb-2 text-gray-800">{title}</h2>
//             <p className="text-primary font-semibold text-sm mb-4 uppercase tracking-widest">
//               {projectPara}
//             </p>
//             <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

//             <button
//               className="w-full py-3 bg-primary text-white rounded-xl font-bold hover:opacity-90 transition-opacity"
//               onClick={handleCloseDetails}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProjectItem;

"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface ProjectItemProps {
  title: string;
  backgroundImg: string | StaticImageData;
  projectUrl: string;
  projectPara: string;
  projectCode: string;
  description: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  backgroundImg,
  projectUrl,
  projectPara,
  projectCode,
  description,
}) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-linear-to-r from-primary to-secondary transition-all duration-300 overflow-hidden">
      <Image
        className="rounded-xl group-hover:opacity-10 transition-opacity duration-300"
        src={backgroundImg}
        alt={title}
      />

      {/* --- MOBILE HINT: Visible only on small screens when NOT hovered --- */}
      <div className="absolute bottom-6 right-6 md:hidden group-hover:hidden transition-opacity duration-300">
        <p className="bg-primary/90 text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest shadow-lg animate-pulse">
          Tap for Details
        </p>
      </div>

      {/* Overlay Content */}
      <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full px-2 transition-opacity duration-300 z-10">
        <h3 className="text-xl md:text-2xl text-white tracking-wider text-center font-bold">
          {title}
        </h3>
        <p className="pb-2 md:pb-4 pt-2 text-white text-center text-sm md:text-base">
          {projectPara}
        </p>

        <div className="flex gap-2 md:gap-3">
          <Link href={projectCode} target="_blank" rel="noopener noreferrer">
            <button className="px-6 py-2 cursor-pointer text-sm md:text-base bg-white text-gray-700 font-bold rounded-lg hover:scale-105 active:scale-95 transition-transform shadow-none">
              Code
            </button>
          </Link>
          <Link href={projectUrl} target="_blank" rel="noopener noreferrer">
            <button className="px-6 py-2 cursor-pointer text-sm md:text-base bg-white text-gray-700 font-bold rounded-lg hover:scale-105 active:scale-95 transition-transform shadow-none">
              Demo
            </button>
          </Link>
        </div>

        <button
          className="mt-4 text-white font-bold text-sm md:text-base hover:underline underline-offset-4 cursor-pointer bg-transparent border-none shadow-none"
          onClick={(e) => {
            e.stopPropagation();
            setShowDetails(true);
          }}
        >
          View More
        </button>
      </div>

      {/* Modal */}
      {showDetails && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-9999 px-4">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md border-t-4 border-primary animate-in fade-in zoom-in duration-200">
            <h2 className="text-2xl font-bold mb-2 text-gray-800">{title}</h2>
            <p className="text-primary font-semibold text-sm mb-4 uppercase tracking-widest">
              {projectPara}
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

            <button
              className="w-full py-3 bg-primary text-white rounded-xl font-bold hover:opacity-90 transition-opacity"
              onClick={() => setShowDetails(false)}
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
