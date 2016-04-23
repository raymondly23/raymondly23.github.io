var React = require('react')
var styles = require('../styles')

function Education() {
  return (
  <div className='container'>
    <h3>Education</h3>
    <div className='row'>
    <div className='col s6'>
    <span>
      Hiram Johnson Highschool
    </span>
    <br/>
    <span>
    Years: 2007 - 2011
    </span>
    </div>
    <div className='col s6'>
    </div>
    </div>

    <div className='row'>
    <div className='col s6'>
    <span>
    Consumnes River College / Sacramento City College
    </span>
    <br/>
    <span>
    Years: 2011 - 2013
    </span>
    </div>
    <div className='col s6'>
      I went to Community College not knowing what I wanted to do. Wasting 2 years of my time taking General Education Classes
    </div>    
    </div>

    <div className='row'>
    <div className='col s6'>
    <span>
    Heald
    </span>
    <br/>
    <span>
    Years: 2013 - 2015
    </span>
    </div>
    <div className='col s6'>I figured I no longer wanted to waste anymore time and went to Private Career College for Infomation Technology. With only 1 quarter left until graduation, they close down. Leaving alot of students lost, not knowing what to do.</div>
    </div>

  <div className='row'>
  <div className='col s6'>
  <span>Self-Taught</span>
  <br/>
  <span>Years: 2015 - Now</span>
  </div>  
  <div className='col s6'>
  <span>
  My girlfriend's brother in law was a Web Developer / Instructor at a coding bootcamp that always told me to try out Web Developement and so I did. In the beginning, it was hard to understand but I stuck with it and I'm glad I did. Now I am learning as much as I can with the newest frameworks and the rest is history.
  </span>
  </div>
  </div>
  </div>
  )
}

module.exports = Education