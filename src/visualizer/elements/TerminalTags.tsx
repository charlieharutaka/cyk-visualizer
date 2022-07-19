import React from 'react'

import TagCircle from './TagCircle'

type TerminalTagsProps = {
  tags: string[]
  cx: number
  cy: number
}

/**
 * Vertical list of tag circles
 * @param {TerminalTagsProps} props
 * @return {React.ReactElement}
 */
export default function TerminalTags({ tags, cx, cy }: TerminalTagsProps): React.ReactElement {
  return (
    <g>
      {tags.map((tag, index) => (
        <TagCircle cx={cx} cy={index * 75 + cy} key={index} tag={tag} />
      ))}
    </g>
  )
}
