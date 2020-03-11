import React from "react";
import "./styles/navar.css";
import { Link } from 'react-router-dom';
class navar extends React.Component{
    render(){
        return( 
            <nav className="menu">
                <ul>
                    <li className="title">
                        <Link to="/Home">Home</Link>
                    </li>
                    <li className="title">
                        <Link to="/Home/Book">Book</Link>
                    </li>
                    <li className="title">
                        <Link to="/Home/Contact">Contact</Link>
                    </li>
                    
                </ul>

            </nav>
        )
    }

}
export default navar; 