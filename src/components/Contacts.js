import React from "react"

class Contacts extends React.Component
{
    render()
    {
        return(
            <div className="contacts_wrapper">
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
        )
    }
}
export default Contacts