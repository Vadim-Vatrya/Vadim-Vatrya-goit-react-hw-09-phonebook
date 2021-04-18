import React from 'react';
import styles from './HomeView.module.scss';
import Container from '../../components/Container';



const HomeView = () => (
  <Container>
    <div className={styles.img}>
    <h1 className={styles.title}>
     Wellcome to Phonebook
    </h1>
    </div>
    
      </Container>
);

export default HomeView;