import { Button, ButtonGroup, Grid, Paper } from '@mui/material'
import React from 'react'

import useParserStore from '../state/ParserStore'

import RuleRow from './RuleRow'

/**
 * The grid container of rule rows
 * @return {React.ReactElement}
 */
export default function RulesList(): React.ReactElement {
  const rules = useParserStore(state => state.rules)

  return (
    <Paper variant="outlined">
      <Grid container spacing={2} padding={2} columns={14} justifyContent="space-between">
        {rules.map((rule, index) => (
          <RuleRow key={rule.join('-')} index={index} />
        ))}
        <Grid item />
        <Grid item>
          <ButtonGroup variant="outlined">
            <Button>Add Terminal Rule</Button>
            <Button>Add Non-Terminal Rule</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </Paper>
  )
}
