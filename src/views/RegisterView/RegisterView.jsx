import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import styles from './RegisterView.module.scss'



const RegisterView = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
          setName(value);
          break;

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

    if (!name || !email || !password) 
      return
    ;

    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };


  return (
    <>
      
      <form onSubmit={handleSubmit} autoComplete="off" className={styles.form}>
        <label className={styles.label}>
          <span className={styles.span}>Name</span>
          <input
            onChange={handleChange}
            type="name"
            name="name"
            placeholder="Enter name"
            value={name}
            className={styles.input}
          />
        </label>
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
          <span className={styles.password}>
            Password
            </span>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Enter password"
            value={password}
            className={styles.input}
          />
        </label>

        <button type="submit" className={styles.button}>Sing Up</button>
        
      </form>
    </>
  )

};

export default RegisterView;