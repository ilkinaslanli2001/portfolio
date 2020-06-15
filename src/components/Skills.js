import React from "react"

class Skills extends React.Component
{
    render()
    {
        return(
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
                        <li>Python(OOP)</li>
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
        )
    }
}
export default Skills