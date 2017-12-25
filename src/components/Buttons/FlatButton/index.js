import React from 'react'
import injectSheet from 'react-jss'

import styles from './styles'

const FlatButton = ({ classes, children, color }) => (
  <button className={classes.button}>
    <span className={classes.label} style={{ color: color || '' }}>
      {children}
    </span>
  </button>
)

export default injectSheet(styles)(FlatButton)
