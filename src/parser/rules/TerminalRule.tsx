import { Grid, IconButton, TextField } from '@mui/material'
import { Remove, ArrowRightAlt } from '@mui/icons-material'

type TerminalRuleProps = {
  head: string
  terminal: string
  onChangeHead: (terminal: string) => void
  onChangeTerminal: (terminal: string) => void
}

export default function TerminalRule({ head, terminal, onChangeHead, onChangeTerminal }: TerminalRuleProps) {
  return (
    <>
      <Grid item xs={4}>
        <TextField required label="Head" fullWidth />
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
        <TextField required label="Terminal" fullWidth />
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
