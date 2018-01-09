import { configure } from '@storybook/react'

// function loadStories() {
//   require('../src/stories')
// }

const req = require.context('../src/components', true, /stories\.js$/)
// console.log('REQ', req)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
