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
                    <img  className="contact-img" src={linkendin}></img>
                    <img  className="contact-img"src={instagram}></img>
                    <img className="contact-img" src={githup}></img>
                </div>
            </div>
                
        )
    }

}
export default contact; 