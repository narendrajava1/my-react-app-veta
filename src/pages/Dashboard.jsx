import React, { useEffect, useState } from 'react'
import { Table } from '../components/Table'
import { LineChart } from '../components/charts/LineChart'
import {} from '../pages/css/DashBoard.css'
import { Modal } from '../components/Modal'
import { Mode } from '@mui/icons-material'

export const Dashboard = () => {
  const [data, setData] = useState([
    {
      id: 1,
      date: new Date().toISOString().split('T')[0],
      price: 28,
    },
    {
      id: 2,
      date: new Date().toISOString().split('T')[0],
      price: 32,
    },
    {
      id: 3,
      date: new Date().toISOString().split('T')[0],
      price: 25,
    },
    {
      id: 4,
      date: new Date().toISOString().split('T')[0],
      price: 35,
    },
    {
      id: 5,
      date: new Date().toISOString().split('T')[0],
      price: 22,
    },
    {
      id: 6,
      date: new Date().toISOString().split('T')[0],
      price: 27,
    },
    {
      id: 7,
      date: new Date().toISOString().split('T')[0],
      price: 29,
    },
    {
      id: 8,
      date: new Date().toISOString().split('T')[0],
      price: 34,
    },
    {
      id: 9,
      date: new Date().toISOString().split('T')[0],
      price: 31,
    },
    {
      id: 10,
      date: new Date().toISOString().split('T')[0],
      price: 24,
    },
    {
      id: 11,
      date: new Date().toISOString().split('T')[0],
      price: 26,
    },
    {
      id: 12,
      date: new Date().toISOString().split('T')[0],
      price: 30,
    },
  ])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [rowToEdit, setRowToEdit] = useState(null)
  const handleEdit = (row) => {
    setRowToEdit(row)
    setIsModalOpen(true)
  }
  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleSave = (updatedRow) => {
    setData(data.map((row) => (row.id === updatedRow.id ? updatedRow : row)))
  }

  const handleDelete = (id) => {
    setData(data.filter((row) => row.id !== id))
  }
  return (
    <div className="dashboard-cntr">
      <div className="table-price">
        <Table
          rows={data}
          setIsModalOpen={setIsModalOpen}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
        {isModalOpen && (
          <Modal
            setIsModalOpen={setIsModalOpen}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onSave={handleSave}
            rowData={rowToEdit || {}}
          />
        )}
      </div>
      <LineChart />
    </div>
  )
}
