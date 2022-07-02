import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Grid from '@mui/material/Grid'
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
    <Accordion defaultExpanded variant="outlined">
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Box paddingX={1}>
          <Typography fontWeight="medium" variant="h5">
            Production Rules
          </Typography>
          <Typography fontWeight="light">{rules.length} defined</Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Box paddingX={1}>
          <Typography>
            Productions used by the CYK parser must be in{' '}
            <a href="https://en.wikipedia.org/wiki/Chomsky_normal_form">Chomsky Normal Form (CNF)</a>.
          </Typography>
        </Box>
        <Box paddingY={2} />
        <Grid columns={14} container justifyContent="space-between" padding={1} spacing={2}>
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
      </AccordionDetails>
    </Accordion>
  )
}
