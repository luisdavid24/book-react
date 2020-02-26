import React from "react";
import "./styles/book.css";


import loco from "../images/loco.jpg";
// import cianuro from "../images/cianuro.jpg";
// import cita from "../images/cita.jpg";
// import raton from "../images/raton.jpg";
// import hija from "../images/hija.jpg";
// import trono from "../images/trono.jpg";
// import testimonio from "../images/testimonio.jpg";
class crazy extends React.Component{
    render(){
        return( 
            <div className="container2">
                <img src={loco} className="image2"></img>
                <div className="text">
                    <h3>Time to kill</h3>
                    <p>This book is about a serial killer that kills women. It's a very interesting story. </p>
                </div>


            </div>
        )
    }

}
export default crazy;