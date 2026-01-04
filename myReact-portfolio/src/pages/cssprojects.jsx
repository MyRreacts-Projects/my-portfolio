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
import one from "../assets/cssImages/one.PNG";
import two from "../assets/cssImages/two.PNG";
import three from "../assets/cssImages/three.PNG";
import four from "../assets/cssImages/four.PNG";
import five from "../assets/cssImages/five.PNG";
import six from "../assets/cssImages/six.PNG";
import seven from "../assets/cssImages/seven.PNG";
import eight from "../assets/cssImages/eight.PNG";
import nine from "../assets/cssImages/nine.PNG";
import ten from "../assets/cssImages/ten.PNG";
import eleven from "../assets/cssImages/eleven.PNG";
import twelve from "../assets/cssImages/twelve.PNG";
import thirteen from "../assets/cssImages/thirteen.PNG";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const cssProjects = [
  {
    id: 1,
    title: "MyBindle Landing Page",
    image: one,
    live: "https://my-css-projects.github.io/finalfigma/",
    github: "https://github.com/My-css-projects/finalfigma.git",
  },
  {
    id: 2,
    title: "Figma design to responsive page",
    image:two,
    live: "https://figma-mu-lemon.vercel.app",
    github: "https://github.com/AzizullahCodes/figma.git",
  },
  {
    id: 3,
    title: "Responsive UI Project",
    image: three,
    live: "https://web-02-eight.vercel.app",
    github: "https://github.com/AzizullahCodes/web-02",
  },
  {
    id: 4,
    title: "Mountain web page",
    image: four,
    live: "https://mountain-xi-murex.vercel.app",
    github: "https://github.com/AzizullahCodes/Mountain.git",
  },
   {
    id: 5,
    title: "Furniture web page",
    image: five,
    live: "https://furniture-web-lac.vercel.app/",
    github: "https://github.com/AzizullahCodes/furniture-web.git",
  },
   {
    id: 6,
    title: "Amazon small clone",
    image: six,
    live: "https://amazon-clone-website-brown.vercel.app",
    github: "https://github.com/AzizullahCodes/amazon-clone-website",
  },
   {
    id: 7,
    title: "University web page",
    image: seven,
    live: "https://school-website-nine-neon.vercel.app",
    github: "https://github.com/AzizullahCodes/School-website.git",
  },
   {
    id: 8,
    title: "Sea Show piece shop web page",
    image: eight,
    live: "https://mumtaz-sea-show-piece-online-store.vercel.app/",
    github: "https://github.com/AzizullahCodes/Mumtaz-sea-show-piece-online-store.git",
  },
   {
    id: 9,
    title: "Figma to responsive design two",
    image: nine,
    live: "https://figma-small-web-page.vercel.app",
    github: "https://github.com/AzizullahCodes/figma-small-web-page.git",
  },
   {
    id: 10,
    title: "Figma to responsive design",
    image: ten,
    live: "https://small-figma-to-coding.vercel.app",
    github: "https://github.com/AzizullahCodes/small-figma-to-coding.git",
  },
   {
    id: 11,
    title: "Samll figma to design",
    image: eleven,
    live: "https://figma-design-05.vercel.app",
    github: "https://github.com/AzizullahCodes/figma-design-05.git",
  },
   {
    id: 12,
    title: "Figma to Responsive web page",
    image: twelve,
    live: "https://e-commerce-web-two-nu.vercel.app",
    github: "https://github.com/AzizullahCodes/E-commerce-web.git",
  },
   {
    id: 13,
    title: "Frontend Mentor web page",
    image: thirteen,
    live: "https://azizullahcodes.github.io/practice-web/",
    github: "https://github.com/AzizullahCodes/practice-web.git",
  },
   {
    id: 14,
    title: "Furniture web page",
    image: five,
    live: "https://furniture-web-lac.vercel.app",
    github: "https://github.com/AzizullahCodes/furniture-web.git",
  },
];

const CssProjects = () => {
  return (
    <section className="py-16 px-4 max-w-[1280px] mx-auto bg-gray-50">
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
                    Responsive and modern CSS project converted from figma to responsive design.
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


