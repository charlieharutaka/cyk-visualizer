import create from 'zustand'

import { Rule } from '../../cyk/cyk'
import { exampleGrammar } from '../../cyk/example'

export type ParserStore = {
  rules: Rule[]
  addRule: (index: number, rule: Rule) => void
  editRule: (index: number, rule: Rule) => void
  moveRule: (startIndex: number, targetIndex: number) => void
  removeRule: (index: number) => void
}

export default create<ParserStore>(set => ({
  rules: [...exampleGrammar],
  addRule: (index, rule): void => set(state => ({ rules: (state.rules.splice(index, 0, rule), state.rules) })),
  editRule: (index, rule): void => set(state => ({ rules: (state.rules.splice(index, 1, rule), state.rules) })),
  moveRule: (startIndex, targetIndex): void =>
    set(state => ({
      rules: (state.rules.splice(targetIndex, 1, state.rules[startIndex]), state.rules),
    })),
  removeRule: (index): void => set(state => ({ rules: (state.rules.splice(index, 1), state.rules) })),
}))
