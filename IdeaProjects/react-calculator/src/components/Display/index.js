import React from 'react';
import PropTypes from 'prop-types';
import styles from './display.module.css';

const Display = props => (
  <div className={styles.display} children={props.children}>

  </div>
);

//Display.defaultValues...

Display.propTypes = {
  children: PropTypes.string.isRequired
};

export default Display;