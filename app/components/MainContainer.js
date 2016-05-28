import React from 'react';
import NavBar from './NavBar'
import AboutMe from './Aboutme'
import NavParallax from './NavParallax'
import Parallax from './Parallax'
import ProjectContainer from './ProjectContainer'
import Projects from './Projects'
import Footer from './Footer'
import { Link, Element, Events, animateScroll } from 'react-scroll'

class Container extends React.Component {
  componentDidMount(){
    $('.parallax').parallax();
    Events.scrollEvent.register('begin', function(to, element) {});
    Events.scrollEvent.register('end', function(to, element) {});
  }

  componentWillMount(){
  }
  scrollToBottom() {
    animateScroll.scrollToBottom();
  }
  scrollToAboutMe() {
    animateScroll.scrollTo(700);
  } 
  scrollToProjects() {
    animateScroll.scrollTo(1600);
  }

  render() {
    const project = [{
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
        <NavParallax scrollToBottom={this.scrollToBottom} scrollToAboutMe={this.scrollToAboutMe} scrollToProjects={this.scrollToProjects}/>
        <AboutMe/>
        <Parallax/>
        <ProjectContainer>
          <Projects projectImg={project[0].img} projectDescription={project[0].description} link={project[0].link}/>   
          <Projects projectImg={project[1].img} projectDescription={project[1].description} link={project[1].link}/>   
          <Projects projectImg={project[2].img} projectDescription={project[2].description} link={project[2].link}/>  
        </ProjectContainer>
        <Footer/>
      </div>
    );
  }
}

export default Container;