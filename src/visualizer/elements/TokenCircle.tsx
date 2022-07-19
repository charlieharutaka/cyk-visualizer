import { useTheme } from '@mui/material/styles'
import { useSpring, animated } from '@react-spring/web'
import React, { useEffect, useState } from 'react'

type TokenCircleProps = {
  token: string
  active?: boolean
  cx: number
  cy: number
}

/**
 * An SVG circle with animated active/hover state
 * @param {TokenCircleProps} props
 * @return {React.ReactElement}
 */
export default function TokenCircle({ token, active, cx, cy }: TokenCircleProps): React.ReactElement {
  const theme = useTheme()
  const [hover, setHover] = useState(false)
  const [mounted, setMounted] = useState(false)
  const handlePointerEnter = (): void => setHover(true)
  const handlePointerLeave = (): void => setHover(false)

  const style = useSpring({
    circleFill: active ? theme.palette.primary.main : 'white',
    circleStroke: active || hover ? theme.palette.primary.main : '#bdbdbd',
    config: {
      duration: 100,
    },
    opacity: mounted ? 1 : 0,
    textFill: active ? 'white' : hover ? theme.palette.primary.main : 'black',
  })

  useEffect(() => (setMounted(true), (): void => setMounted(false)), [])

  return (
    <animated.g onPointerEnter={handlePointerEnter} onPointerLeave={handlePointerLeave} opacity={style.opacity}>
      <animated.circle cx={cx} cy={cy} fill={style.circleFill} r={30} stroke={style.circleStroke} />
      <animated.text dominantBaseline="middle" fill={style.textFill} textAnchor="middle" x={cx} y={cy}>
        {token}
      </animated.text>
    </animated.g>
  )
}
