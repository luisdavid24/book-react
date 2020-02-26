import React from "react";
import "./styles/book.css";

import psicoanalista2 from "../images/psicoanalista2.gif";

class psico2 extends React.Component{
    render(){
        return( 
            <div className="container2">
                <img src={psicoanalista2} className="image2"></img>
                <div className="text">
                    <h3>The psychoanalyst2</h3>
                    <p>This is me second book,is the second part of the pychoanalyst, in my opinion the book has a shocking end to the book, because the protagonist could kill Mr. R. </p>
                </div>


            </div>
        )
    }

}
export default psico2; 