// codingexercise.jsx 
import React from "react";


import first from "../assets/codingexercises/first.PNG";
import third from "../assets/codingexercises/third.PNG";
import fourth from "../assets/codingexercises/fourth.PNG";
import fifth from "../assets/codingexercises/fifth.PNG";


import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const exercises = [
  {
    id: 1,
    title: "coding exercise",
    image: first,
    github: "https://github.com/AzizullahCodes/first-js-logic-building-test.git",
  },
  {
    id: 2,
    title: "coding exercise",
    image:third,
    github: "https://github.com/AzizullahCodes/array-practice-second-assignment.git",
  },
  {
    id: 3,
    title: "coding exercise",
    image: fourth,
    github: "https://github.com/AzizullahCodes/array-third-assignment.git",
  },
  {
    id: 4,
    title: "coding exercise",
    image: fifth,
    github: "https://github.com/AzizullahCodes/array-four-assignment.git",
  }
];
const CodingExercises = ()=>{
    return (
        
       <section className="py-16 px-4 max-w-[1280px] mx-auto bg-gray-50">
        
         {/* Heading */}
         <h2 className="text-[25px] md:text-[35px] lg:text-[50px] text-center mb-4 text-gray-900 font-medium">
           My Javascript Practice Exercises
         </h2>
   
         <p className=" text-center text-gray-500 mb-14 max-w-4xl mx-auto text-base md:text-lg leading-7">
           This section showcases my 52+ coding exercise collections, 
           each containing around 50 problem-solving questions with practical
            JavaScript solutions. From core concepts like DOM manipulation, 
            functions, conditions, loops, arrays, and strings to advanced topics
             such as OOP, promises, APIs, and callbacks — I am building a strong
              problem-solving mindset step by step. This isn’t just a one-time
               effort — I treat coding as daily practice. With every new exercise,
                I sharpen my logic, explore multiple approaches, and push my limits.
                 The journey is ongoing and never stops — because for me, consistent
                  practice is the key to mastery in programming.
         </p>
   
         {/* Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           {exercises.map((project, index) => (
             <div
               key={index}
               className="relative rounded-3xl overflow-hidden border border-gray-200 bg-white transition-transform duration-500 hover:-translate-y-4 hover:scale-105 mb-2"
             >
               {/* Gradient glow */}
               <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 blur opacity-40 rounded-3xl"></div>
   
               {/* Card content */}
               <div className="relative bg-white rounded-3xl overflow-hidden">
   
                 {/* 🔹 TOP TEXT (NOT BUTTON, NOT IMAGE) */}
                 <div className="px-6 pt-6 pb-4">
                   <h3 className="text-base md:text-[25px]  font-semibold md:font-bold text-gray-900">
                     Project {project.id}
                   </h3>
                   <p className="text-sm text-gray-500">
                     {project.title}
                   </p>
                 </div>
   
                 {/* Image */}
                 <div className="relative h-48 sm:h-64 md:h-72 overflow-hidden">
                   <img
                     src={project.image}
                     alt={project.title}
                     className="w-full h-full object-contain bg-gray-100"
                   />
                 </div>
   
                 {/* Buttons */}
                                 <div className="p-4 mx-auto flex justify-center">
<a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="w-32 sm:w-40 flex items-center justify-center gap-2 border border-gray-800 py-1.5 sm:py-3 rounded-lg  hover:bg-gray-900 hover:text-white transition">
    <FaGithub />
    GitHub
  </a>
</div>

                   
   
               </div>
             </div>
           ))}
         </div>
       </section>
     );
}
export default CodingExercises;