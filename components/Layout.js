import React from 'react';
import Navbar from "./navar.js";
import Footer from "./footer.js";

function Layout(props) {
  
  return (
    <React.Fragment>
      <Navbar />
      {props.children}
      <Footer/>
    </React.Fragment>
  );
}

export default Layout;