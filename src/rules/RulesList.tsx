import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import React from 'react'

import useParserStore, { selectRules, selectAddRule } from '../state/ParserStore'

import RuleRow from './RuleRow'

/**
 * The grid container of rule rows
 * @return {React.ReactElement}
 */
export default function RulesList(): React.ReactElement {
  const rules = useParserStore(selectRules, (last, next) => last.length === next.length)
  const addRule = useParserStore(selectAddRule)

  const handleAddRule = (type: 'terminal' | 'nonterminal') => () =>
    addRule(rules.length, type === 'terminal' ? ['', ''] : ['', '', ''])

  return (
    <Paper variant="outlined">
      <Box padding={2}>
        <Box paddingX={2} paddingY={1}>
          <Typography fontWeight="medium" variant="h4">
            Production Rules
          </Typography>
          <Typography fontWeight="light">{rules.length} defined</Typography>
        </Box>
        <Box paddingX={2} paddingY={1}>
          <Typography>
            Productions used by the CYK parser must be in{' '}
            <a href="https://en.wikipedia.org/wiki/Chomsky_normal_form">Chomsky Normal Form (CNF)</a>.
          </Typography>
        </Box>
        <Grid columns={14} container justifyContent="space-between" paddingX={2} paddingY={1} spacing={2}>
          {rules.map((_, index) => (
            <RuleRow index={index} key={index} />
          ))}
          <Grid item>
            <ButtonGroup variant="outlined">
              <Button onClick={handleAddRule('terminal')}>Add Terminal Rule</Button>
              <Button onClick={handleAddRule('nonterminal')}>Add Non-Terminal Rule</Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  )
}
