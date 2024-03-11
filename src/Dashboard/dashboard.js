import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar';
import free from "../free-dashboard-templates-1.jpg"
import pic1 from "../pic1.png"
import Page2 from './page2';
import Page3 from './page3';
import "./dashboard.css"
import Overview from './OverviewPage';
import Distribution from './myorganisation';

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState('page1');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLinkClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <body>
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onLinkClick={handleLinkClick} 
      // onCloseSidebar={toggleSidebar} 
      />

      {/* Main content */}
      <div className="flex flex-col flex-grow">
        {/* Top bar */}
        <div className=" text-white py-4 px-6 flex justify-between items-center"style={{ backgroundColor: "#333333"}}>
        {/* {isSidebarOpen ? <button onClick={toggleSidebar}>X</button> :  */}
        <button onClick={toggleSidebar}>Menu</button>
        {/* // } */}

            <Link to="/login" className="text-white hover:text-gray-300">Logout</Link>
        </div>

        {/* Main content area */}
        <div className="flex-grow bg-gray-100 p-6">
          {/* Render content based on the current page */}
          {currentPage === 'page1' && <Overview/>}
          {currentPage === 'page2' && <Page2/>}
          {currentPage === 'page3' && <Page3/>}
          {currentPage === 'myorganisation' && <Distribution/>}

        </div>
      </div>
    </div>
    </body>
  );
}

export default Dashboard;
