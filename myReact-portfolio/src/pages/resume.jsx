//resume.jsx 
/* import React from "react";
const Resume = ()=>{
    return(
        <>
        <h1>Resume page</h1>
        </>
    )
}
export default Resume; */

import React from "react";

const Resume = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b1220] p-4">
      
      <div className="w-full max-w-sm rounded-2xl bg-[#0f1b2a] p-6 shadow-lg">
        
        {/* Badge */}
        <span className="inline-block bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-md mb-4">
          HTML
        </span>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-6">
          Skilled in creating well-structured, semantic web pages with clean
          and organized code. Proficient in building responsive layouts and
          using HTML5 best practices.
        </p>

        {/* Percentage */}
        <div className="flex justify-end text-white text-sm font-semibold mb-2">
          100%
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full w-full bg-sky-500 rounded-full"></div>
        </div>

      </div>
    </div>
  );
};

export default Resume;
