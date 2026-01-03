//cssprojects.jsx 
import React from "react";
const CssProjects = ()=>{
    return(
       <section>

        {/* heading */}
        <h2>My Css Projects</h2>
        {/* short description */}
        <p></p>
        {/* Projects Grid */}
        <div>
            {CssProjects.map((projects)=>{
             <div></div>
            })}
        </div>
       </section>
    )
}
export default CssProjects;