import React from "react";
import "./styles/loading.css";
import Spinner from "./spinner";
const loading = ()=>{
    const fakeFectch= ()=>{
        console.log("Fetching...");
    };
    return( 
        <div>
            <div className="Input-group">
                <label htmlFor="overlay">overlay</label>
                <input type="checkbox" name="overlay"/>
            </div>
            <button onClick={fakeFectch}>Fake fetch</button>
            <Spinner/>
        </div>
                
    );
    

}
export default loading; 