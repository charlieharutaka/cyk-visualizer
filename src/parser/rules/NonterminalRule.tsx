import { Grid, IconButton, TextField } from '@mui/material'
import { Remove, ArrowRightAlt } from '@mui/icons-material'

type NonterminalRuleProps = {
  head: string
  left: string
  right: string
  onChangeHead: (head: string) => void
  onChangeLeft: (left: string) => void
  onChangeRight: (right: string) => void
}

export default function NonterminalRule({
  head,
  left,
  right,
  onChangeHead,
  onChangeLeft,
  onChangeRight,
}: NonterminalRuleProps) {
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
      <Grid item xs={3}>
        <TextField required label="Left" fullWidth />
      </Grid>
      <Grid item xs={3}>
        <TextField required label="Right" fullWidth />
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
