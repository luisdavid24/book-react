import React from "react";
import linkendin from "../images/linkedin.jpg";
import instagram from "../images/instagram.PNG";
import githup from "../images/githup.PNG";
import "./styles/contact.css";
class contact extends React.Component{
    render(){
        return( 
            <div className="container-contact">
                <h4>If you want to use my services, you can contact me through the following way.</h4>
                <div className="img-container">
                    <a href="https://www.linkedin.com/in/david-l%C3%B3pez-11a1ab196/">
                        <img  className="contact-img" src={linkendin}></img>
                    </a>
                    <a href="https://github.com/luisdavid24">
                        <img  className="contact-img"src={instagram}></img>
                    </a>
                    <a href="https://github.com/luisdavid24"> 
                        <img className="contact-img" src={githup}></img>
                    </a>
                </div>
            </div>
                
        )
    }

}
export default contact; 