// contact.jsx 
import React from "react";
import { FaMapMarkedAlt,FaPhoneAlt,FaEnvelope } from "react-icons/fa";
const Contact = ()=>{
    return(
        <section className="py-16 px-16">
            {/* heading */}
            <h2 className="text-[25px] md:text-[35px] lg:text-[50px] text-center mb-4 text-gray-900 font-medium">Contact</h2>
            {/* p */}
            <p className="text-center text-gray-500 mb-14 max-w-[500px] mx-auto text-base md:text-lg leading-7">📩 “I’d love to hear from you! Whether you have a question, 
                a project idea, or just want to say hi — feel free to 
                reach out.”</p>

                {/* main row */}
                <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* left column */}
                    <div className="space-y-8 bg-white shadow-lg p-8">

                        <h3 className="text-2xl font-semibold mb-6">Contact Info</h3>


                        {/* location */}
                        <div className="flex gap-4">
                            <FaMapMarkedAlt className="text-[20px] text-black mt-1"/>
                            <div className="space-y-2">
                                <h3 className="text-lg font-semibold">My Location</h3>
                                <p className="text-gray-600 max-w-50">Water pump,Labor Colony, Street No 3, House No 143

Korange Creek, Karachi</p>
                            </div>
                        </div>
                        {/* phone */}
                        <div className="flex gap-4">
                            <FaPhoneAlt className="text-5 font-black mt-1"/>
                            <div className="space-y-2"> <h3 className="text-lg font-semibold">Phone Number</h3>
                            <p className="text-gray-600">+92 334 7257178</p>
                            </div>
                        </div>
                        {/* email */}
                        <div className="flex gap-4">
                       <FaEnvelope className="text-5 font-black mt-1"/>
                       <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Email</h3>
                        <p className="text-gray-600">azizullahcodes@gmail.com</p>
                       </div>
                        </div>
                    </div>

                    {/* right column */}
                    <div className="bg-white shadow-lg rounded-lg p-8">
                        <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
                        {/* name and email */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <input type="text" placeholder="Your Name" className="border border-gray-300 rounded-md p-3 focus:outline-none  focus:border-blue-500" />
                        <input type="email" placeholder="Enter your email" className="border border-gray-300 rounded-md p-3 focus:outline-none  focus:border-blue-500" />
                        </div>
                   
                    {/* subject */}
                    <div className="mb-4">
                        <input type="text" placeholder="subject" className="border w-full border-gray-300 rounded-md p-3 focus:outline-none  focus:border-blue-500" />
                    </div>
                    {/* message */}
                    <div>
                       <textarea rows="5" placeholder="your message"  className="border w-full border-gray-300 rounded-md p-3 focus:outline-none  focus:border-blue-500"></textarea>
                    </div>
                    {/* button */}
                   <div className="text-center mt-4">
                     <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">Send Message</button>
                   </div>
                </div>
                 </div>
        </section>
    )
}
export default Contact;