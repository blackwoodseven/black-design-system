import theme from 'theme'
import color from 'color'

const styles = {
  paper: {
    padding: theme.padding.paper,
    boxShadow: theme.boxShadow.zDepth1,
    width: '100%',
    minHeight: 100,
    borderRadius: theme.borderRadius.default
  },
  hovereable: {
    '&:hover': {
      transition: theme.transition.paper,
      boxShadow: theme.boxShadow.zDepth3
    }
  }
}

export default styles
