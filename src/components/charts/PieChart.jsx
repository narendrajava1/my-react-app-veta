import React from 'react'
import { Pie } from 'react-chartjs-2'
import './PieChart.css'
import {
  Chart as ChartJS,
  CategoryScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js'
import './LineChart.css'
// Register chart components
// Register Chart.js components
ChartJS.register(CategoryScale, ArcElement, Tooltip, Legend)
export const PieChart = () => {
  // Chart data
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green'],
    datasets: [
      {
        data: [300, 50, 100, 75],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCD56', '#4CAF50'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCD56', '#4CAF50'],
      },
    ],
  }
  // Options to customize the chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `${tooltipItem.label}: ${tooltipItem.raw}`
          },
        },
      },
    },
  }

  return (
    <div className="pie-chart-container">
      <div className="chart-wrapper">
        <h2 className="chart-title">Price Analytics</h2>
        <Pie data={data} options={options} />
      </div>
    </div>
  )
}
