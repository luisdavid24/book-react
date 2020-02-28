import React from "react";
import "./styles/book.css";


import raton from "../images/raton.jpg";
// import hija from "../images/hija.jpg";
// import trono from "../images/trono.jpg";
// import testimonio from "../images/testimonio.jpg";
class mouse extends React.Component{
    render(){
        return( 
            <div className="container2">
                <img src={raton} className="image2"></img>
                <div className="text">
                    <h3>Mouse</h3>
                    <p>it's a story of three murders. It is small book. </p>
                </div>


            </div>
        )
    }

}
export default mouse;