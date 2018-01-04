import React from 'react'
import injectSheet from 'react-jss'

import styles from './styles'

// const Paper = ({ classes, children, style, hovereable }) => {

// }

class Paper extends React.Component {
  render () {
    const containerClasses = this.classSet({
      paper: true,
      hovereable: this.props.hovereable
    })

    return (
      <div className={containerClasses}>
        {children}
      </div>
    )
  }
}

export default injectSheet(styles)(Paper)
