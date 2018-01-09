import React from 'react'

import './styles.css'

const RaisedButton = ({ children, color }) => (
  <button className="button">
    <span className="label" style={{ color: color || '' }}>
      {children}
    </span>
  </button>
)

export default RaisedButton
