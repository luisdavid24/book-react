import React from "react";
import SpinnerIcon from "./spinnerIcon";
import "./styles/spinner.css";
const Spinner = props=>{
    const styled=props.overlay ? {
        background:"rgba(0,0,0,.5)",
        height:"100vh",
        width:"100vw",
        position:"fixed"

        
    } : null;
    return( 
        <div className="spinner" style={styled}>
            <SpinnerIcon/>
        </div>
        
    );
    

};
export default Spinner; 