import React from "react";
import "./styles/book.css";
import psicoanalista from "../images/psicoanalista.jpg";
import psicoanalista2 from "../images/psicoanalista2.gif";
import tiempo from "../images/tiempo.jpg";
import loco from "../images/loco.jpg";
import cianuro from "../images/cianuro.jpg";
import cita from "../images/cita.jpg";
import raton from "../images/raton.jpg";
import hija from "../images/hija.jpg";
import trono from "../images/trono.jpg";
import testimonio from "../images/testimonio.jpg";
class book extends React.Component{
    render(){
        return( 
            <div className="container">
                <div >
                    <img src={psicoanalista} className="book"></img>
                    <div className="container-text">
                        <p>This is the best book in the word in my opinion.</p>
                    </div>
                </div>
                <div >
                    <img src={psicoanalista2} className="book"></img>
                    <div className="container-text">
                        <p>This is the best book in the word in my opinion.</p>
                    </div>
                </div>
                <div >
                    <img src={tiempo} className="book tiempo" ></img>
                    <div className="container-text">
                        <p>This is the best book in the word in my opinion.</p>
                    </div>
                </div>
                <div >
                    <img src={loco} className="book loco"></img>
                    <div className="container-text">
                        <p>This is the best book in the word in my opinion.</p>
                    </div>
                </div>
                <div >
                    <img src={cianuro} className="book"></img>
                    <div className="container-text">
                        <p>This is the best book in the word in my opinion.</p>
                    </div>
                </div>
                <div >
                    <img src={cita} className="book"></img>
                    <div className="container-text">
                        <p>This is the best book in the word in my opinion.</p>
                    </div>
                </div>
                <div >
                    <img src={raton} className="book"></img>
                    <div className="container-text">
                        <p>This is the best book in the word in my opinion.</p>
                    </div>
                </div>
                <div >
                    <img src={hija} className="book"></img>
                    <div className="container-text">
                        <p>This is the best book in the word in my opinion.</p>
                    </div>
                </div>
                <div >
                    <img src={trono} className="book"></img>
                    <div className="container-text">
                        <p>This is the best book in the word in my opinion.</p>
                    </div>
                </div>
                <div >
                    <img src={testimonio} className="book"></img>
                    <div className="container-text">
                        <p>This is the best book in the word in my opinion.</p>
                    </div>
                </div>

            </div>
        )
    }

}
export default book; 