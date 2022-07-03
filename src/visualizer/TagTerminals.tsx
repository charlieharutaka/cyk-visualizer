import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React, { useEffect } from 'react'

import useParserStore, {
  selectParse,
  selectParseMatrix,
  selectResetParseMatrix,
  selectTokens,
} from '../state/ParserStore'

/**
 * The tagging terminal component
 * @return {React.ReactElement}
 */
export default function TagTerminals(): React.ReactElement {
  const tokens = useParserStore(selectTokens)
  const parseMatrix = useParserStore(selectParseMatrix)
  const parse = useParserStore(selectParse)
  const resetParseMatrix = useParserStore(selectResetParseMatrix)

  const handleStart = (): void => void (resetParseMatrix(), parse())

  useEffect(() => console.log(parseMatrix), [parseMatrix])

  return (
    <Box paddingX={2} paddingY={1}>
      <Stack direction="row" justifyContent="space-between" spacing={2}>
        <Typography fontWeight="medium" variant="h5">
          Step 1
        </Typography>
        <Button onClick={handleStart} variant="outlined">
          Start
        </Button>
      </Stack>
      <Typography>Tag tokens with terminal rules</Typography>
      <Box paddingY={2}>
        <Stack spacing={2}>
          {tokens.map((token, index) => (
            <Stack direction="row" key={index} spacing={2}>
              <Chip label={token} variant="outlined" />
              {parseMatrix &&
                [...(parseMatrix[0][index]?.keys() ?? [])].map(tag => (
                  <Chip color="primary" key={tag} label={tag} variant="outlined" />
                ))}
            </Stack>
          ))}
        </Stack>
      </Box>
    </Box>
  )
}
