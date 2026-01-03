//about.jsx 
import React from "react";
import myPic from "../assets/images/myPic.jpeg";
import { FaArrowRight ,FaDownload} from "react-icons/fa";
const About = ()=>{
    return(
        <section className="w-full py-4 px-4 bg-white mb-8">
            {/* about heading */}
            <h2 className="text-[30px] font-bold text-center">About</h2>
            <p className="mx-auto max-w-[672px] mb-12 mt-4">I am a Frontend Web Developer with a strong understanding of HTML, 
                CSS, Bootstrap, JavaScript, and React.js. I have built multiple
                 CSS and JavaScript projects for practice during my learning 
                 journey and continue to improve my skills through real projects.</p>
                 {/* about content */}
                 <div className="max-w-full items-center mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* left column */}
                    <div>
                        <h3 className="text-[25px] font-semibold mb-4">Hi, I’m Azizullah – a Frontend Developer building 
                            responsive and user-friendly web experiences.</h3>
                            <p className="text-gray-700 mb-6" >Hi, I’m Azizullah, a Frontend Web Developer. 
                                 specialize in building clean, responsive, and
                                  user-friendly websites using HTML, CSS, JavaScript,
                                   Bootstrap and ReactJs. I enjoy turning creative 
                                   ideas into interactive digital experiences and 
                                   always aim for pixel-perfect design and smooth 
                                   functionality. Beyond coding, I love learning new
                                    technologies, solving problems, and continuously
                                     improving my skills to stay up-to-date in the 
                                     fast-moving tech world. I’m currently open to 
                                     freelance projects, internships, and full-time
                                      opportunities where I can contribute and grow
                                       as a developer.</p>
                                       {/* buttons */}
                                       <div className="flex gap-4">
                                        <button className="flex items-center gap-2 md:gap-4 py-2 px-4 md:py-3 md:px-6 text-sm md:text-base bg-blue-600 text-white rounded-[10px]">View My Work <FaArrowRight/></button>
                                        <button className="flex items-center  gap-2 md:gap-4 py-2 px-4 md:py-3 md:px-6 text-sm md:text-base bg-blue-600 text-white rounded-[10px]">Download Resume <FaDownload /></button>

                                       </div>
                    </div>
                    {/* right column */}
                    <div>
                        <img src={myPic} alt="my-pic" className="h-[400px] w-[400px] md:h-125  md:w-132.5 object-cover" />
                    </div>
                 </div>
                 {/* skill section */}
                 <div className="mt-20">
                    {/* className="mx-auto text-center max-w-[672px] mb-12 mt-4" */}
                    <h2 className="text-[30px] font-bold text-center">Skills</h2>
                    <p className="max-w-[672px] mb-12 mt-4 mx-auto">I am a Frontend Web Developer with a strong understanding of 
                        HTML, CSS, Bootstrap, JavaScript, and React.js. I have built
                         multiple CSS and JavaScript projects for practice during my 
                         learning journey and continue to improve my skills through 
                         real projects.</p>
                         {/* skill cards */}
  <div className="gap-6 max-w-full mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-4 justify-center">

                            {/* card1 */}
                            <div className=" bg-[white] rounded-2xl p-6  shadow-[0_0px_12px_rgba(15,23,42,0.25)] flex flex-col h-full">
                                <h4 className="text-[20px] font-semibold mb-2">HTML</h4>
                                <p>Skilled in creating well-structured, semantic web
                                     pages with clean and organized code. Proficient 
                                     in building responsive layouts and using HTML5 
                                     best practices.</p>
                                     {/* progress section */}
                                     <div className="mt-auto">
                                       
  {/* Percentage */}
        <div className="flex justify-end text-red text-sm font-semibold">
          90%
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full w-[90%] bg-sky-500 rounded-full"></div>
        </div>
                                       
                                     </div>
                            </div>
                             {/* card2 */}
                            <div className=" bg-[white] rounded-2xl p-6  shadow-[0_0px_12px_rgba(15,23,42,0.25)] flex flex-col h-full">
                                <h4 className="text-[20px] font-semibold mb-2">CSS</h4>
                                <p>Able to design visually appealing and responsive 
                                    web pages with modern styling techniques. Skilled 
                                    in CSS3 features, layouts, and customizing 
                                    designs for different devices.</p>
                                    {/* progress section */}
                                     <div className="mt-auto">
                                       {/* Percentage */}
        <div className="flex justify-end text-red text-sm font-semibold mb-2">
          90%
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full w-[90%] bg-sky-500 rounded-full"></div>
        </div>
                                     </div>
                            </div>
                             {/* card3 */}
                            <div className=" bg-[white] rounded-2xl p-6  shadow-[0_0px_12px_rgba(15,23,42,0.25)] flex flex-col h-full">
                                <h4 className="text-[20px] font-semibold mb-2">JavaScript</h4>
                                <p>Capable of adding interactivity and dynamic 
                                    behavior to web pages. Skilled in using core 
                                    JavaScript concepts to solve problems and 
                                    enhance user experience.</p>
                                    {/* progress section */}
                                     <div className="mt-auto">
                                        {/* Percentage */}
        <div className="flex justify-end text-red text-sm font-semibold mb-2">
          90%
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full w-[90%] bg-sky-500 rounded-full"></div>
        </div>
                                     </div>
                            </div>
                             {/* card4 */}
                            <div className=" bg-[white] rounded-2xl p-6  shadow-[0_0px_12px_rgba(15,23,42,0.25)] flex flex-col h-full">
                                <h4 className="text-[20px] font-semibold mb-2">React-JS</h4>
                                <p>Gaining hands-on experience with React 
                                    fundamentals, including components, props,
                                     and state management. Currently learning 
                                     advanced concepts to strengthen my frontend
                                      development skills.</p>
                                      {/* progress section */}
                                     <div className="mt-auto">
                                        {/* Percentage */}
        <div className="flex justify-end text-red text-sm font-semibold mb-2">
          90%
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full w-[90%] bg-sky-500 rounded-full"></div>
        </div>
                                     </div>
                    
                            </div>
                            
                         </div>
                 </div>
        </section>
    )
}
export default About;