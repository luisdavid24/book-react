import React from "react";
import "./styles/book.css";


import trono from "../images/trono.jpg";
// import testimonio from "../images/testimonio.jpg";
class throne extends React.Component{
    render(){
        return( 
            <div className="container2">
                <img src={trono} className="image2"></img>
                <div className="text">
                    <h3>Daughter of fortune.</h3>
                    <p>it's a story about love.This is story begun in chile and finished in U.S.A.It is interesting book in my opinion. </p>
                </div>


            </div>
        )
    }

}
export default throne;