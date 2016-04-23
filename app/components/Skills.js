var React = require('react')
var styles = require('../styles')

function Skills() {
  return (
    <div className="container center">
      <h2 className="header">Skills</h2>
      <div className='row'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2000px-HTML5_logo_and_wordmark.svg.png" style={styles.html}/>
      <img src="http://opencode.us/wp-content/uploads/2013/10/css3_logo.png" style={styles.css}/>
      <img src="https://camo.githubusercontent.com/02ed3f6695f288aedec24c2a329c667281efef5f/687474703a2f2f707265636973696f6e2d736f6674776172652e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031342f30342f6a5175726572792e676966" style={styles.jquery}/>
      <img src="http://code-maven.com/img/angularjs.png" style={styles.angular}/>
      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/62/MySQL.svg/1280px-MySQL.svg.png" style={styles.mysql}/>
      </div>
    </div>  
  )
}

module.exports = Skills