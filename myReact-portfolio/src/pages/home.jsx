// // home.jsx 
// import React from "react";
// import myPic from "../assets/images/myPic.jpeg";
// import { FaGithub } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { MdOutlineEmail } from "react-icons/md";
// import { FaWhatsapp } from "react-icons/fa6";
// // import { FaEnvelope, FaGithub } from "react-icons/fa";
// const Home = ()=>{
//     return(
//        <section className="min-h-screen flex items-center">
//         <div className="container px-10">
//             {/* row */}
//             <div className="min-h-screen grid grid-cols-1 md:grid-cols-2  items-center">

//                 {/* left col */}
//                 <div>
//                     <h1 className="text-[20px] md:text-[30px] font-bold mb-[20px]">Hello, I'm Azizullah<br/>
//                     Creative Frontend Web Developer</h1>
//                     <p className="text-gray mb-4">I’m a Frontend Website Developer passionate about creating clean, 
//                         responsive, and user-friendly web experiences. I love turning ideas 
//                         into interactive, modern, and visually 
//                         appealing websites using HTML, CSS, JavaScript, and modern frameworks.</p>

//                     {/* button */}
//                     <div className="flex gap-6 mb-6">
//                         <button className="bg-blue-600 text-white px-6 py-2 rounded-[20px] hover:bg-blue-800 transition">Get started</button>

//                         <button className="bg-blue-600 text-white px-6 py-2 rounded-[20px] hover:bg-blue-800 transition">learn more</button>
//                     </div>
//                     {/* social link */}
//                     <div className="flex  gap-5  text-[30px] md:text-[40px]">
//                         <a href="#" target="_blank"><FaGithub/></a>
//                         <a href="#" target="_blank"><FaLinkedin/></a>
//                         <a href="#" target="_blank"><MdOutlineEmail/></a>
//                         <a href="#" target="_blank"><FaWhatsapp/></a>
//                     </div>
//                 </div>
// {/* right col */}
// <div className="flex items-center justify-center">
//     <img src={myPic} alt="mypic" className="h-100 w-100px rounded-[20px] md:h-130 md:w-130 object-cover" />
// </div>

//             </div>
//         </div>
//        </section>
//     )
// }
// export default Home;

import React from "react";
import myPic from "../assets/images/myPic.jpeg";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Home = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="container px-6 md:px-10 mx-auto">
        {/* row */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">

          {/* left col */}
          <div>
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              Hello, I'm Azizullah <br />
              Creative Frontend Web Developer
            </h1>
            <p className="text-gray-600 mb-6">
              I’m a Frontend Website Developer passionate about creating clean, 
              responsive, and user-friendly web experiences. I love turning ideas 
              into interactive, modern, and visually appealing websites using HTML, CSS, JavaScript, and modern frameworks.
            </p>

            {/* buttons */}
            <div className="flex gap-4 mb-6">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-2xl hover:bg-blue-800 transition">
                Get started
              </button>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-2xl hover:bg-blue-800 transition">
                Learn more
              </button>
            </div>

            {/* social links */}
            <div className="flex gap-5 text-2xl md:text-4xl">
              <a href="#" target="_blank"><FaGithub /></a>
              <a href="#" target="_blank"><FaLinkedin /></a>
              <a href="#" target="_blank"><MdOutlineEmail /></a>
              <a href="#" target="_blank"><FaWhatsapp /></a>
            </div>
          </div>

          {/* right col */}
          <div className="flex items-center justify-center">
            <img
              src={myPic}
              alt="Azizullah"
              className="h-[400px] w-[400px] md:h-125  md:w-132.5 object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;
