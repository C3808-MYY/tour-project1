import React from "react";
import "./navbar.css";



const Navbar= () =>{
    return(
        <div className="navbar">
            <a href="About" >About US</a>
            <a href="For" >For You</a>
            <a href="servicex" >Services</a>
            <a href="blog" >Blog</a>
            <a href="contact" >Contact</a>
        </div>
    )
}
export default Navbar;