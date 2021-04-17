import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import authSelectors from '../../redux/auth/auth-selectors';

// import styles from './Navigation.module.scss';

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


const Navigation = () => {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <nav>
      <NavLink
      exact
      to='/'
      style={style.link}
           activeStyle={style.activeLink}
      >
        Home
      </NavLink>
      {isAuthenticated && (
        <NavLink
        to='/contacts'
        style={style.link}
           activeStyle={style.activeLink}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  )
}

export default Navigation;