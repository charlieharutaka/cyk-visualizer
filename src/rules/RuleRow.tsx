import React, { useCallback } from 'react'
import shallow from 'zustand/shallow'

import useParserStore, { selectEditRule, selectRemoveRule } from '../state/ParserStore'

import NonterminalRuleRow from './NonterminalRuleRow'
import TerminalRuleRow from './TerminalRuleRow'

type RuleRowProps = {
  index: number
}

/**
 * The row element for rules
 * @param {RuleRowProps} props
 * @return {React.ReactElement}
 */
export default function RuleRow({ index }: RuleRowProps): React.ReactElement {
  const rule = useParserStore(
    useCallback(state => state.rules[index], [index]),
    shallow,
  )
  const editRule = useParserStore(selectEditRule)
  const removeRule = useParserStore(selectRemoveRule)

  const handleEdit = (type: 'head' | 'terminal' | 'left' | 'right') => (value: string) => {
    if (rule.length === 2) {
      switch (type) {
        case 'head':
          editRule(index, [value, rule[1]])
          break
        case 'terminal':
          editRule(index, [rule[0], value])
          break
        default:
          break
      }
    } else {
      switch (type) {
        case 'head':
          editRule(index, [value, rule[1], rule[2]])
          break
        case 'left':
          editRule(index, [rule[0], value, rule[2]])
          break
        case 'right':
          editRule(index, [rule[0], rule[1], value])
          break
        default:
          break
      }
    }
  }

  const handleRemove = (): void => removeRule(index)

  return rule ? (
    rule.length === 2 ? (
      <TerminalRuleRow
        head={rule[0]}
        onChangeHead={handleEdit('head')}
        onChangeTerminal={handleEdit('terminal')}
        onRemove={handleRemove}
        terminal={rule[1]}
      />
    ) : (
      <NonterminalRuleRow
        head={rule[0]}
        left={rule[1]}
        onChangeHead={handleEdit('head')}
        onChangeLeft={handleEdit('left')}
        onChangeRight={handleEdit('right')}
        onRemove={handleRemove}
        right={rule[2]}
      />
    )
  ) : (
    <></>
  )
}
