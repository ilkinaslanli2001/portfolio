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

                     <p className="text">Hi there! My name is Ilkin Aslanli and I am Software and Web Developer
                        who live and study in Warsaw.  
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