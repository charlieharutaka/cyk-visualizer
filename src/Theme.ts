import { createTheme } from '@mui/material/styles'

export default createTheme({
  palette: {
    primary: {
      main: '#d44764',
    },
    secondary: {
      main: '#54c3e9',
    },
  },
  typography: {
    fontFamily: "'Overpass', sans-serif",
    fontWeightRegular: 300,
    fontWeightLight: 100,
    fontWeightMedium: 600,
    fontWeightBold: 900,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
        },
      },
    },
  },
})
