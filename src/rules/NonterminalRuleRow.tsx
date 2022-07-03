import ArrowRightAlt from '@mui/icons-material/ArrowRightAlt'
import Remove from '@mui/icons-material/Remove'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import React from 'react'

type NonterminalRuleRowProps = {
  head: string
  left: string
  right: string
  onChangeHead: (head: string) => void
  onChangeLeft: (left: string) => void
  onChangeRight: (right: string) => void
  onRemove: () => void
}

/**
 * The row component for non-terminal rules
 * @param {NonterminalRuleRowProps} props
 * @return {React.ReactElement}
 */
export default function NonterminalRuleRow({
  head,
  left,
  right,
  onChangeHead,
  onChangeLeft,
  onChangeRight,
  onRemove,
}: NonterminalRuleRowProps): React.ReactElement {
  const handleChangeHead = (event: React.ChangeEvent<HTMLInputElement>): void => onChangeHead(event.target.value)
  const handleChangeLeft = (event: React.ChangeEvent<HTMLInputElement>): void => onChangeLeft(event.target.value)
  const handleChangeRight = (event: React.ChangeEvent<HTMLInputElement>): void => onChangeRight(event.target.value)

  return (
    <>
      <Grid item xs={4}>
        <TextField
          fullWidth
          label="Head"
          onChange={handleChangeHead}
          required
          size="small"
          value={head}
        />
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
      <Grid item xs={4}>
        <TextField
          fullWidth
          label="Left"
          onChange={handleChangeLeft}
          required
          size="small"
          value={left}
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          fullWidth
          label="Right"
          onChange={handleChangeRight}
          required
          size="small"
          value={right}
        />
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
