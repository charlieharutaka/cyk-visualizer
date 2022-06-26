import { ThemeProvider } from '@mui/material/styles'
import Header from './Header'
import Parser from './parser/Parser'
import Theme from './Theme'

function App() {
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
