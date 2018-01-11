import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import TableRowColumn from './index.js'

storiesOf('TableRowColumn', module).add('TableRowColumn', () => (
  <MuiThemeProvider>
    <TableRowColumn className="TableRowColumn" />
  </MuiThemeProvider>
))
