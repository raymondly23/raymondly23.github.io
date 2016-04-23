var React = require('react')
var NavParallax = require('./NavParallax')
var Parallax = require('./Parallax')
var MainWrapper = require('./MainWrapper')
var AboutMe = require('./AboutMe')
var Projects = require('./Projects')
var ProjectContainer = require('./ProjectContainer')
var Footer = require('./Footer')

var Main = React.createClass({
  render: function() {
  var project = [{
    img: '',
    description: 'In progess...',
    link: '#'
  }, {
    img: '',
    description: 'In progess...',
    link: '#'
  }, {
    img: '',
    description: 'In progess...',
    link: '#'
  }]
    return (
      <div>
        <NavParallax/>
        <AboutMe/>
        <Parallax/>
          <ProjectContainer>
          <Projects projectImg={project[0].img} projectDescription={project[0].description} link={project[0].link}/>   
          <Projects projectImg={project[1].img} projectDescription={project[1].description} link={project[1].link}/>   
          <Projects projectImg={project[2].img} projectDescription={project[2].description} link={project[2].link}/>   
          </ProjectContainer> 
        <Footer/>
      </div>
    )
  }
})

module.exports = Main