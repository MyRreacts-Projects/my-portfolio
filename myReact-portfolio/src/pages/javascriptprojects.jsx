// javascriptprojects.jsx 
import React from "react";
import one from "../assets/jsImages/1.PNG";
import two from "../assets/jsImages/2.PNG";
import three from "../assets/jsImages/3.PNG";
import four from "../assets/jsImages/4.PNG";


import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const jsProjects = [
  {
    id: 1,
    title: "Array Compare",
    image: one,
    live: "https://my-javascript-live-small-projects.github.io/ArrayEqualityTest/",
    github: "https://github.com/My-JavaScript-Live-Small-Projects/ArrayEqualityTest.git",
  },
  {
    id: 2,
    title: "Factorial Calculator",
    image:two,
    live: "https://my-javascript-live-small-projects.github.io/Factorial/",
    github: "https://github.com/My-JavaScript-Live-Small-Projects/Factorial.git",
  },
  {
    id: 3,
    title: "Number Sorter",
    image: three,
    live: "https://my-javascript-live-small-projects.github.io/AscendingOrderMagic/",
    github: "https://github.com/My-JavaScript-Live-Small-Projects/AscendingOrderMagic.git",
  },
  {
    id: 4,
    title: "Letter Counter",
    image: four,
    live: "https://my-javascript-live-small-projects.github.io/LetterCounter/",
    github: "https://github.com/My-JavaScript-Live-Small-Projects/LetterCounter.git",
  }
];


const JavascriptProjects = ()=>{
    return (
       <section className="py-16 px-4 max-w-[1280px] mx-auto bg-gray-50">
         {/* Heading */}
         <h2 className="text-[25px] md:text-[35px] lg:text-[50px] text-center mb-4 text-gray-900 font-medium">
           My Javascript Small Projects
         </h2>
   
         <p className="text-center text-gray-500 mb-14 max-w-4xl mx-auto text-base md:text-lg">
           This section is a showcase of 40+ 
      small to medium JavaScript projects I’ve built while practicing and 
      exploring core web development concepts. Each project focuses on solving 
      a specific problem or adding interactivity to the web — from text 
      manipulation tools and calculators to sliders, quizzes, and dynamic 
      UI features. Together, they reflect my journey of learning by building,
       improving logic, and applying JavaScript in real-world scenarios.
         </p>
   
         {/* Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           {jsProjects.map((project, index) => (
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
                 <div className="p-6 flex gap-4">
                   <a
                     href={project.live}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-xl shadow-lg hover:scale-105 transition"
                   >
                     <FaExternalLinkAlt />
                     Live Demo
                   </a>
   
                   <a
                     href={project.github}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex-1 flex items-center justify-center gap-2 border border-gray-800 py-3 rounded-xl hover:bg-gray-900 hover:text-white transition"
                   >
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
export default JavascriptProjects;