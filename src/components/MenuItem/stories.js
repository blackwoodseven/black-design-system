import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import MenuItem from './index.js'

storiesOf('MenuItem', module).add('MenuItem', () => (
  <MuiThemeProvider>
    <MenuItem
      className="MenuItem"
      key="MenuItem"
      style={{ padding: 20, maxWidth: 200, margin: 20 }}
      onClick={() => console.log('>>> MenuItem')}
    >
      MenuItem inside!
    </MenuItem>
  </MuiThemeProvider>
))
