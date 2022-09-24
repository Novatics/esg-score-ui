import { useRef, useEffect } from 'react'
import Box from 'components/Box'
import Typography from 'components/Typography'

type TStatisticTextProps = {
  title: number
  text: string
  description: string
}

export default function StatisticText({ title, text, description }: TStatisticTextProps) {
  const counter = useRef<null | HTMLSpanElement>(null)
  useEffect(() => {
    if (counter && counter.current) {
      const counterCurrent = counter.current
      const speed = 20

      const animate = () => {
        const value = title
        const data = +counterCurrent.innerText

        const time = value / 200
        if (data < value) {
          counterCurrent.innerText = Math.ceil(data + time).toString()
          setTimeout(animate, speed)
        } else {
          counterCurrent.innerText = value.toString()
        }
      }
      animate()
    }
  }, [counter, title])

  return (
    <Box width="140px">
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }}>
        <Typography variant="h4" color="primary.main">
          <span ref={counter}>0</span>%
        </Typography>
        <Typography sx={{ marginLeft: 1 }} variant="caption" color="neutral.low.medium">
          {text}
        </Typography>
      </Box>
      <Box>
        <Typography variant="caption" color="neutral.low.medium">
          {description}
        </Typography>
      </Box>
    </Box>
  )
}
