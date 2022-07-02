import ArrowRightAlt from '@mui/icons-material/ArrowRightAlt'
import Remove from '@mui/icons-material/Remove'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import React from 'react'

type TerminalRuleRowProps = {
  head: string
  terminal: string
  onChangeHead: (terminal: string) => void
  onChangeTerminal: (terminal: string) => void
  onRemove: () => void
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
  onRemove,
}: TerminalRuleRowProps): React.ReactElement {
  const handleChangeHead = (event: React.ChangeEvent<HTMLInputElement>): void => onChangeHead(event.target.value)
  const handleChangeTerminal = (event: React.ChangeEvent<HTMLInputElement>): void =>
    onChangeTerminal(event.target.value)

  return (
    <>
      <Grid item xs={4}>
        <TextField fullWidth label="Head" onChange={handleChangeHead} required size="small" value={head} />
      </Grid>
      <Grid
        item
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        xs={1}
      >
        <ArrowRightAlt color="action" />
      </Grid>
      <Grid item xs={8}>
        <TextField fullWidth label="Terminal" onChange={handleChangeTerminal} required size="small" value={terminal} />
      </Grid>
      <Grid
        item
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        xs={1}
      >
        <IconButton aria-label="delete" onClick={onRemove}>
          <Remove />
        </IconButton>
      </Grid>
    </>
  )
}
