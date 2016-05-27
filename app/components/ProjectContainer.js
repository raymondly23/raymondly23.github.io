import React from 'react'
import styles from '../styles'

const ProjectContainer = (props) => {
  return (
    <div className='row center'>
      <h1>Projects</h1>
      <p>Here are a few projects that I have done</p>
      {props.children}
    </div>
  )
}

export default ProjectContainer