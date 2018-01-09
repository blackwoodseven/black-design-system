import React from 'react'

import './styles.css'

const FlatButton = ({ children, color }) => (
  <button className="button">
    <span className="label" style={{ color: color || '' }}>
      {children}
    </span>
  </button>
)

export default FlatButton
