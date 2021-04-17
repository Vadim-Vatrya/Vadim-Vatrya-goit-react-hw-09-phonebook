import { useState } from 'react';
import {  useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import styles from './LoginView.module.scss';

const LoginView = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
          setEmail(value);
          break;

      case 'password':
          setPassword(value);
          break;

      default:
          return;
  }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!email || !password) 
      return
    ;

    dispatch(authOperations.login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <>
      
      <form onSubmit={handleSubmit} autoComplete="off" className={styles.form}>
        <label className={styles.label}>
          <span className={styles.span}>E-mail</span>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Enter e-mail"
            value={email}
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
         <span className={styles.password}>Password</span> 
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Enter password"
            value={password}
            className={styles.input}
          />
        </label>

       
          <button type="submit" className={styles.button}>Login</button>
        
      </form>
    </>
  )
};

export default LoginView;