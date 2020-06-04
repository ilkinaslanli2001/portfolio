import React from "react"

class Intro extends React.Component
{
    render()
    {
        return(
              

             <div className="intro"> 
                <div className="my_information">

                    <div className="my_photo">
                    </div>

                 <div className = "about_me">

                     <p id="name" className="name"></p>

                     <p id="job_title" className="job_title"></p>

                     <p className="text">Hi there! I am Ilkin Aslanli and my biggest dream is to change the world in better way
                         How I would like to do it? Well, I'd like to create a project which will be useful for people.
                         Currently I am working as a freelancer.<br></br>
                         If you want to offer a job or have some questions about programming text me without hesitation.<br></br>
                         <span>Languages: Python, C#, Javascript</span>

                     </p>
                   
                 </div>
               
                </div>
            </div>
        )
    }
}
export default Intro