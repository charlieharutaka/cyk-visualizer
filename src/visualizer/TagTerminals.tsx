import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Zoom from '@mui/material/Zoom'
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
        <Stack direction="row" spacing={2}>
          <Stack spacing={2}>
            {tokens.map((token, index) => (
              <Stack direction="row" key={index} spacing={2}>
                <Chip label={token} variant="outlined" />
              </Stack>
            ))}
          </Stack>
          <Stack spacing={2}>
            {tokens.map((_, index) => (
              <Stack direction="row" key={index} spacing={2}>
                {parseMatrix &&
                  [...(parseMatrix[0]?.[index]?.keys() ?? [])].map(tag => (
                    <Zoom in key={tag} style={{ transitionDelay: `${index * 50}ms` }}>
                      <Chip color="primary" label={tag} variant="outlined" />
                    </Zoom>
                  ))}
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Box>
    </Box>
  )
}
