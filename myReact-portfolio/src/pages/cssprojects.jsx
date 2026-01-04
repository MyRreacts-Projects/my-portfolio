//cssprojects.jsx 
// import React from "react";
// const CssProjects = ()=>{
//     return(
//        <section>

//         {/* heading */}
//         <h2>My Css Projects</h2>
//         {/* short description */}
//         <p></p>
//         {/* Projects Grid */}
//         <div>
//             {CssProjects.map((projects)=>{
//              <div></div>
//             })}
//         </div>
//        </section>
//     )
// }
// export default CssProjects;






import React from "react";
import mybindle from "../assets/cssImages/mybindle.PNG";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const cssProjects = [
  {
    id: 1,
    title: "MyBindle Landing Page",
    image: mybindle,
    live: "https://your-live-link.com",
    github: "https://github.com/your-repo",
  },
  {
    id: 2,
    title: "Creative CSS Website",
    image: mybindle,
    live: "https://your-live-link.com",
    github: "https://github.com/your-repo",
  },
  {
    id: 3,
    title: "Responsive UI Project",
    image: mybindle,
    live: "https://your-live-link.com",
    github: "https://github.com/your-repo",
  },
  {
    id: 4,
    title: "Modern Layout Design",
    image: mybindle,
    live: "https://your-live-link.com",
    github: "https://github.com/your-repo",
  },
];

const CssProjects = () => {
  return (
    <section className="py-24 px-4 max-w-[1280px] mx-auto bg-gray-50">
      {/* Heading */}
      <h2 className="text-[25px] md:text-[35px] lg:text-[50px] text-center mb-4 text-gray-900 font-medium">
        My CSS Projects
      </h2>
      <p className="text-center text-gray-500 mb-14 max-w-4xl mx-auto text-base md:text-lg">
This section showcases my CSS-based projects where I focused
         on creating visually appealing and responsive layouts. These
          projects highlight my skills in styling with Flexbox, Grid, 
          media queries, transitions, and animations.Each project is 
          designed to improve user experience and aesthetics, with a
           live preview and GitHub link available for every build.
      </p>

      {/* Grid: 2 cards per row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cssProjects.map((project) => (
          <div
            key={project.id}
            className="relative rounded-[24px] overflow-hidden transition-transform duration-500 hover:-translate-y-4 hover:scale-105 border border-gray-200 bg-white"
          >
            {/* Gradient border glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 blur opacity-40 rounded-3xl"></div>

            {/* Card content */}
            <div className=" relative bg-white rounded-3xl overflow-hidden">
              {/* Image */}
              <div className="relative h-72 overflow-hidden rounded-t-3xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                {/* Overlay info on hover */}
                <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-6 opacity-0 hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-white text-2xl font-bold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Responsive and modern CSS project demonstrating layout, animations, and clean UI.
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="p-6 flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-xl shadow-lg hover:scale-105 transform trasition"
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
};

export default CssProjects;


