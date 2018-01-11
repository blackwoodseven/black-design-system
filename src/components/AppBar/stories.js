import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import AppBar from './index.js'

storiesOf('AppBar', module).add('AppBar', () => (
  <MuiThemeProvider>
    <AppBar className="AppBar" />
  </MuiThemeProvider>
))
