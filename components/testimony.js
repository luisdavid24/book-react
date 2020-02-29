import React from "react";
import "./styles/book.css";

import testimonio from "../images/testimonio.jpg";
class testimony extends React.Component{
    render(){
        return( 
            <div className="container2">
                <img src={testimonio} className="image2"></img>
                <div className="text">
                    <h3>The lost throne.</h3>
                    <p>It is a story of a lost treasure. In the book there are great and somewhat rare battles. </p>
                </div>


            </div>
        )
    }

}
export default testimony;