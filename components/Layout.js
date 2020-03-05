import React from 'react';
import Navbar from "navar.js";

function Layout(props) {
  
  return (
    <React.Fragment>
      <Navbar />
      {props.children}
    </React.Fragment>
  );
}

export default Layout;