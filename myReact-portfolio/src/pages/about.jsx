//about.jsx 
import React from "react";
import { FaArrowRight ,FaDownload} from "react-icons/fa";
const About = ()=>{
    return(
        <section>
            {/* about heading */}
            <h2>About</h2>
            <p>I am a Frontend Web Developer with a strong understanding of HTML, 
                CSS, Bootstrap, JavaScript, and React.js. I have built multiple
                 CSS and JavaScript projects for practice during my learning 
                 journey and continue to improve my skills through real projects.</p>
                 {/* about content */}
                 <div>
                    {/* left column */}
                    <div>
                        <h3>Hi, I’m Azizullah – a Frontend Developer building 
                            responsive and user-friendly web experiences.</h3>
                            <p>Hi, I’m Azizullah, a Frontend Web Developer. 
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
                                       <div>
                                        <button>View My Work <FaArrowRight/></button>
                                        <button>Download Resume <FaDownload/></button>
                                       </div>
                    </div>
                    {/* right column */}
                    <div>
                        <img src="" alt="" />
                    </div>
                 </div>
                 {/* skill section */}
                 <div>
                    <h2>Skills</h2>
                    <p>I am a Frontend Web Developer with a strong understanding of 
                        HTML, CSS, Bootstrap, JavaScript, and React.js. I have built
                         multiple CSS and JavaScript projects for practice during my 
                         learning journey and continue to improve my skills through 
                         real projects.</p>
                         {/* skill cards */}
                         <div>
                            {/* card1 */}
                            <div>
                                <h4>HTML</h4>
                                <p>Skilled in creating well-structured, semantic web
                                     pages with clean and organized code. Proficient 
                                     in building responsive layouts and using HTML5 
                                     best practices.</p>
                                     <div>
                                       
  {/* Percentage */}
        <div className="flex justify-end text-red text-sm font-semibold mb-2">
          100%
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full w-50 bg-sky-500 rounded-full"></div>
        </div>
                                       
                                     </div>
                            </div>
                             {/* card2 */}
                            <div>
                                <h4>CSS</h4>
                                <p>Able to design visually appealing and responsive 
                                    web pages with modern styling techniques. Skilled 
                                    in CSS3 features, layouts, and customizing 
                                    designs for different devices.</p>
                                     <div>
                                       {/* Percentage */}
        <div className="flex justify-end text-red text-sm font-semibold mb-2">
          100%
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full w-50 bg-sky-500 rounded-full"></div>
        </div>
                                     </div>
                            </div>
                             {/* card3 */}
                            <div>
                                <h4>JavaScript</h4>
                                <p>Capable of adding interactivity and dynamic 
                                    behavior to web pages. Skilled in using core 
                                    JavaScript concepts to solve problems and 
                                    enhance user experience.</p>
                                     <div>
                                        {/* Percentage */}
        <div className="flex justify-end text-red text-sm font-semibold mb-2">
          100%
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full w-50 bg-sky-500 rounded-full"></div>
        </div>
                                     </div>
                            </div>
                             {/* card4 */}
                            <div>
                                <h4>React-JS</h4>
                                <p>Gaining hands-on experience with React 
                                    fundamentals, including components, props,
                                     and state management. Currently learning 
                                     advanced concepts to strengthen my frontend
                                      development skills.</p>
                                     <div>
                                        {/* Percentage */}
        <div className="flex justify-end text-red text-sm font-semibold mb-2">
          100%
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full w-50 bg-sky-500 rounded-full"></div>
        </div>
                                     </div>
                            </div>
                         </div>
                 </div>
        </section>
    )
}
export default About;