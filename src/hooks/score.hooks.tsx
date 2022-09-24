import { useCallback, useEffect, useState } from 'react'
import Services from 'services'

const useScoreByEmail = () => {
  const [score, setScore] = useState<number>(0)
  const [fixList, setFixList] = useState<Array<string>>([])

  const fetchScoreData = useCallback(async () => {
    try {
      const userScore = await Services.Score.get()
      setScore(userScore.scoreHistory[userScore.scoreHistory.length - 1].score)
      setFixList(Object.values(userScore.scoreHistory[userScore.scoreHistory.length - 1].fixList))
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      fetchScoreData()
    }, 5000)

    fetchScoreData()

    return () => {
      setScore(0)
      setFixList([])
      clearInterval(interval)
    }
  }, [fetchScoreData])

  return [score, fixList] as const
}

export { useScoreByEmail }
