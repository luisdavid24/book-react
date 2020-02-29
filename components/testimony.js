import React from "react";
import "./styles/book.css";

import testimonio from "../images/testimonio.jpg";
class testimony extends React.Component{
    render(){
        return( 
            <div className="container2">
                <img src={testimonio} className="image2"></img>
                <div className="text">
                    <h3>Testimony</h3>
                    <p>I really didn't like this book because the characters die too fast.That is very bad in my opinion.</p>
                </div>


            </div>
        )
    }

}
export default testimony;