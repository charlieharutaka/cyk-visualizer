import { ArrowRightAlt, Remove } from '@mui/icons-material'
import { Grid, IconButton, TextField } from '@mui/material'
import React, { useState } from 'react'

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
  const [headValue, setHeadValue] = useState(() => head)
  const [leftValue, setLeftValue] = useState(() => left)
  const [rightValue, setRightValue] = useState(() => right)

  const handleChangeHead = (event: React.ChangeEvent<HTMLInputElement>): void => setHeadValue(event.target.value)
  const handleChangeLeft = (event: React.ChangeEvent<HTMLInputElement>): void => setLeftValue(event.target.value)
  const handleChangeRight = (event: React.ChangeEvent<HTMLInputElement>): void => setRightValue(event.target.value)

  const handleBlurHead = (): void => onChangeHead(headValue)
  const handleBlurLeft = (): void => onChangeLeft(leftValue)
  const handleBlurRight = (): void => onChangeRight(rightValue)

  return (
    <>
      <Grid
        item
        xs={1}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <IconButton aria-label="delete" onClick={onRemove}>
          <Remove />
        </IconButton>
      </Grid>
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
      <Grid item xs={4}>
        <TextField
          required
          label="Left"
          fullWidth
          value={leftValue}
          onChange={handleChangeLeft}
          onBlur={handleBlurLeft}
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          required
          label="Right"
          fullWidth
          value={rightValue}
          onChange={handleChangeRight}
          onBlur={handleBlurRight}
        />
      </Grid>
    </>
  )
}
