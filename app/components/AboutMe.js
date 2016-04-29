var React = require('react')
var styles = require('../styles')

function AboutMe() {
  return (
    <div className="center" style={styles.page}>
      <p>Born and raised in Sacramento, CA</p>
      <img src="http://i.imgur.com/oQGyR06.png" style={styles.code}/>
      <p>Aspiring to be a Full Stack Web Developer</p>
      <p>Passionate in writing clean and functional code</p>
        <div style={styles.stack}>
          <div><img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/45/MongoDB-Logo.svg/1054px-MongoDB-Logo.svg.png"  style={styles.mongo}/></div>
          <div><img src="http://amt.in/img/services/express.png" style={styles.express}/></div>
          <div><img src="http://daynin.github.io/clojurescript-presentation/img/react-logo.png" style={styles.react}/></div>
          <div><img src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png"style={styles.node}/></div>
        </div>
      </div>         
  )
}

module.exports = AboutMe