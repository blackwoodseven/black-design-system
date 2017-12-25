const _colors = {
  black: '#000000' /* Black */,
  purple: '#776FB2' /* Toolbox */,
  smoke: '#E6E6E6' /* Smoke */,
  gray: '#777777' /* Gray  */,
  manatee: '#9A9A9A' /* Manatee */,
  gainsboro: '#DDDDDD' /* Gainsboro */,
  white: '#FFFFFF' /* White */,
  verdigris: '#41AAA9' /* Verdigris */,
  jasper: '#E33440' /* Jasper */,
  mulberry: '#C65282' /* Mulberry */,
  onyx: '#141414' /* Onyx */,
  pastelOrange: '#FDBB54' /* Pastel orange */,
  tealGreen: '#04714C' /* Teal green */,
  etonBlue: '#80CFA9' /* Eton blue */,
  turquoise: '#27CEBF' /* Turquoise */,
  mediumTurqouise: '#54C3E1' /* Medium turquoise */,
  orchid: '#CB80CF' /* Orchid */,
  tickleMe: '#FF82AF' /* Tickle Me Pink */
}

const theme = {
  palette: { ..._colors },
  fontSize: {
    small: 12,
    medium: 16,
    large: 24,
    extraLarge: 32
  },
  fontFamily: {
    main: 'LabGrotesque, Helvetica, sans-serif'
  },
  fontWeight: {
    light: 300,
    regular: 400,
    semiBold: 500,
    bold: 600
  },
  padding: {
    button: '10px 14px'
  },
  boxShadow: {
    default: `0 1px 2px 0 ${_colors.manatee}`,
    raised: `0 2px 6px 1px ${_colors.manatee}`
  },
  transition: {
    button: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  }
}

export default theme
