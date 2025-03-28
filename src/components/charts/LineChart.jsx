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
import { color } from 'chart.js/helpers'
import zoomPlugin from 'chartjs-plugin-zoom'
// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  zoomPlugin
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
        borderColor: 'rgb(245, 15, 15)', // Line color
        tension: 0.1, // Line tension (smoothness)
      },
    ],
  }
  // Chart options
  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(0,0,0,0.7)',
        titleColor: '#fff', //title text color
        bodyColor: '#fff', //body text color
        footerColor: '#fff',
        padding: 10,
      },
      legend: {
        position: 'top',
        labels: {
          color: '#333',
        },
      },
      title: {
        display: true,
        text: 'Price Analytics Over Time',
        font: {
          size: 20,
        },
        color: '#333',
      },
    },

    //zoom configurations
    zoom: {
      //enable zooming
      pan: {
        enabled: true,
        mode: 'xy', // allow zooming along both axis
        speed: 10, //speed of pan
      },
      zoom: {
        enabled: true,
        mode: 'xy',
        speed: 0.1,
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
        beginAtZero: true,
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
