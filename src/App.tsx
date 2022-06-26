import { ThemeProvider } from '@mui/material/styles'
import Header from './Header'
import Theme from './Theme'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <Header />
      </ThemeProvider>
    </div>
  )
}

export default App
