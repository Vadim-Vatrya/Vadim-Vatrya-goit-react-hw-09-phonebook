import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import userAvatar from '../../images/user-avatar.svg'
import styles from './UserMenu.module.scss';
import Button from '@material-ui/core/Button';


const UserMenu = () => {

  const name = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(authOperations.logOut())
  };

  return (
    <div className={styles.container}>
      <img src={userAvatar} alt="" width="30" className={styles.userAvatar} />
      <span className={styles.span}>Welcome, {name}</span>
      <Button type="button" variant="contained" color="primary" onClick={onLogout}>
        >
        Logout
      </Button>
    </div>
  )
};

export default UserMenu;