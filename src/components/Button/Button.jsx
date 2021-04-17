import React from 'react';
import styles from './Button.module.scss';

const Button = () => {
  return (
    <button type='submit' className={styles.button}>
      Add contact
    </button>
  )
};

export default Button;