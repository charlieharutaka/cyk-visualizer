import { Box, Container, Typography } from '@mui/material'
import { useState } from 'react'
import { Rule } from '../cyk/cyk'
import Rules from './rules/Rules'

export default function Parser() {
  const [rules, setRules] = useState<Rule[]>([])
  const handleAddRule = (rule: Rule) => setRules(rules => [...rules, rule])
  const handleRemoveRule = (index: number) => setRules(rules => (rules.splice(index, 1), [...rules]))

  return (
    <Box my={4}>
      <Container maxWidth="md">
        <Typography variant="h3" fontWeight="medium">
          Grammar
        </Typography>
        <Rules rules={rules} onAddRule={handleAddRule} onRemoveRule={handleRemoveRule} />
      </Container>
    </Box>
  )
}
