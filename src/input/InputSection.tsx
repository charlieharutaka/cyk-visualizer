import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import React from 'react'
import shallow from 'zustand/shallow'

import useParserStore, { selectTokens } from '../state/ParserStore'

import TokensList from './TokenList'

/**
 * The input component
 * @return {React.ReactElement}
 */
export default function InputSection(): React.ReactElement {
  const tokens = useParserStore(selectTokens, shallow)

  return (
    <Paper variant="outlined">
      <Box padding={2}>
        <Box paddingX={2} paddingY={1}>
          <Typography fontWeight="medium" variant="h5">
            Input Tokens
          </Typography>
          <Typography fontWeight="light">{tokens.length} tokens</Typography>
        </Box>
        <Box paddingX={2} paddingY={1}>
          <TokensList />
        </Box>
      </Box>
    </Paper>
  )
}
