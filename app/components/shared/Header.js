import React, { PropTypes } from 'react';
import styles from './Header';

const Header = ({ title }) => (
  <header className={styles.root}>
    <h1>{title}</h1>
  </header>
);

Header.PropTypes = {
  title: PropTypes.string
};

export default Header;
