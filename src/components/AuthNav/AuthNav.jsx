import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './AuthNav.module.scss';
// import Button from '@material-ui/core/Button';


const style = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    fontSize: '18px',
    color: '#2A363B',
  },
  activeLink: {
    color: '#23b1e7',
  },
};

const AuthNav = () => {
 
  return (
    
 
    <nav className={styles.list}>
        
          <NavLink
           exact
           to='/register'
           style={style.link}
           activeStyle={style.activeLink}
          >
           Sing Up
          </NavLink>
        
        
         <NavLink
          to='/login'
          style={style.link}
          activeStyle={style.activeLink}
        >
        Login
         </NavLink>
        
    </nav>
    
  )
};

export default AuthNav;