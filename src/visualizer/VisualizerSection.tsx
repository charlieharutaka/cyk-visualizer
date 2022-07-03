import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import React from 'react'

import cyk from '../cyk/cyk'
import useParserStore, { selectRules, selectTokens } from '../state/ParserStore'

/**
 * The visualizer section
 * @return {React.ReactElement}
 */
export default function VisualizerSection(): React.ReactElement {
  const rules = useParserStore(selectRules)
  const tokens = useParserStore(selectTokens)

  const handleParse = (): void => console.log(cyk(rules, tokens))

  return (
    <Paper variant="outlined">
      <Box padding={2}>
        <Box paddingX={2} paddingY={1}>
          <Typography fontWeight="medium" variant="h5">
            Parse Visualizer
          </Typography>
        </Box>
        <Box paddingX={2} paddingY={1}>
          <Button onClick={handleParse} variant="outlined">Go!</Button>
        </Box>
      </Box>
    </Paper>
  )
}
