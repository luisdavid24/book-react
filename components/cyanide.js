import React from "react";
import "./styles/book.css";

import cianuro from "../images/cianuro.jpg";

class poison extends React.Component{
    render(){
        return( 
            <div className="container2">
                <img src={cianuro} className="image2"></img>
                <div className="text">
                    <h3>The crazy story</h3>
                    <p>It's a story of a murder in a mental hospital.All the story is interesting. </p>
                </div>


            </div>
        )
    }

}
export default poison;