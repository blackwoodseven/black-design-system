import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { RaisedButton, FlatButton } from './index.js'

storiesOf('Button', module)
  .add('Raised Button', () => <div>tsetes</div>)
  .add('Flat Button', () => <FlatButton onClick={action('clicked')}> Click Me! </FlatButton>)
