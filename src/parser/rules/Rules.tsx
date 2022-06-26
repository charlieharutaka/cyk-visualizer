import { Grid } from '@mui/material'
import TerminalRule from './TerminalRule'
import NonterminalRule from './NonterminalRule'
import { Rule } from '../../cyk/cyk'

type RulesProps = {
  rules: Rule[]
  onAddRule: (rule: Rule) => void
  onRemoveRule: (index: number) => void
}

export default function Rules({ rules, onAddRule, onRemoveRule }: RulesProps) {
  return (
    <Grid container spacing={2}>
      <TerminalRule head="" terminal="" onChangeHead={() => void 0} onChangeTerminal={() => void 0} />
      <NonterminalRule
        head=""
        left=""
        right=""
        onChangeHead={() => void 0}
        onChangeLeft={() => void 0}
        onChangeRight={() => void 0}
      />
    </Grid>
  )
}
