import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import TableRow from './index.js'

storiesOf('TableRow', module).add('TableRow', () => (
  <MuiThemeProvider>
    <TableRow className="TableRow" />
  </MuiThemeProvider>
))
