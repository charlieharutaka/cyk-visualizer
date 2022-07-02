import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Box from '@mui/material/Box'
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
    <Accordion defaultExpanded variant="outlined">
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Box paddingX={1}>
          <Typography fontWeight="medium" variant="h5">
            Input Tokens
            <Typography fontWeight="light">{tokens.length} tokens</Typography>
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <TokensList />
      </AccordionDetails>
    </Accordion>
  )
}
