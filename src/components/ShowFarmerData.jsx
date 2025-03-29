import React, { useState } from 'react'

export const ShowFarmerData = ({ farmers, formData, rowsHead }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10 // Number of items per page
  // Calculate the indexes for the data slice
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = farmers?.slice(indexOfFirstItem, indexOfLastItem)

  // Calculate total pages
  const totalPages = Math.ceil(farmers?.length / itemsPerPage)
  // Handle previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  // Handle next page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }
  // Handle page change
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  return (
    <div className="farmers-data-box">
      <h1>Farmer's Data</h1>
      <table className="farmers-data-table">
        <thead>
          <tr>
            {rowsHead?.map((head, index) => (
              <th key={index}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentItems?.map((rowData, index) => (
            <>
              <tr>
                <td key={index}>{rowData['fullName']}</td>
                <td key={index}>{rowData['fatherName']}</td>
                <td key={index}>{rowData['dateOfBirth']}</td>
                <td key={index}>{rowData['gender']}</td>
                <td key={index}>{rowData['aadhaarNumber']}</td>
                <td key={index}>{rowData['contactNumber']}</td>
                <td key={index}>{rowData['emailAddress']}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
      {totalPages && (
        <div className="pagination-btn-box">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="pagination-btn"
          >
            Prev
          </button>
          {/* Display page numbers */}
          {totalPages &&
            [...Array(totalPages)].map((_, index) => (
              <button
                className="pagination-btn"
                key={index + 1}
                onClick={() => paginate(index + 1)}
                style={{
                  // margin: '0 5px',
                  backgroundColor:
                    currentPage === index + 1 ? '#007bff' : 'white',
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
            className="pagination-btn"
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}
