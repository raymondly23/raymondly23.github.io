var React   = require('react');
var Scroll  = require('react-scroll'); 
var Link    = Scroll.Link;
var Element = Scroll.Element;
var Events  = Scroll.Events;
var scroll  = Scroll.animateScroll;
var styles = require('../styles')


var NavBar = React.createClass({
    componentDidMount: function() {

    Events.scrollEvent.register('begin', function(to, element) {
    });

    Events.scrollEvent.register('end', function(to, element) {
    });

  },
  componentWillUnmount: function() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  },
  scrollToBottom: function() {
    scroll.scrollToBottom();
  },
  scrollToAboutMe: function() {
    scroll.scrollTo(700);
  },  
  scrollToProjects: function() {
    scroll.scrollTo(2000);
  },  
  render: function() {
  return (
    <nav className='transparent'>
    <div className="nav-wrapper" style={styles.navbar}>
      <a href="#" className="brand-logo"></a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a onClick={this.scrollToAboutMe}>About Me</a></li>
        <li><a onClick={this.scrollToProjects}>Projects</a></li>
        <li><a onClick={this.scrollToBottom}>Contact Me</a></li>
      </ul>
    </div>
  </nav>
  )
  }
})

module.exports = NavBar