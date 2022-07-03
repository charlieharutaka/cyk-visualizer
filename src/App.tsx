import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import { ThemeProvider } from '@mui/material/styles'
import React from 'react'

import Header from './Header'
import Theme from './Theme'
import InputSection from './input/InputSection'
import RulesList from './rules/RulesList'
import VisualizerSection from './visualizer/VisualizerSection'

/**
 * The main app element
 * @return {React.ReactElement}
 */
function App(): React.ReactElement {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <Box my={4}>
          <Container maxWidth="md">
            <Stack spacing={2}>
              <Header />
              <RulesList />
              <InputSection />
              <VisualizerSection />
            </Stack>
          </Container>
        </Box>
      </ThemeProvider>
    </div>
  )
}

export default App
