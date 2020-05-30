import React from "react"
import '../styles/mainpage.css'
import '../js/textTyping'
class Mainpage extends React.Component
{
    onGmailClick = () =>
    {
        const gmail = "ilkinaslanli0120@gmail.com"
        navigator.clipboard.writeText(gmail);
    }
  
     render()
     {

        return(
        <div className="container">
                <a href="#" className="resume_link">Donwload CV</a>
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
                <div className="skills_side">
                    <div className="skills">
                        <div className="skill">
                            <img src="/projectImages/fe_icon.png"></img><br></br>
                            <label>FrontEnd</label>
                            <ul>
                                <li>HTML, CSS, BootStrap</li>
                                <li>Javascript(Jquery)</li>
                                <li>ReactJs</li>
                            </ul>

                        </div>
                      
                        <div className="skill">
                            <img src="/projectImages/be_icon.png"></img><br></br>
                            <label>BackEnd</label>
                            <ul>
                                <li>Django</li>
                               
                            </ul>

                        </div>
                        <div className="skill">
                            <img src="/projectImages/in_icon.png"></img><br></br>
                            <label>Tools</label>
                            <ul>
                                <li>VsCode, Visual Studio</li>
                                <li>Postman</li>
                               
                            </ul>

                        </div>
                    </div>
                </div>
                <span className="divider"></span>
                <div className="project_side">
                    <div id="projects" className="projects">
                        <div className="project">
                            <div className="title_back">
                                <p className="title">TapAzAdder</p>
                            </div>
                            <p className = "desc">
                                It was my first freelance project.<br></br>
                                This program automatically add products which are located in photos folder to Azerbaijan website(www.tap.az) in Chrome Browser. 
                                Cost of the products program takes from the name of the picture.
                            </p>
                            <a target="__blank" className="button" href="https://github.com/ilkinaslanli2001/TapAzAdder">
                                <span className="button__line button__line--top"></span>
                                <span className="button__line button__line--right"></span>
                                <span className="button__line button__line--bottom"></span>
                                <span className="button__line button__line--left"></span>

                                GitHub
                            </a>
                        </div>
                     
                       
                        </div>
                   
                </div>
               <span className="divider"></span>
               <div className="contactsSide">
                   <div className="contacts">
                       <div className="contact">
                         <a  href="https://github.com/ilkinaslanli2001" target="__blank" ><img src="/projectImages/github.png"></img></a>
                       </div>
                       <div className="contact">
                         <a onClick={this.onGmailClick} style={{cursor:"pointer"}} target="__blank__" ><img src="/projectImages/gmail.png"></img></a>
                       </div>
                       <div className="contact">
                         <a target="__blank" href="https://www.linkedin.com/in/ilkin-aslanli-6215a1173/"><img src="/projectImages/linkedin.png"></img></a>
                       </div>
                       <div className="perm">
                           <p className="perm_text">
                               &copy;{new Date().getFullYear()} Ilkin Aslanli
                           </p>
                       </div>
                   </div>
               </div>
            </div>
        )
     }
    
}
export default Mainpage