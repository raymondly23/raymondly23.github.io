var React = require('react')

function MainWrapper(props) {
  return(
    <div className="section white">
    {props.children}
    </div>


  )
}

module.exports = MainWrapper