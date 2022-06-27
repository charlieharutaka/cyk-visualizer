import { Grid, IconButton, TextField } from '@mui/material'
import { Remove, ArrowRightAlt } from '@mui/icons-material'
import React, { useState } from 'react'

type TerminalRuleRowProps = {
  head: string
  terminal: string
  onChangeHead: (terminal: string) => void
  onChangeTerminal: (terminal: string) => void
}

/**
 * The row element for terminal rules
 * @param {TerminalRuleRowProps} props
 * @return {React.ReactElement}
 */
export default function TerminalRuleRow({
  head,
  terminal,
  onChangeHead,
  onChangeTerminal,
}: TerminalRuleRowProps): React.ReactElement {
  const [headValue, setHeadValue] = useState(() => head)
  const [terminalValue, setTerminalValue] = useState(() => terminal)

  const handleChangeHead = (event: React.ChangeEvent<HTMLInputElement>): void => setHeadValue(event.target.value)
  const handleChangeTerminal = (event: React.ChangeEvent<HTMLInputElement>): void =>
    setTerminalValue(event.target.value)

  const handleBlurHead = (): void => onChangeHead(headValue)
  const handleBlurTerminal = (): void => onChangeTerminal(terminalValue)

  return (
    <>
      <Grid item xs={4}>
        <TextField
          required
          label="Head"
          fullWidth
          value={headValue}
          onChange={handleChangeHead}
          onBlur={handleBlurHead}
        />
      </Grid>
      <Grid
        item
        xs={1}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ArrowRightAlt color="action" />
      </Grid>
      <Grid item xs={6}>
        <TextField
          required
          label="Terminal"
          fullWidth
          value={terminalValue}
          onChange={handleChangeTerminal}
          onBlur={handleBlurTerminal}
        />
      </Grid>
      <Grid
        item
        xs={1}
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <IconButton aria-label="delete">
          <Remove />
        </IconButton>
      </Grid>
    </>
  )
}
