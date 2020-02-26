import React from "react";
import "./styles/book.css";


import cita from "../images/cita.jpg";
// import raton from "../images/raton.jpg";
// import hija from "../images/hija.jpg";
// import trono from "../images/trono.jpg";
// import testimonio from "../images/testimonio.jpg";
class dead extends React.Component{
    render(){
        return( 
            <div className="container2">
                <img src={cita} className="image2"></img>
                <div className="text">
                    <h3>Date with death</h3>
                    <p>It's a story of a murderer in the desert. It is interesting book. </p>
                </div>


            </div>
        )
    }

}
export default dead;