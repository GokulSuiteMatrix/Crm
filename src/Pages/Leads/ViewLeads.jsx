import React, { useState } from 'react';
import './Styles/leads.css';

const ViewLeads = () => {
   const [searchTerm, setSearchTerm] = useState('');
  const leads = [
    { company: 'SuiteMatrix', name: 'Kiruthik', designation: 'Marketing', email: 'gokulrajv019@gmail.com', phone: '733213599', revenue: '$569', address: 'Los Angeles', status: 'HotLead', comments: 'I need a CRM', timezone: 'PST' },
    { company: 'Infosys', name: 'Sandiya', designation: 'Business Developer', email: 'sandy@gmail.com', phone: '8056112240', revenue: '$969', address: 'Bangalore', status: 'Client', comments: 'Process is going on', timezone: 'IST' },
    // Add more lead data as needed for pagination
    { company: 'Infosys', name: 'Sandiya', designation: 'Business Developer', email: 'sandy@gmail.com', phone: '8056112240', revenue: '$969', address: 'Bangalore', status: 'Client', comments: 'Process is going on', timezone: 'IST' },
    { company: 'Infosys', name: 'Sandiya', designation: 'Business Developer', email: 'sandy@gmail.com', phone: '8056112240', revenue: '$969', address: 'Bangalore', status: 'Client', comments: 'Process is going on', timezone: 'IST' },
    { company: 'Infosys', name: 'Sandiya', designation: 'Business Developer', email: 'sandy@gmail.com', phone: '8056112240', revenue: '$969', address: 'Bangalore', status: 'Client', comments: 'Process is going on', timezone: 'IST' },
    { company: 'Infosys', name: 'Sandiya', designation: 'Business Developer', email: 'sandy@gmail.com', phone: '8056112240', revenue: '$969', address: 'Bangalore', status: 'Client', comments: 'Process is going on', timezone: 'IST' },
    { company: 'Infosys', name: 'Sandiya', designation: 'Business Developer', email: 'sandy@gmail.com', phone: '8056112240', revenue: '$969', address: 'Bangalore', status: 'Client', comments: 'Process is going on', timezone: 'IST' },
    { company: 'Infosys', name: 'Sandiya', designation: 'Business Developer', email: 'sandy@gmail.com', phone: '8056112240', revenue: '$969', address: 'Bangalore', status: 'Client', comments: 'Process is going on', timezone: 'IST' },
    { company: 'Infosys', name: 'Sandiya', designation: 'Business Developer', email: 'sandy@gmail.com', phone: '8056112240', revenue: '$969', address: 'Bangalore', status: 'Client', comments: 'Process is going on', timezone: 'IST' },
    { company: 'Infosys', name: 'Sandiya', designation: 'Business Developer', email: 'sandy@gmail.com', phone: '8056112240', revenue: '$', address: 'Bangalore', status: 'Client', comments: 'Process is going on', timezone: 'IST' },
    { company: 'Infosys', name: 'Sandiya', designation: 'Business Developer', email: 'sandy@gmail.com', phone: '8056112240', revenue: '$969', address: 'Bangalore', status: 'Client', comments: 'Process is going on', timezone: 'IST' },
    { company: 'Infosys', name: 'Sandiya', designation: 'Business Developer', email: 'sandy@gmail.com', phone: '8056112240', revenue: '$969', address: 'Bangalore', status: 'Client', comments: 'Process is going on', timezone: 'IST' },
    { company: 'Infosys', name: 'Sandiya', designation: 'Business Developer', email: 'sandy@gmail.com', phone: '8056112240', revenue: '$969', address: 'Bangalore', status: 'Client', comments: 'Process is going on', timezone: 'IST' },
    { company: 'Infosys', name: 'Sandiya', designation: 'Business Developer', email: 'sandy@gmail.com', phone: '8056112240', revenue: '$969', address: 'Bangalore', status: 'Client', comments: 'Process is going on', timezone: 'IST' },
    { company: 'Infosys', name: 'Sandiya', designation: 'Business Developer', email: 'sandy@gmail.com', phone: '8056112240', revenue: '$969', address: 'Bangalore', status: 'Client', comments: 'Process is going on', timezone: 'IST' },
    { company: 'Infosys', name: 'Sandiya', designation: 'Business Developer', email: 'sandy@gmail.com', phone: '8056112240', revenue: '$969', address: 'Bangalore', status: 'Client', comments: 'Process is going on', timezone: 'IST' },
    { company: 'Infosys', name: 'Sandiya', designation: 'Business Developer', email: 'sandy@gmail.com', phone: '8056112240', revenue: '$969', address: 'Bangalore', status: 'Client', comments: 'Process is going on', timezone: 'IST' },
    { company: 'Infosys', name: 'Sandiya', designation: 'Business Developer', email: 'sandy@gmail.com', phone: '8056112240', revenue: '$969', address: 'Bangalore', status: 'Client', comments: 'Process is going on', timezone: 'IST' },
    { company: 'Infosys', name: 'Sandiya', designation: 'Business Developer', email: 'sandy@gmail.com', phone: '8056112240', revenue: '$', address: 'Bangalore', status: 'Client', comments: 'Process is going on', timezone: 'IST' },
    { company: 'Infosys', name: 'Sandiya', designation: 'Business Developer', email: 'sandy@gmail.com', phone: '8056112240', revenue: '$969', address: 'Bangalore', status: 'Client', comments: 'Process is going on', timezone: 'IST' },
    { company: 'Infosys', name: 'Sandiya', designation: 'Business Developer', email: 'sandy@gmail.com', phone: '8056112240', revenue: '$969', address: 'Bangalore', status: 'Client', comments: 'Process is going on', timezone: 'IST' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;


  const filteredLeads = leads.filter(
   (lead) =>
     lead.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
     lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     lead.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
     lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
     lead.phone.includes(searchTerm)
 );
 const currentRecords = filteredLeads.slice(indexOfFirstRecord, indexOfLastRecord);
 const totalPages = Math.ceil(filteredLeads.length / recordsPerPage);


  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
   <div className="container">
   <div className="header">
     <div className="search-box">
     <button className="add-button">Add Lead</button>
       <input
         type="text"
         placeholder="Search leads..."
         value={searchTerm}
         onChange={(e) => setSearchTerm(e.target.value)}
       />
     </div>
    
   </div>
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company Revenue</th>
            <th>Address</th>
            <th>Status</th>
            <th>Comments</th>
            <th>TimeZone</th>
          </tr>
        </thead>
        <tbody>
          {currentRecords.map((lead, index) => (
            <tr key={index}>
              <td>{lead.company}</td>
              <td>{lead.name}</td>
              <td>{lead.designation}</td>
              <td>{lead.email}</td>
              <td>{lead.phone}</td>
              <td>{lead.revenue}</td>
              <td>{lead.address}</td>
              <td>{lead.status}</td>
              <td>{lead.comments}</td>
              <td>{lead.timezone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
    </div>
  );
};

export default ViewLeads;