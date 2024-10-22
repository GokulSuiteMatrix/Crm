import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/NavBar.css'
import { useNavigate } from 'react-router-dom';

import logo from '../assets/suitematrixlogo.png'
const NavBar = ({children}) => {
  
const navigate = useNavigate();

  const handleSignOutClick= (event) => {
    event.preventDefault(); 
  navigate('/');  
  };
  return (
    
    <nav className="navbar">
 
      <a href="/home" className="navbar-brand">
        <img src={logo} alt="Logo" className="navbar-logo" />
       </a>
       <h1 className='navbar-tittle'>SUITEMATRIX CRM</h1>
      <div className="navbar-logo">
     
       
      </div>
      <ul className="navbar-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <button  onClick={handleSignOutClick}>LogOut</button>
        
      </ul>
    </nav>
  );
};

export default NavBar;