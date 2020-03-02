import React from "react";
import linkendin from "../images/linkedin.jpg";
import instagram from "../images/instagram.PNG";
class contact extends React.Component{
    render(){
        return( 
            <div>
                <h4>If you want to use my services, you can contact me through the following way.</h4>
                <img src={linkendin}></img>
                <img src={instagram}></img>
                <img></img>
            </div>
                
        )
    }

}
export default contact; 