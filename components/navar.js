import React from "react";
import "./styles/navar.css";

import { Link } from 'react-router-dom';
class navar extends React.Component{
    render(){
        return( 
            <nav className="menu">
                <ul>
                    <li className="title">
                        <a>Home</a>
                    </li>
                    <li className="title">
                        <a>Book</a>
                    </li>
                    <li className="title">
                        <a>Contact</a>
                    </li>
                    
                </ul>

            </nav>
        )
    }

}
export default navar; 