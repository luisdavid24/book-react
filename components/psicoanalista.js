import React from "react";
// import "./styles/element.css";
import "./styles/book.css";
import psicoanalista from "../images/psicoanalista.jpg";

class psico extends React.Component{
    render(){
        return( 
            <div className="container2">
                <img src={psicoanalista} className="image2"></img>
                <div className="text">
                    <h2>The psychoanalyst.</h2>
                    <p>This me first book, in my opinion all the history is amazing because you never know what is going to happen in the next page.When you read the first page this book you are going to read all the night.</p>
                </div>


            </div>
        )
    }

}
export default psico; 