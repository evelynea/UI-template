import React, { useState }  from 'react'; 
import { Link } from 'react-router-dom'



function Sidebar({onLinkClick}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const handleLinkClick = (page) => {
    onLinkClick(page);
  };

  return (
    <div className={`relative bg-slate-200 h-screen p-5 transition-all duration-300 flex flex-col text-md font-semibold ${sidebarOpen ? 'w-72' : 'w-12'}`}>
      <button onClick={toggleSidebar} className="absolute -right-3 top-9 cursor-pointer rounded-full border-2 border-black bg-white p-1">
        <svg className={`h-6 w-6 transform transition-transform duration-300 ${sidebarOpen ? 'rotate-90' : 'rotate+90'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className="inline-block py-2 mb-2">
        <h1 className="text-black transition-opacity duration-300 font-bold text-2xl" style={{ display: sidebarOpen ? 'block' : 'none' }}>Brand</h1>
       
        <div className="py-4 px-6 text-black" >
        
      </div>
      </div>
      <ul className="flex flex-col space-y-1 overflow-y-auto overflow-x-hidden scrollbar" style={{ display: sidebarOpen ? 'block' : 'none' }}>
      <ul>
        <Link to="/dashboard/overview">            
          <li>
            <button
              onClick={() => handleLinkClick('page1')}
              className="w-full py-2 text-left hover:bg-gray-400" 
            >
              Overview
            </button>
          </li>
        </Link>
        <Link to="/dashboard/details">
          <li>
            <button
              onClick={() => handleLinkClick('page2')}
              className="w-full py-2 text-left hover:bg-gray-400"
            >
              Key details
            </button>
          </li>
        </Link>
        <Link to="/dashboard/report">
          <li>
            <button
              onClick={() => handleLinkClick('page3')}
              className="w-full py-2 text-left hover:bg-gray-400"
            >
              Report
            </button>
          </li>
        </Link>
        <Link to="/dashboard/distribution">
          <li>
            <button
              onClick={() => handleLinkClick('myorganisation')}
              className="w-full py-2 text-left hover:bg-gray-400"
            >
              Distribution
            </button>
          </li>
        </Link>
        <Link to="/dashboard/distribution">
          <li>
            <button
              onClick={() => handleLinkClick('myorganisation')}
              className="w-full py-2 text-left hover:bg-gray-400"
            >
              Users
            </button>
          </li>
        </Link>
        </ul>
      </ul>
      {/* <div className="mt-auto py-4 px-2 bg-mint-green-400 rounded-lg shadow-sm" style={{ display: sidebarOpen ? 'block' : 'none' }}> */}
        {/* Sidebar footer */}
        {/* Include your sidebar footer content here */}
      {/* </div> */}
    </div>
  );
}

export default Sidebar;


