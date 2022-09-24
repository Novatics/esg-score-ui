import { useTheme, useMediaQuery } from '@mui/material'
import {
  Chart as ChartJS,
  ChartData,
  ChartOptions,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { ICompanyThreats } from 'models/company.model'

interface IThreatsBarChart {
  threats: Array<ICompanyThreats> | undefined
}

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const ThreatsBarChart = ({ threats }: IThreatsBarChart) => {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))
  const labels = threats?.map(threat => threat.label)
  const quantities = threats?.map(threat => threat.quantity) || []
  const maxValue = quantities?.reduce((a, b) => {
    return Math.max(a, b)
  }, -Infinity)
  const options = {
    maintainAspectRatio: true,
    scales: {
      y: {
        max: maxValue + 1,
        beginAtZero: true,
        display: 'auto',
        ticks: {
          color: '#6B7280',
          callback(value: number) {
            if (value % 1 === 0) {
              return value
            }
          },
        },
        grid: {
          borderDash: [5, 5],
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: !isSmallScreen,
          color: '#6B7280',
          callback(val: number) {
            // eslint-disable-next-line react/no-this-in-sfc
            return this.getLabelForValue(val).split(' ')
          },
          maxRotation: 0,
          autoSkip: false,
          font: {
            family: 'Geomanist',
            color: '#6B7280',
            size: 10,
            lineHeight: '14px',
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
        position: 'top' as const,
      },
    },
  } as ChartOptions<'bar'>
  const data = {
    labels,
    datasets: [
      {
        categoryPercentage: 0.5,
        minBarLength: 2,
        borderRadius: 2,
        data: quantities,
        backgroundColor: '#006BF0',
      },
    ],
  } as ChartData<'bar', number[] | undefined, string>

  return <Bar options={options} data={data} />
}

export default ThreatsBarChart
