import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import React from 'react'

import TagTerminals from './TagTerminals'

/**
 * The visualizer section
 * @return {React.ReactElement}
 */
export default function VisualizerSection(): React.ReactElement {
  return (
    <Paper variant="outlined">
      <Box padding={2}>
        <Box paddingX={2} paddingY={1}>
          <Typography fontWeight="medium" variant="h4">
            Parse Visualizer
          </Typography>
        </Box>
        <TagTerminals />
      </Box>
    </Paper>
  )
}
