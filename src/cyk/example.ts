import { Rule } from './cyk'

const exampleGrammar: Rule[] = [
  ['S', 'NP', 'VP'],
  ['VP', 'VP', 'PP'],
  ['VP', 'V', 'NP'],
  ['VP', 'eats'],
  ['PP', 'P', 'NP'],
  ['NP', 'Det', 'N'],
  ['NP', 'she'],
  ['V', 'eats'],
  ['P', 'with'],
  ['N', 'fish'],
  ['N', 'fork'],
  ['Det', 'a'],
]

const exampleSentence = ['she', 'eats', 'a', 'fish', 'with', 'a', 'fork']

export { exampleGrammar, exampleSentence }
