import React, { Component } from 'react';
import styles               from './sideMenu.module.sass';

class SideMenu extends Component {

  constructor (props) {
    super( props );
    this.state = {
      isOpened: false
    };
  }

  setIsOpened = (value) => {
    this.setState( {
                     isOpened: value
                   } );
  };

  openMenu = () => {
    this.setState( {
                     isOpened: true
                   } );
  };

  closeMenu = () => {
    this.setState( {
                     isOpened: false
                   } );
  };

  render () {
    return (
      <div tabIndex={4} className={styles.container}>
        <button onClick={this.openMenu}>Open menu</button>
      </div>
    );
  }
}

export default SideMenu;