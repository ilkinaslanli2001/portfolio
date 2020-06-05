import React from "react"
import Intro from './Intro'
import Skills from './Skills'
import Projects from './Projects'
import Contacts from './Contacts'
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
                <a href="https://drive.google.com/file/d/1GDa-DRFufO9dXOwQvlGfhN5hQzCv51Qa/view?usp=sharing" download className="resume_link">Donwload CV</a>
               
                <Intro></Intro>
                <Skills></Skills>
                <span className="divider"></span>
                <Projects></Projects>
                
                
                <span className="divider"></span>
                <Contacts></Contacts>
            </div>
        )
     }
    
}
export default Mainpage