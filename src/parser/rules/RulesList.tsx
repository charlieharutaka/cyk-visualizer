import { Grid } from '@mui/material'
import React from 'react'

import { Rule } from '../../cyk/cyk'

import NonterminalRuleRow from './NonterminalRuleRow'
import TerminalRuleRow from './TerminalRuleRow'

type RulesListProps = {
  rules: Rule[]
  onAddRule: (index: number, rule: Rule) => void
  onEditRule: (index: number, rule: Rule) => void
  onMoveRule: (startIndex: number, targetIndex: number) => void
  onRemoveRule: (index: number) => void
}

type HandleChangeType = 'head' | 'terminal' | 'left' | 'right'

/**
 * The grid container of rule rows
 * @param {RulesProps} props
 * @return {React.ReactElement}
 */
export default function RulesList({
  rules,
  onAddRule,
  onEditRule,
  onMoveRule,
  onRemoveRule,
}: RulesListProps): React.ReactElement {
  const handleEdit = (index: number, rule: Rule, type: HandleChangeType) => (value: string) => (
    rule.splice(type === 'head' ? 0 : type === 'terminal' || type === 'left' ? 1 : 2, 1, value), onEditRule(index, rule)
  )

  return (
    <Grid container spacing={2}>
      {rules.map((rule, index) =>
        rule.length === 2 ? (
          <TerminalRuleRow
            key={rule.join('-')}
            head={rule[0]}
            terminal={rule[1]}
            onChangeHead={handleEdit(index, rule, 'head')}
            onChangeTerminal={handleEdit(index, rule, 'terminal')}
          />
        ) : (
          <NonterminalRuleRow
            key={rule.join('-')}
            head={rule[0]}
            left={rule[1]}
            right={rule[2]}
            onChangeHead={handleEdit(index, rule, 'head')}
            onChangeLeft={handleEdit(index, rule, 'left')}
            onChangeRight={handleEdit(index, rule, 'right')}
          />
        ),
      )}
    </Grid>
  )
}
