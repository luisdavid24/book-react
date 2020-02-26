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
                    <h3>The crazy story</h3>
                    <p>It's a story of a murder in a mental hospital.All the story is interesting </p>
                </div>


            </div>
        )
    }

}
export default crazy;