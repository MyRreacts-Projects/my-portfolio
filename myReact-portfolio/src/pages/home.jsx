// home.jsx 
import React from "react";
import myPic from "../assets/images/myPic.jpeg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
// import { FaEnvelope, FaGithub } from "react-icons/fa";
const Home = ()=>{
    return(
       <section className="min-h-screen flex items-center">
        <div className="container px-10">
            {/* row */}
            <div className="min-h-screen grid grid-cols-1 md:grid-cols-2  items-center">

                {/* left col */}
                <div>
                    <h1 className="text-[20px] md:text-[30px] font-bold mb-[20px]">Hello, I'm Azizullah<br/>
                    Creative Frontend Web Developer</h1>
                    <p className="text-gray mb-4">I’m a Frontend Website Developer passionate about creating clean, 
                        responsive, and user-friendly web experiences. I love turning ideas 
                        into interactive, modern, and visually 
                        appealing websites using HTML, CSS, JavaScript, and modern frameworks.</p>

                    {/* button */}
                    <div className="flex gap-6 mb-6">
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-[20px] hover:bg-blue-800 transition">Get started</button>

                        <button className="bg-blue-600 text-white px-6 py-2 rounded-[20px] hover:bg-blue-800 transition">learn more</button>
                    </div>
                    {/* social link */}
                    <div className="flex  gap-5  text-[30px] md:text-[40px]">
                        <a href="#" target="_blank"><FaGithub/></a>
                        <a href="#" target="_blank"><FaLinkedin/></a>
                        <a href="#" target="_blank"><MdOutlineEmail/></a>
                        <a href="#" target="_blank"><FaWhatsapp/></a>
                    </div>
                </div>
{/* right col */}
<div className="flex items-center justify-center">
    <img src={myPic} alt="mypic" className="h-130 w-130 object-cover" />
</div>

            </div>
        </div>
       </section>
    )
}
export default Home;