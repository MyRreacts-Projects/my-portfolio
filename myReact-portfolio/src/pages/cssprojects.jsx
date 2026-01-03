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
    <section className="py-20 px-4 max-w-7xl mx-auto">
      {/* Heading */}
      <h2 className="text-4xl font-extrabold text-center mb-4">
        CSS Projects
      </h2>

      <p className="text-center text-gray-500 mb-14 max-w-2xl mx-auto">
        Hand-crafted UI projects focusing on clean layouts, responsiveness,
        and modern CSS techniques.
      </p>

      {/* 👇 GRID UPDATED HERE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
        {cssProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border">
            {/* Image */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-6">
              <img
                src={project.image}
                alt={project.title}
                className="w-full max-h-72 object-contain rounded-2xl"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                {project.title}
              </h4>

              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2.5 rounded-xl hover:opacity-90 transition"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 border border-gray-800 py-2.5 rounded-xl hover:bg-gray-900 hover:text-white transition"
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
