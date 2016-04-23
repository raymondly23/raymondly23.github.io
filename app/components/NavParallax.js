var React = require('react')
var styles = require('../styles')
var NavBar = require('./NavBar')

$(document).ready(function(){
  $('.parallax').parallax();
});

function NavParallax() {
  return (
        <div className='parallax-container' style={styles.NavParallax}>
          <NavBar/>
          <div className='center' style={styles.circleContainer}>
            <img src="http://i.imgur.com/J4TqNf2.jpg" style={styles.circle}/>
            <h3 style={styles.parallaxText}>Hi, My Name is Raymond Ly</h3>
            <h4 style={styles.parallaxText}>Full Stack Web Developer</h4>
          </div>
          <div className='parallax'> 
            <img src="http://sacramento.americansportsmemories.com/wp-content/uploads/2013/01/Sacramento-Sports-Recruiting-Videos-Sacramento-Video-Editing-Services1.jpg"/>
          </div>
        </div>
    )
}

module.exports = NavParallax