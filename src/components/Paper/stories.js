import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import Paper from './index'

const style = {
  width: 200
}

storiesOf('Paper', module).add('Paper', () => (
  <div className="wrapper">
    <Paper onClick={action('clicked')} style={style}>
      {' '}
      Click Me!{' '}
    </Paper>
    <br />
    <Paper onClick={action('clicked')} style={style} hovereable>
      Hover Me!
    </Paper>
  </div>
))
