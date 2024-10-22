import React, { useState } from 'react';
import '../Styles/Login.css';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/lock.jpg'
import web from '../assets/webimg.jpg'
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission to your backend
    console.log('Email:', email);
    console.log('Password:', password);
    navigate('/home');
  };
  const handleSignInClick = (event) => {
    event.preventDefault(); // Prevent default behavior of anchor tag
    navigate('/signIn');    // Navigate to the sign-in page
  };

  return (
    
    <div className="login-container">
            {/* <img src={web} alt="web" className="web-logo" /> */}
      <img src={logo} alt="Logo" className="conatiner-logo" />
      <h2 className='h1-tittle'>Login to access SuiteMatrix CRM</h2>
      <form className="login-form" onSubmit={handleSubmit}>
      
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
        <div className="forgot-password">
          <a href="#">Forgot your password?</a>
        </div>
        <div className="forgot-password">
          <a href="#" onClick={handleSignInClick}>Sign Up</a>
        </div>
      </form>
    </div>
  );
};

export default Login;