import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Registration from './Pages/SignIn';
import SignIn from './Pages/SignIn';
import NavBar from './Components/navBar';
import ViewLeads from'./Pages/Leads/ViewLeads'; // Ensure this component exists
// import SalesThisMonth from './SalesThisMonth'; 

const App = () => {
  const location = useLocation();

  // List of paths where the navbar should not be displayed
  const noNavBarPaths = ['/','/signIn' ];

  return (
    <div className="app">
      {!noNavBarPaths.includes(location.pathname) && <NavBar/>}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/view-leads" element={<ViewLeads />} /> {/* Use this route */}
        {/* <Route path="/sales-this-month" element={<SalesThisMonth />} /> */}
        {/* Add any additional routes here */}
      </Routes>
    </div>
  );
};

export default App;