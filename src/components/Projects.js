import React from "react"

class Projects extends React.Component
{
    render(){
        return(
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
                    <div className="project">
                        <div className="title_back">
                            <p className="title">Portfolio</p>
                        </div>
                        <p className = "desc">
                        It's a portfolio app which you can download and change how you want. App consists of 4 parts: Intro,
                        Skills, Projects, Contacts.Each part are in defferent js files that's why it will be easy to understand the code
                        </p>
                        <a target="__blank" className="button" href="https://github.com/ilkinaslanli2001/portfolio">
                        <span className="button__line button__line--top"></span>
                        <span className="button__line button__line--right"></span>
                        <span className="button__line button__line--bottom"></span>
                        <span className="button__line button__line--left"></span>
                        GitHub
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Projects