import React from "react";
import "./styles/home.css";
import Libro from "../images/libro.jpg";
class home extends React.Component{
    render(){
        return( 
            <div className="home-container">
                <h1>MY BOOKS</h1>
                <p>You will see all the books I have read or tried to read. I hope you like my website.</p>
                <img  className="home-img"   src={Libro}/>
            </div>
                
        )
    }

}
export default home; 