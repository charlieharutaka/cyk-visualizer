import { Box, Container, Typography } from '@mui/material'
import React, { useState } from 'react'

import { Rule } from '../cyk/cyk'
import { exampleGrammar } from '../cyk/example'

import RulesList from './rules/RulesList'

/**
 *
 * @return {React.ReactElement}
 */
export default function Parser(): React.ReactElement {
  const [rules, setRules] = useState<Rule[]>(() => exampleGrammar)
  const handleAddRule = (index: number, rule: Rule): void => setRules(rules => (rules.splice(index, 0, rule), rules))
  const handleEditRule = (index: number, rule: Rule): void => setRules(rules => (rules.splice(index, 1, rule), rules))
  const handleMoveRule = (startIndex: number, targetIndex: number): void =>
    setRules(rules => (rules.splice(targetIndex, 0, rules.splice(startIndex, 1)[0]), rules))
  const handleRemoveRule = (index: number): void => setRules(rules => (rules.splice(index, 1), rules))

  return (
    <Box my={4}>
      <Container maxWidth="md">
        <Typography variant="h3" fontWeight="medium">
          Rules
        </Typography>
        <RulesList
          rules={rules}
          onAddRule={handleAddRule}
          onEditRule={handleEditRule}
          onMoveRule={handleMoveRule}
          onRemoveRule={handleRemoveRule}
        />
      </Container>
    </Box>
  )
}
