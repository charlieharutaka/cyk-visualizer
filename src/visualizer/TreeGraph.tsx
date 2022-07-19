import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import produce from 'immer'
import React, { useState } from 'react'

import useParserStore, { selectTokens, selectParseMatrix, selectParse } from '../state/ParserStore'

import TerminalTags from './elements/TerminalTags'
import TokenCircle from './elements/TokenCircle'

type TreeGraphProps = {}

/**
 *
 * @param {TreeGraphProps} props
 * @return {React.ReactElement}
 */
export default function TreeGraph(props: TreeGraphProps): React.ReactElement {
  const tokens = useParserStore(selectTokens)
  const parse = useParserStore(selectParse)
  const parseMatrix = useParserStore(selectParseMatrix)
  const [activeIndex, setActiveIndex] = useState<number>()
  const [shownIndices, setShownIndices] = useState<number[]>([])

  const handleTagTokens = (): void => {
    parse()
    setActiveIndex(0)
    setShownIndices([0])
    const id = setInterval(() => {
      setActiveIndex(index => (index === tokens.length - 1 ? (clearInterval(id), undefined) : (index ?? 0) + 1))
      setShownIndices(produce(draft => void draft.push(draft.length)))
    }, 500)
  }

  return (
    <Box height="480px" paddingX={2} width="100%">
      <Button onClick={handleTagTokens} variant="outlined">
        Tag Tokens
      </Button>
      <Box height="100%" paddingTop={2}>
        <svg
          style={{
            height: '100%',
            width: '100%',
          }}
        >
          {tokens.map((token, index) => (
            <TokenCircle active={activeIndex === index} cx={index * 75 + 31} cy={31} key={index} token={token} />
          ))}
          {parseMatrix?.[0].flatMap((tags, index) =>
            shownIndices.includes(index) ? (
              <TerminalTags cx={index * 75 + 31} cy={106} tags={[...(tags?.keys() ?? [])]} />
            ) : undefined,
          )}
        </svg>
      </Box>
    </Box>
  )
}
