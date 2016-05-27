import React from 'react';
import styles from '../styles'

const NavBar = (props) => {
  return (
    <nav className='transparent'>
      <div className="nav-wrapper" style={styles.navbar}>
        <a href="#" className="brand-logo"></a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a onClick={props.scrollToAboutMe}>About Me</a></li>
          <li><a onClick={props.scrollToProjects}>Projects</a></li>
          <li><a onClick={props.scrollToBottom}>Contact Me</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar