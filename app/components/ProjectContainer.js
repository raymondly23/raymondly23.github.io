var React = require('react')
var styles = require('../styles')

function ProjectContainer(props) {
  return (
    <div className='row center'>
      <h1>Projects</h1>
      <p>Here are a few projects that I have done</p>
      {props.children}
    </div>
  )
}

module.exports = ProjectContainer