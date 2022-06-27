import { ThemeProvider } from '@mui/material/styles'
import React from 'react'

import Header from './Header'
import Parser from './parser/Parser'
import Theme from './Theme'

/**
 * The main app element
 * @return {React.ReactElement}
 */
function App(): React.ReactElement {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <Header />
        <Parser />
      </ThemeProvider>
    </div>
  )
}

export default App
