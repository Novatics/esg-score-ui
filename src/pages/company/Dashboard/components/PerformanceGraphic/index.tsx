import { useEffect, useState } from 'react'
import 'chartjs-adapter-moment'
import {
  Chart as ChartJS,
  TimeScale,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  ScriptableContext,
  Plugin,
  ChartOptions,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import useSWR from 'swr'
import invariant from 'tiny-invariant'
import Services from 'services'
import globalStore from 'store'

ChartJS.register(TimeScale, CategoryScale, LinearScale, PointElement, LineElement, Filler, Legend)

const creteGradient = (context: ScriptableContext<'line'>) => {
  const { ctx } = context.chart
  return ctx.createLinearGradient(0, 0, 0, 356)
}

const gradientEffect = (context: ScriptableContext<'line'>) => {
  const gradient = creteGradient(context)
  gradient.addColorStop(0, '#00F896')
  gradient.addColorStop(0.6, 'rgba(0, 114, 255, 0.4)')
  gradient.addColorStop(1, 'rgba(0, 114, 255, 0)')
  return gradient
}

const gradientBorderColorEffect = (context: ScriptableContext<'line'>) => {
  const gradient = creteGradient(context)
  gradient.addColorStop(0, '#00F896')
  gradient.addColorStop(1, 'rgba(0, 114, 255, 1')
  return gradient
}

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const currentMonth = new Date().getMonth()

const fontAndLineColor = 'rgba(156, 163, 175, 1)'

const plugins: Plugin[] = [
  {
    id: 'tooltipLine',
    afterDraw: chart => {
      if (chart.config.data.datasets[0].data.length === 0) {
        const { ctx, width, height } = chart
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.font = 'normal 400 20px Geomanist'
        ctx.fillStyle = '#6B7280'
        ctx.fillText('No data to display', width / 2, height / 2)
        ctx.restore()
      }
    },
  },
]

export const options: ChartOptions<'line'> = {
  responsive: true,
  scales: {
    y: {
      min: 0,
      max: 1000,
      ticks: {
        stepSize: 200,
        color: fontAndLineColor,
      },
      grid: {
        borderDash: [4, 4],
        drawBorder: false,
        color: fontAndLineColor,
      },
    },
    x: {
      type: 'time',
      min: new Date().setMonth(currentMonth - 6),
      time: {
        unit: 'month' as const,
        displayFormats: {
          month: 'MMM' as const,
        },
      },
      ticks: {
        color: fontAndLineColor,
      },
      grid: {
        display: false,
      },
    },
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
}

const PerformanceGraphic = () => {
  const [dataset, setDataset] = useState<any>({
    labels: months.slice(currentMonth - 6).concat(months.slice(0, currentMonth)),
    datasets: [
      {
        fill: true,
        data: [],
        borderColor: gradientBorderColorEffect,
        backgroundColor: gradientEffect,
      },
    ],
  })
  const { user } = globalStore()
  invariant(user, 'Expected value to be a user')
  const { data } = useSWR('SWR_COMPANY_SCORE', () => Services.Score.getCompanyScore(user.companyId))

  useEffect(() => {
    setDataset({
      datasets: [
        {
          fill: true,
          data: data?.scoreHistory.map(item => {
            return { x: new Date(item.date), y: item.score }
          }),
          borderColor: gradientBorderColorEffect,
          backgroundColor: gradientEffect,
        },
      ],
    })
  }, [data])

  return dataset && <Line options={options} data={dataset} plugins={plugins} />
}

export default PerformanceGraphic
