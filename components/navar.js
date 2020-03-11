import React from "react";
import "./styles/navar.css";
import { Link } from 'react-router-dom';
class navar extends React.Component{
    render(){
        return( 
            <nav className="menu">
                <ul>
                    <li className="title">
                        <Link to="/Home" className="link-a">Home</Link>
                    </li>
                    <li className="title">
                        <Link to="/Home/Book" className="link-a">Book</Link>
                    </li>
                    <li className="title">
                        <Link to="/Home/Contact" className="link-a">Contact</Link>
                    </li>
                    
                </ul>

            </nav>
        )
    }

}
export default navar; 