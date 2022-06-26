export type TerminalRule = [head: string, terminal: string]
export type NonterminalRule = [head: string, left: string, right: string]
export type Rule = TerminalRule | NonterminalRule

export type TerminalNode = {
  head: string
  terminal: string
}
export type NonterminalNode = {
  head: string
  left: ParseNode
  right: ParseNode
}
export type ParseNode = TerminalNode | NonterminalNode

export default function cyk(rules: Rule[], input: string[]) {
  const n = input.length
  const r = rules.length
  const P = new Array<(Map<string, ParseNode> | undefined)[]>(n)
  for (let i = 0; i < n; i++) {
    const P_i = new Array<Map<string, ParseNode> | undefined>(n - i).fill(undefined)
    P[i] = P_i
  }

  // Fill in terminal rules
  for (let j = 0; j < n; j++) {
    const terminal = input[j]
    for (let k = 0; k < r; k++) {
      const rule = rules[k]
      if (rule.length === 2 && rule[1] === terminal) {
        const entry = P[0][j]
        const head = rule[0]
        if (entry) {
          entry.set(head, { head, terminal })
        } else {
          P[0][j] = new Map([[rule[0], { head, terminal }]])
        }
      }
    }
  }

  // Build up the parse tree
  for (let length = 1; length < n; length++) {
    for (let start = 0; start < n - length; start++) {
      for (let partition = 1; partition <= length; partition++) {
        const leftEntry = P[partition - 1][start]
        if (!leftEntry) continue
        const rightEntry = P[length - partition][start + partition]
        if (!rightEntry) continue

        for (const rule of rules) {
          if (rule.length === 3) {
            const [head, leftRule, rightRule] = rule
            const left = leftEntry.get(leftRule)
            if (!left) continue
            const right = rightEntry.get(rightRule)
            if (!right) continue

            const entry = P[length][start]
            if (entry) {
              entry.set(head, { head, left, right })
            } else {
              P[length][start] = new Map([[head, { head, left, right }]])
            }
          }
        }
      }
    }
  }

  // Return the parse map
  return P
}
