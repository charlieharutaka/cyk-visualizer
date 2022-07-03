import create from 'zustand'

import cyk, { ParseNode, Rule } from '../cyk/cyk'
import { exampleGrammar, exampleSentence } from '../cyk/example'

export type ParserStore = {
  rules: Rule[]
  tokens: string[]
  parseMatrix?: (Map<string, ParseNode> | undefined)[][]
  addRule: (index: number, rule: Rule) => void
  editRule: (index: number, rule: Rule) => void
  moveRule: (startIndex: number, targetIndex: number) => void
  removeRule: (index: number) => void
  addToken: (token: string) => void
  removeToken: (index: number) => void
  resetParseMatrix: () => void
  parse: () => void
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

/**
 * Selects the parse matrix
 * @param {ParserStore} state
 * @return {Array<Array<Map<string, ParseNode> | undefined>> | undefined}
 */
export function selectParseMatrix(state: ParserStore): (Map<string, ParseNode> | undefined)[][] | undefined {
  return state.parseMatrix
}

/**
 * Selects the reset parse matrix method
 * @param {ParserStore} state
 * @return {function(): void}
 */
export function selectResetParseMatrix(state: ParserStore): () => void {
  return state.resetParseMatrix
}

/**
 * Selects the parse method
 * @param {ParserStore} state
 * @return {function(): void}
 */
export function selectParse(state: ParserStore): () => void {
  return state.parse
}

export default create<ParserStore>(set => ({
  rules: [...exampleGrammar],
  tokens: [...exampleSentence],
  parseMatrix: undefined,
  addRule: (index, rule): void =>
    set(state => ({
      rules:
        index === state.rules.length
          ? [...state.rules, rule]
          : [...state.rules.slice(0, index), rule, ...state.rules.slice(index)],
    })),
  editRule: (index, rule): void =>
    set(state => ({
      rules: [...state.rules.slice(0, index), rule, ...state.rules.slice(index + 1)],
    })),
  moveRule: (startIndex, targetIndex): void =>
    set(
      state => (
        state.rules.splice(targetIndex, 1, state.rules.splice(startIndex, 1)[0]),
        {
          rules: [...state.rules],
        }
      ),
    ),
  removeRule: (index): void => set(state => ({ rules: state.rules.filter((_, i) => i !== index) })),
  addToken: (token): void => set(state => ({ tokens: [...state.tokens, token] })),
  removeToken: (index): void => set(state => ({ tokens: state.tokens.filter((_, i) => i !== index) })),
  resetParseMatrix: (): void => set(state => ({ parseMatrix: undefined })),
  parse: (): void => set(state => ({ parseMatrix: cyk(state.rules, state.tokens) })),
}))
