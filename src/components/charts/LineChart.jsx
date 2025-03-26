import React from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import './LineChart.css'
// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)
export const LineChart = () => {
  // Chart data
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'], // Labels for the x-axis (time periods, months, etc.)
    datasets: [
      {
        label: 'Sales in USD',
        data: [400, 600, 800, 700, 1000, 1200], // Sales data points
        fill: false, // No filling under the line
        borderColor: 'rgba(75,192,192,1)', // Line color
        tension: 0.1, // Line tension (smoothness)
      },
    ],
  }
  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Price Analytics Over Time',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Months',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Sales in USD',
        },
      },
    },
  }

  return (
    <div className="price-container">
      <h2>Price Analytics</h2>
      <Line data={data} options={options} />
    </div>
  )
}
