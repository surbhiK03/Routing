import React, { } from 'react'
import DarkToggle from './DarkToggle'
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/img/logo-black.png'
import LogoWhite from '../../assets/img/logo-white.png'

const Header = () => {
   

  return (

    <>
    <header className="header">
      <div className='brandLogo'>
        <img src={Logo} alt="" />
      </div>

      <div className='navigation'>
        <nav>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <NavLink to="/dashboard">
                  <ListItemText primary="Dashboard" />
                </NavLink>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <NavLink to="/about">
                  <ListItemText primary="About" />
                </NavLink>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <NavLink to="/profile">
                  <ListItemText primary="Profile" />
                </NavLink>
              </ListItemButton>
            </ListItem>
          </List>
        </nav>

        <div className='fix-menu'>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <NavLink to="/login">
                  <ListItemText primary="Logout" />
                </NavLink>
              </ListItemButton>
            </ListItem>
          </List>
          <DarkToggle/>
        </div>
      </div>
    </header>
    </>
    
  )
}

export default Header