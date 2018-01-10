import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import ToolbarTitle from './index.js'

storiesOf('ToolbarTitle', module).add('ToolbarTitle', () => (
  <MuiThemeProvider>
    <ToolbarTitle
      className="ToolbarTitle"
      key="ToolbarTitle"
      style={{ padding: 20, maxWidth: 200, margin: 20 }}
      onClick={() => console.log('>>> ToolbarTitle')}
    >
      ToolbarTitle inside!
    </ToolbarTitle>
  </MuiThemeProvider>
))
