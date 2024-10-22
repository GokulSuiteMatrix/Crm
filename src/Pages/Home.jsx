import React from 'react';
import '../Styles/Home.css'; // Optional: for styling
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();


    const handleClick = (route) => {
        navigate(route); // Navigate to the specified route
      };

  return (
    <div className="home">
      <h1>Hi!(USER) Welcome</h1>
      <p>Your one-stop solution for customer relationship management.</p>
      
      <section className="dashboard">
        <h2>Dashboard Overview</h2>
        <div className="dashboard-cards">
          <div className="card">
            <h3>Total Customers</h3>
            <p>500</p>
          </div>
          <div  className="card" 
          onClick={() => handleClick('/view-leads')} // Navigate to View Leads
          role="button" 
          tabIndex={0} 
          onKeyDown={(e) => { if (e.key === 'Enter') handleClick('/view-leads'); }}>
            <h3>Active Leads</h3>
            <p>120</p>
          </div>
          <div className="card">
            <h3>Sales This Month</h3>
            <p>$30,000</p>
          </div>
          <div className="card">
            <h3>Upcoming Appointments</h3>
            <p>5</p>
          </div>
        </div>
      </section>

      <section className="latest-activity">
        <h2>Latest Activity</h2>
        <ul>
          <li>Customer John Doe added on October 10, 2024</li>
          <li>Lead Jane Smith contacted on October 12, 2024</li>
          <li>Meeting scheduled with Alex Johnson on October 15, 2024</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;