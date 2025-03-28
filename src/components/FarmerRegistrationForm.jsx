import { FormControl } from '@mui/material'
import React, { useState } from 'react'
import './FarmerRegistrationForm.css'
export const FarmerRegistrationForm = ({
  setFormData,
  formData,
  setFarmers,
}) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((farmerData) => ({ ...farmerData, [name]: value }))
  }

  const onSubmit = (e) => {
    setFarmers((farmers) => [...farmers, formData])
  }
  return (
    <div className="farmer-form-cntr-main">
      <h2>Farmer Registration Form</h2>
      <div className="farmer-add-form">
        <label>Full Name:</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          required
        />
        <label>Father's Name: </label>
        <input
          type="text"
          name="fatherName"
          value={formData.fatherName}
          onChange={handleInputChange}
          required
        />
        <label>Date of Birth: </label>
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleInputChange}
          required
        />
        <label>Gender: </label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <label>Aadhaar Number: </label>
        <input
          type="text"
          name="aadhaarNumber"
          value={formData.aadhaarNumber}
          onChange={handleInputChange}
          required
        />
        <label>Contact Number: </label>
        <input
          type="text"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleInputChange}
          required
        />
        <label>Email Address: </label>
        <input
          type="email"
          name="emailAddress"
          value={formData.emailAddress}
          onChange={handleInputChange}
          required
        />
        <button className="farmer-add-btn" onClick={onSubmit}>
          Add
        </button>
      </div>
    </div>
  )
}
