var React = require('react')
var styles = require('../styles')

function Projects(props) {
  return (
        <a href={props.link}>
        <div className="col s4">
          <div className="card hoverable">
            <div className="card-image">
              <img src={props.projectImg} style={styles.projectImg}/>
              <span className="card-title">{props.projectTitle}</span>
            </div>
            <div className="card-content">
              <p>{props.projectDescription}</p>
            </div>
          </div>
        </div>  
        </a>
  )
}

module.exports = Projects