import create from 'zustand'

import { Rule } from '../../cyk/cyk'
import { exampleGrammar, exampleSentence } from '../../cyk/example'

export type ParserStore = {
  rules: Rule[]
  tokens: string[]
  addRule: (index: number, rule: Rule) => void
  editRule: (index: number, rule: Rule) => void
  moveRule: (startIndex: number, targetIndex: number) => void
  removeRule: (index: number) => void
  addToken: (token: string) => void
  removeToken: (index: number) => void
}

/**
 * Selects the rules from the store
 * @param {ParserStore} state
 * @return {Rule[]}
 */
export function selectRules(state: ParserStore): Rule[] {
  return state.rules
}

/**
 * Selects the add rule function from the store
 * @param {ParserStore} state
 * @return {function(index: number, rule: Rule): void}
 */
export function selectAddRule(state: ParserStore): (index: number, rule: Rule) => void {
  return state.addRule
}

/**
 * Selects the edit rule function from the store
 * @param {ParserStore} state
 * @return {function(index: number, rule: Rule): void}
 */
export function selectEditRule(state: ParserStore): (index: number, rule: Rule) => void {
  return state.editRule
}

/**
 * Selects the move rule function from the store
 * @param {ParserStore} state
 * @return {function(startIndex: number, targetIndex: number): void}
 */
export function selectMoveRule(state: ParserStore): (startIndex: number, targetIndex: number) => void {
  return state.moveRule
}

/**
 * Selects the remove rule function from the store
 * @param {ParserStore} state
 * @return {function(index: number, rule: Rule): void}
 */
export function selectRemoveRule(state: ParserStore): (index: number) => void {
  return state.removeRule
}

/**
 * Selects the tokens
 * @param {ParserStore} state
 * @return {string[]}
 */
export function selectTokens(state: ParserStore): string[] {
  return state.tokens
}

/**
 * Selects the add token function
 * @param {ParserStore} state
 * @return {function(token: string): void}
 */
export function selectAddToken(state: ParserStore): (token: string) => void {
  return state.addToken
}

/**
 * Selects the remove token function
 * @param {ParserStore} state
 * @return {function(index: number): void}
 */
export function selectRemoveToken(state: ParserStore): (index: number) => void {
  return state.removeToken
}

export default create<ParserStore>(set => ({
  rules: [...exampleGrammar],
  tokens: [...exampleSentence],
  addRule: (index, rule): void => set(state => ({ rules: (state.rules.splice(index, 0, rule), state.rules) })),
  editRule: (index, rule): void => set(state => ({ rules: (state.rules.splice(index, 1, rule), state.rules) })),
  moveRule: (startIndex, targetIndex): void =>
    set(state => ({
      rules: (state.rules.splice(targetIndex, 1, state.rules[startIndex]), state.rules),
    })),
  removeRule: (index): void => set(state => ({ rules: (state.rules.splice(index, 1), state.rules) })),
  addToken: (token): void => set(state => ({ tokens: [...state.tokens, token] })),
  removeToken: (index): void => set(state => ({ tokens: state.tokens.filter((token, i) => i !== index) })),
}))