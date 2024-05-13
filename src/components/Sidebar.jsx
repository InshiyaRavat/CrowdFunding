import React, { useState } from 'react';
import "../styles/Home.css"
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo';
import Dashboard from '../assets/dashboard';
import CreateCampaign from '../assets/CreateCampaign';
import Payment from '../assets/Payment';
import Withdraw from '../assets/Withdraw';
import Profile from '../assets/Profile';
import Logout from '../assets/Logout';
import Sun from "../assets/Sun";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');

  const handleClick = (name) => {
    setIsActive(name);
    if (name === "dashboard") {
      navigate("/");
    } else {
      navigate(`/${name}`);
    }
  };

  return (
    <div className='sidebar-container'>
      <div className='sidebar-logo'>
        <Link to="/">
          <Logo />
        </Link>
      </div>

      <div className='sidebar-menu'>
        <div
          name="dashboard"
          className={`sidebar-item ${isActive === "dashboard" ? 'active' : ''}`}
          onClick={() => handleClick("dashboard")}
        >
          <Dashboard />
        </div>
        <div
          name="campaign"
          className={`sidebar-item ${isActive === "campaign" ? 'active' : ''}`}
          onClick={() => handleClick("campaign")}
        >
          <CreateCampaign />
        </div>
        <div
          name="payment"
          className={`sidebar-item ${isActive === "payment" ? 'active' : ''}`}
          onClick={() => handleClick("payment")}
        >
          <Payment />
        </div>
        <div
          name="withdraw"
          className={`sidebar-item ${isActive === "withdraw" ? 'active' : ''}`}
          onClick={() => handleClick("withdraw")}
        >
          <Withdraw />
        </div>
        <div
          name="profile"
          className={`sidebar-item ${isActive === "profile" ? 'active' : ''}`}
          onClick={() => handleClick("profile")}
        >
          <Profile />
        </div>
        <div
          name="logout"
          className={`sidebar-item ${isActive === "logout" ? 'active' : ''}`}
          onClick={() => handleClick("logout")}
        >
          <Logout />
        </div>
      </div>
      <div
          className={`sidebar-sun`}
        >
          <Sun />
        </div>
    </div>
  );
}

export default Sidebar;
