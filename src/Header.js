import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import SearchIcon from '@material-ui/icons/Search';
import { ArrowDropDown } from '@material-ui/icons';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
  return (
    <div className='header'>
        <div className='header_left'>
            <IconButton>
                <MenuIcon></MenuIcon>
            </IconButton>
            <EmailIcon></EmailIcon>
          

        </div>
        <div className='header_middle'>
          <SearchIcon />
          <input placeholder='Search null' type='text'></input>
          <ArrowDropDown className='header__inputCaret'></ArrowDropDown>
            
        </div>
        <div className='header_right'>
          <IconButton>
            <AppsIcon></AppsIcon>
          </IconButton>

          <IconButton>
            <NotificationsIcon></NotificationsIcon>
          </IconButton>

          <Avatar/>

        </div>
       
        </div>
  )
}

export default Header