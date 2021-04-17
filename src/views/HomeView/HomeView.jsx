import React from 'react';
import styles from './HomeView.module.scss';
import Container from '../../components/Container';
import palette from '../../images/palette.jpg';


const HomeView = () => (
  <Container>
    <h1 className={styles.title}>
     Wellcome to Phonebook
    </h1>
    <img
                className={styles.HomeImg}
                src={palette}
                alt="Home page of our phonebook"
                width="600"
            />
  </Container>
);

export default HomeView;