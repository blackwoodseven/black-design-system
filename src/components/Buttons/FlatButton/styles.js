import theme from 'theme'
import color from 'color'

const styles = {
  button: {
    background: 'none',
    borderRadius: 2,
    border: 'none',
    padding: theme.padding.button,
    cursor: 'pointer',
    outline: 'none',
    '&:hover': {
      background: theme.palette.smoke,
      transition: theme.transition.button
    },
    '&:active': {
      background: color(theme.palette.smoke).darken(0.1).hex(),
      transition: theme.transition.button
    }
  },
  label: {
    fontWeight: theme.fontWeight.semiBold,
    fontSize: theme.fontSize.small,
    color: theme.palette.turquoise,
    textTransform: 'uppercase',
    fontFamily: theme.fontFamily.main
  }
}

export default styles
