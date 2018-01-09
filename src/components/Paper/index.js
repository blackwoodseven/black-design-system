import React from 'react'

import './styles.css'

// const Paper = ({ classes, children, style, hovereable }) => {

// }

class Paper extends React.Component {
  render() {
    const paper = `paper ${this.props.hovereable ? 'hovereable' : ''}`
    return <div className="paper">{this.props.children}</div>
  }
}

export default Paper
