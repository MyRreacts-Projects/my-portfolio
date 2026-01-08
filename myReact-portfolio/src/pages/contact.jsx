// contact.jsx 
import React from "react";
import { FaMapMarkedAlt,FaPhoneAlt,FaEnvelope } from "react-icons/fa";
const Contact = ()=>{
    return(
        <section>
            {/* heading */}
            <h2>Contact</h2>
            {/* p */}
            <p>📩 “I’d love to hear from you! Whether you have a question, 
                a project idea, or just want to say hi — feel free to 
                reach out.”</p>

                {/* main row */}
                <div>

                    {/* left column */}
                    <div>

                        {/* location */}
                        <div>
                            <FaMapMarkedAlt/>
                            <div>
                                <h3>My Location</h3>
                                <p>Water pump,Labor Colony, Street No 3, House No 143

Korange Creek, Karachi</p>
                            </div>
                        </div>
                        {/* phone */}
                        <div>
                            <FaPhoneAlt/>
                            <div> <h3>Phone Number</h3>
                            <p>+92 334 7257178</p>
                            </div>
                        </div>
                        {/* email */}
                        <div>
                       <FaEnvelope/>
                       <div>
                        <h3>Email</h3>
                        <p>azizullahcodes@gmail.com</p>
                       </div>
                        </div>
                    </div>

                    {/* right column */}
                    <div>
                        <h3>Get In Touch</h3>
                        {/* name and email */}
                        <div>
                            <input type="text" placeholder="Your Name" />
                        <input type="email" placeholder="Enter your email" />
                        </div>
                   
                    {/* subject */}
                    <div>
                        <input type="text" placeholder="subject" />
                    </div>
                    {/* message */}
                    <div>
                       <textarea placeholder="your message"></textarea>
                    </div>
                    {/* button */}
                    <button>Send Message</button>
                </div>
                 </div>
        </section>
    )
}
export default Contact;