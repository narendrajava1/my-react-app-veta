import React, { useState } from 'react'
import './Modal.css'
export const Modal = ({ setIsModalOpen, isOpen, onClose, onSave, rowData }) => {
  if (!isOpen) return null
  const [formState, setFormState] = useState({
    id: rowData.id,
    date: rowData.date,
    price: rowData.price,
  })

  const handleSave = () => {
    onSave(formState) // Save the updated row data
    onClose() // Close the modal
  }
  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  return (
    <div className="modal-container">
      <div className="modal">
        <p onClick={() => setIsModalOpen((isOpen) => !isOpen)}>&times;</p>
        <>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              name="date"
              type="date"
              onChange={handleChange}
              value={formState.date}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              name="price"
              type="number"
              onChange={handleChange}
              value={formState.price}
            />
          </div>
          <div className="btn-grp">
            <button className="btn" onClick={handleSave}>
              Save
            </button>
            <button className="btn" onClick={onClose}>
              Close
            </button>
          </div>
        </>
      </div>
    </div>
  )
}
