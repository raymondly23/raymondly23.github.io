import React from 'react'
import styles from '../styles'

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Thank you for taking the time to go through my page</h5>
            <p className="grey-text text-lighten-4">If you would like you work with me, contact me via email at raymondly23@gmail.com</p>
            <a href='https://github.com/raymondly23/raymondly23.github.io'className="grey-text text-lighten-4 hoverable">Want to see the code for this page? </a>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Connect with me!</h5>
              <a href="https://twitter.com/Rayly23"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Twitter_bird_logo_2012.svg/945px-Twitter_bird_logo_2012.svg.png" style={styles.links}/></a>
              <a href="https://www.linkedin.com/in/raymond-ly-707aa8102?trk=nav_responsive_tab_profile"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png" style={styles.links}/></a>
              <a href="https://github.com/raymondly23"><img src="http://people.mozilla.org/~dietrich/psu2014/imgs/github.png" style={styles.links}/></a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
        © 2016 Copyright Text
        </div>
      </div>
    </footer>
  )
}

export default Footer