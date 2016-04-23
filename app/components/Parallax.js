var React = require('react')
var styles = require('../styles')

$(document).ready(function(){
  $('.parallax').parallax();
});

function Parallax() {
  return (
        <div className='parallax-container' style={styles.parallax}>
            <div className='row'>
              <div className='col s6 container center' style={styles.parallaxText2}>
              <p>There is a motto I like to code by,</p>
              <p>If you can think it, WE can build it!</p>
              <p>I think of myself not just as a Web Developer but also a Dream Builder.</p>
              <p>I have the tools and knowledge to build almost anything</p>
              <p>But the million dollar question is WHAT should we build.</p>
              <p>Have an idea? Run it by me. Lets try and make it happen.</p>
              </div>              
            </div>
          <div className='parallax'> 
            <img src="http://i.imgur.com/p5Xjh1b.jpg"/>
          </div>
        </div>
    )
}

module.exports = Parallax