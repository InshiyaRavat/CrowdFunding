import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CustomButton from './CustomButton';
import Logo from '../assets/logo';
import Menu from '../assets/Menu';
import Search from '../assets/Search';
import { navlinks } from "../constants";
import Profile from '../assets/Profile';
import "../styles/Home.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const address = '0xabc';

  return (
    <div className='navbar-container'>
      <div className='input-container'>
        <input type="text" placeholder='search for campaigns' />
        <div className='search-button'>
          <Search />
        </div>
      </div>
      <div className='desktop-menu'>
        <CustomButton
            btnType="button"
            title={address ? 'Create a campaign' : 'Connect'}
            styles={address ? 'bg-[#1dc071]' : 'bg-[#8c6dfd]'}
            handleClick={() => {
              if (address) {
                navigate('/campaign');
              } else {
                navigate('/');
              }
            }}
        />
        <Link to="/profile">
          <div className='profile-icon'>
            <img src='../assets/thirdweb.png' alt="user" />
          </div>
        </Link>
      </div>
      <div className='mobile-menu'>
        <div className='profile-icon'>
          <img src='../assets/thirdweb.png' alt="user" />
        </div>
        <div className='menu-button' onClick={() => setToggleDrawer(!toggleDrawer)}>
          <Menu />
        </div>
        <div className={`drawer ${toggleDrawer ? 'open' : 'closed'}`}>
          <ul>
            {navlinks.map((link) => (
              <li key={link.name} className={isActive === link.name ? 'active' : ''} onClick={() => { setIsActive(link.name); setToggleDrawer(false); navigate(link.link) }}>{link.name}</li>
            ))}
          </ul>
          <div>
            <CustomButton
              btnType="button"
              title={address ? 'Create a campaign' : 'Connect'}
              styles={address ? 'bg-create-campaign' : 'bg-connect'}
              handleClick={() => {
                if (address) navigate('/campaign');
                else navigate('/');
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
