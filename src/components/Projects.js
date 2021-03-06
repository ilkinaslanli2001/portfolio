import React from "react"

class Projects extends React.Component
{
    render(){
        return(
            <div className="projects_wrapper">
                <div id="projects" className="projects">
                    <div className="project_wrapper">
                        <div className="project">
                        
                            <img src={'../projectImages/seramikvip.png'} className="project_image" />
                                <p className = "desc">
                                Seramik-Vip.ru is my second freelance project which I made with ReactJs and Django.
                                As a css framework I've used MaterializeCss(The website also has responsive design).
                                It has his own admin panel where owner can add Categories, sub categories and projects.
                                    </p>
                                <a target="__blank" className="button" href="https://www.seramik-vip.ru">
                                    <span className="button__line button__line--top"></span>
                                    <span className="button__line button__line--right"></span>
                                    <span className="button__line button__line--bottom"></span>
                                    <span className="button__line button__line--left"></span>
                                    Seramik-Vip.ru
                                    </a>
                            </div>
                        </div>
                <div className="project_wrapper">
                    <div className="project">
                        
                        <div className = "project_image" style={{backgroundImage:"url('../projectImages/IlkMov-new_movies.png')"}}></div>
                        <img src={'../projectImages/IlkMov-new_movies.png'} className="project_image" />

                            <p className = "desc">
                                This is a React+Django(Rest) project for watching movies
                                ( To view all functions go to the project's repository)
                                </p>
                            <a target="__blank" className="button" href="https://master.d357igwi6vgdz8.amplifyapp.com">
                                <span className="button__line button__line--top"></span>
                                <span className="button__line button__line--right"></span>
                                <span className="button__line button__line--bottom"></span>
                                <span className="button__line button__line--left"></span>
                                IlkMov
                                </a>
                            </div>
                </div>
                <div className="project_wrapper">
                    <div className="project">
                    <img src={'../projectImages/tapAzAdder_image.jpg'} className="project_image" />
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
                            TapAzAdder
                            </a>
                        </div>
                        
                    </div>
                <div className="project_wrapper">
                    <div className="project">
                        <img src={'../projectImages/portfolioapp_image.png'} className="project_image" />
                           
                     
                        <p className = "desc">
                        It's a portfolio app which you can download and change how you want. App consists of 4 parts: Intro,
                        Skills, Projects, Contacts.Each part are in defferent js files that's why it will be easy to understand the code
                        </p>
                        <a target="__blank" className="button" href="https://github.com/ilkinaslanli2001/portfolio">
                        <span className="button__line button__line--top"></span>
                        <span className="button__line button__line--right"></span>
                        <span className="button__line button__line--bottom"></span>
                        <span className="button__line button__line--left"></span>
                        Portfolio
                        </a>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
export default Projects