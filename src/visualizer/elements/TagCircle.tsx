import { useTheme } from '@mui/material/styles'
import { useSpring, animated, config } from '@react-spring/web'
import React, { useEffect, useState } from 'react'

type TagCircleProps = {
  tag: string
  cx: number
  cy: number
}

/**
 * An SVG circle with animated active/hover state
 * @param {TagCircleProps} props
 * @return {React.ReactElement}
 */
export default function TagCircle({ tag, cx, cy }: TagCircleProps): React.ReactElement {
  const theme = useTheme()
  const [hover, setHover] = useState(false)
  const [mounted, setMounted] = useState(false)
  const handlePointerEnter = (): void => setHover(true)
  const handlePointerLeave = (): void => setHover(false)

  const hoverStyle = useSpring({
    circleFill: hover ? theme.palette.secondary.dark : theme.palette.secondary.main,
    circleStroke: hover ? theme.palette.secondary.dark : theme.palette.secondary.main,
    config: { duration: 100 },
  })

  const mountStyle = useSpring({
    config: { friction: 500, tension: 2500 },
    cy: mounted ? cy : 30 + cy,
    opacity: mounted ? 1 : 0,
  })

  useEffect(() => (setMounted(true), (): void => setMounted(false)), [])

  return (
    <animated.g onPointerEnter={handlePointerEnter} onPointerLeave={handlePointerLeave} opacity={mountStyle.opacity}>
      <animated.circle
        cx={cx}
        cy={mountStyle.cy}
        fill={hoverStyle.circleFill}
        r={30}
        stroke={hoverStyle.circleStroke}
      />
      <animated.text dominantBaseline="middle" fill="white" textAnchor="middle" x={cx} y={mountStyle.cy}>
        {tag}
      </animated.text>
    </animated.g>
  )
}
