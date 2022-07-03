import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import React, { useState } from 'react'
import shallow from 'zustand/shallow'

import useParserStore, { selectTokens, selectAddToken, selectRemoveToken } from '../state/ParserStore'

/**
 * The list of tokens
 * @return {React.ReactElement}
 */
export default function TokensList(): React.ReactElement {
  const [addValue, setAddValue] = useState('')
  const tokens = useParserStore(selectTokens, shallow)
  const addToken = useParserStore(selectAddToken)
  const removeToken = useParserStore(selectRemoveToken)

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void =>
    void (event.key === 'Enter' && (event.preventDefault(), handleAddToken()))
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => setAddValue(event.target.value)

  const handleAddToken = (): void => void (addValue !== '' && (addToken(addValue), setAddValue('')))
  const handleRemoveToken = (index: number) => () => removeToken(index)

  return (
    <Box>
      <Grid container paddingY={1} spacing={2}>
        {tokens.map((token, index) => (
          <Grid item key={index}>
            <Chip label={token} onDelete={handleRemoveToken(index)} variant="outlined" />
          </Grid>
        ))}
      </Grid>
      <Stack direction="row" paddingY={1} spacing={2}>
        <TextField
          fullWidth
          label="Add terminal"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          size="small"
          value={addValue}
        />
        <Button
          disabled={addValue === ''}
          onClick={handleAddToken}
          sx={{
            whiteSpace: 'nowrap',
          }}
          variant="outlined"
        >
          Add Token
        </Button>
      </Stack>
    </Box>
  )
}
