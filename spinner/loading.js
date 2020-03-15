import React from "react";
import "./styles/loading.css";
import userSpinner from "./useSpinner";
// import Spinner from "./spinner";
const App = ()=>{
    const[spinner,showSpinner,hideSpinner]=userSpinner();
    const fakeFectch= ()=>{
        showSpinner();
        setTimeout(()=>hideSpinner(),3000)
    };
    return( 
        <div className="App">
            <div className="Input-group">
                <label htmlFor="overlay">overlay</label>
                <input type="checkbox" name="overlay"/>
            </div>
            <button onClick={fakeFectch}>Fake fetch</button>
            {spinner}
        </div>
                
    );
    

}
export default App; 