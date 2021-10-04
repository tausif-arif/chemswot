import React from 'react';
import {NavLink} from 'react-router-dom';
import '../App.css'

const Navbar = () => {
    return (
        <div className="main_nav fixed-top">
        <div className="logo"><span className="chem">Chem</span><span className="swot">Swot</span></div>
        <div className="leftnav">
         <NavLink className="navs" to="/">Home</NavLink>
           <NavLink className="navs" to="/resources">Resources</NavLink>
           <NavLink className="navs" to="/about"> About</NavLink>
           <NavLink className="navs" to="/contact"> Contact</NavLink>
        </div>
        </div>
    )
}

export default Navbar;
