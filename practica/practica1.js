import React from "react";
import "./styles/practica1.css";
class Practica1 extends React.Component{
    render(){
        return(
            <div className="container">
                <h1>Hello, this is my first practice</h1>
                <Boton/>
            </div>

        );
    }
}

function Boton(){
    return(
        <div>
            <button> Touch me,please</button>
        </div>
    )
}
export default Practica1;