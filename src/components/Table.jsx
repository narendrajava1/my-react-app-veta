import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import {} from './Table.css'
export const Table = ({ rows, setIsModalOpen, handleEdit, handleDelete }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10 // Number of items per page
  // Calculate the indexes for the data slice
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = rows.slice(indexOfFirstItem, indexOfLastItem)

  // Calculate total pages
  const totalPages = Math.ceil(rows.length / itemsPerPage)

  // Handle page change
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  // Handle next page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  // Handle previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  const date = new Date().toLocaleDateString()
  return (
    <div className="table-wrapper">
      <h2>Milk Prices</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Date</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((row, idx) => {
            // const statusIcon = (

            // )
            return (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.date}</td>
                <td>{row.price}</td>
                <td>
                  {
                    <span className="actions">
                      <EditIcon
                        onClick={() => {
                          setIsModalOpen(true)
                          handleEdit(row)
                        }}
                      />{' '}
                      <DeleteIcon onClick={() => handleDelete(row.id)} />
                    </span>
                  }
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="btn-container">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="previous-btn btn"
        >
          Prev
        </button>
        {/* Display page numbers */}
        {[...Array(totalPages)].map((_, index) => (
          <button
            className="btn"
            key={index + 1}
            onClick={() => paginate(index + 1)}
            style={{
              margin: '0 5px',
              backgroundColor: currentPage === index + 1 ? '#007bff' : 'white',
              color: currentPage === index + 1 ? 'white' : 'black',
              border: '1px solid #007bff',
            }}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="next-btn btn"
        >
          Next
        </button>
      </div>
    </div>
  )
}
