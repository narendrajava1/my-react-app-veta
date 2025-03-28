import React, { useState } from 'react'
import { FarmerRegistrationForm } from '../components/FarmerRegistrationForm'
import './css/Home.css'
import '../components/ShowFarmerData'
import { ShowFarmerData } from '../components/ShowFarmerData'
export const Home = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    fatherName: '',
    dateOfBirth: '',
    gender: '',
    aadhaarNumber: '',
    contactNumber: '',
    emailAddress: '',
  })
  const [farmers, setFarmers] = useState([
    {
      fullName: 'Narendra Kumar Kolli',
      fatherName: 'Nasaraiah',
      dateOfBirth: '15-07-1995',
      gender: 'Male',
      aadhaarNumber: '418528822985',
      contactNumber: '9182878363',
      emailAddress: 'kolli7571@gmail.com',
    },
    {
      fullName: 'Narendra Kumar Kolli',
      fatherName: 'Nasaraiah',
      dateOfBirth: '15-07-1995',
      gender: 'Male',
      aadhaarNumber: '418528822985',
      contactNumber: '9182878363',
      emailAddress: 'kolli7571@gmail.com',
    },
    {
      fullName: 'Narendra Kumar Kolli',
      fatherName: 'Nasaraiah',
      dateOfBirth: '15-07-1995',
      gender: 'Male',
      aadhaarNumber: '418528822985',
      contactNumber: '9182878363',
      emailAddress: 'kolli7571@gmail.com',
    },
    {
      fullName: 'Narendra Kumar Kolli',
      fatherName: 'Nasaraiah',
      dateOfBirth: '15-07-1995',
      gender: 'Male',
      aadhaarNumber: '418528822985',
      contactNumber: '9182878363',
      emailAddress: 'kolli7571@gmail.com',
    },
    {
      fullName: 'Narendra Kumar Kolli',
      fatherName: 'Nasaraiah',
      dateOfBirth: '15-07-1995',
      gender: 'Male',
      aadhaarNumber: '418528822985',
      contactNumber: '9182878363',
      emailAddress: 'kolli7571@gmail.com',
    },
    {
      fullName: 'Narendra Kumar Kolli',
      fatherName: 'Nasaraiah',
      dateOfBirth: '15-07-1995',
      gender: 'Male',
      aadhaarNumber: '418528822985',
      contactNumber: '9182878363',
      emailAddress: 'kolli7571@gmail.com',
    },
    {
      fullName: 'Narendra Kumar Kolli',
      fatherName: 'Nasaraiah',
      dateOfBirth: '15-07-1995',
      gender: 'Male',
      aadhaarNumber: '418528822985',
      contactNumber: '9182878363',
      emailAddress: 'kolli7571@gmail.com',
    },
    {
      fullName: 'Narendra Kumar Kolli',
      fatherName: 'Nasaraiah',
      dateOfBirth: '15-07-1995',
      gender: 'Male',
      aadhaarNumber: '418528822985',
      contactNumber: '9182878363',
      emailAddress: 'kolli7571@gmail.com',
    },
    {
      fullName: 'Narendra Kumar Kolli',
      fatherName: 'Nasaraiah',
      dateOfBirth: '15-07-1995',
      gender: 'Male',
      aadhaarNumber: '418528822985',
      contactNumber: '9182878363',
      emailAddress: 'kolli7571@gmail.com',
    },
    {
      fullName: 'Narendra Kumar Kolli',
      fatherName: 'Nasaraiah',
      dateOfBirth: '15-07-1995',
      gender: 'Male',
      aadhaarNumber: '418528822985',
      contactNumber: '9182878363',
      emailAddress: 'kolli7571@gmail.com',
    },
    {
      fullName: 'Narendra Kumar Kolli',
      fatherName: 'Nasaraiah',
      dateOfBirth: '15-07-1995',
      gender: 'Male',
      aadhaarNumber: '418528822985',
      contactNumber: '9182878363',
      emailAddress: 'kolli7571@gmail.com',
    },
    {
      fullName: 'Narendra Kumar Kolli',
      fatherName: 'Nasaraiah',
      dateOfBirth: '15-07-1995',
      gender: 'Male',
      aadhaarNumber: '418528822985',
      contactNumber: '9182878363',
      emailAddress: 'kolli7571@gmail.com',
    },
    {
      fullName: 'Narendra Kumar Kolli',
      fatherName: 'Nasaraiah',
      dateOfBirth: '15-07-1995',
      gender: 'Male',
      aadhaarNumber: '418528822985',
      contactNumber: '9182878363',
      emailAddress: 'kolli7571@gmail.com',
    },
    {
      fullName: 'Narendra Kumar Kolli',
      fatherName: 'Nasaraiah',
      dateOfBirth: '15-07-1995',
      gender: 'Male',
      aadhaarNumber: '418528822985',
      contactNumber: '9182878363',
      emailAddress: 'kolli7571@gmail.com',
    },
    {
      fullName: 'Narendra Kumar Kolli',
      fatherName: 'Nasaraiah',
      dateOfBirth: '15-07-1995',
      gender: 'Male',
      aadhaarNumber: '418528822985',
      contactNumber: '9182878363',
      emailAddress: 'kolli7571@gmail.com',
    },
    {
      fullName: 'Narendra Kumar Kolli',
      fatherName: 'Nasaraiah',
      dateOfBirth: '15-07-1995',
      gender: 'Male',
      aadhaarNumber: '418528822985',
      contactNumber: '9182878363',
      emailAddress: 'kolli7571@gmail.com',
    },
    {
      fullName: 'Narendra Kumar Kolli',
      fatherName: 'Nasaraiah',
      dateOfBirth: '15-07-1995',
      gender: 'Male',
      aadhaarNumber: '418528822985',
      contactNumber: '9182878363',
      emailAddress: 'kolli7571@gmail.com',
    },
    {
      fullName: 'Narendra Kumar Kolli',
      fatherName: 'Nasaraiah',
      dateOfBirth: '15-07-1995',
      gender: 'Male',
      aadhaarNumber: '418528822985',
      contactNumber: '9182878363',
      emailAddress: 'kolli7571@gmail.com',
    },
    {
      fullName: 'Narendra Kumar Kolli',
      fatherName: 'Nasaraiah',
      dateOfBirth: '15-07-1995',
      gender: 'Male',
      aadhaarNumber: '418528822985',
      contactNumber: '9182878363',
      emailAddress: 'kolli7571@gmail.com',
    },
    {
      fullName: 'Narendra Kumar Kolli',
      fatherName: 'Nasaraiah',
      dateOfBirth: '15-07-1995',
      gender: 'Male',
      aadhaarNumber: '418528822985',
      contactNumber: '9182878363',
      emailAddress: 'kolli7571@gmail.com',
    },
    {
      fullName: 'Narendra Kumar Kolli',
      fatherName: 'Nasaraiah',
      dateOfBirth: '15-07-1995',
      gender: 'Male',
      aadhaarNumber: '418528822985',
      contactNumber: '9182878363',
      emailAddress: 'kolli7571@gmail.com',
    },
    {
      fullName: 'Narendra Kumar Kolli',
      fatherName: 'Nasaraiah',
      dateOfBirth: '15-07-1995',
      gender: 'Male',
      aadhaarNumber: '418528822985',
      contactNumber: '9182878363',
      emailAddress: 'kolli7571@gmail.com',
    },
    {
      fullName: 'Narendra Kumar Kolli',
      fatherName: 'Nasaraiah',
      dateOfBirth: '15-07-1995',
      gender: 'Male',
      aadhaarNumber: '418528822985',
      contactNumber: '9182878363',
      emailAddress: 'kolli7571@gmail.com',
    },
    {
      fullName: 'Narendra Kumar Kolli',
      fatherName: 'Nasaraiah',
      dateOfBirth: '15-07-1995',
      gender: 'Male',
      aadhaarNumber: '418528822985',
      contactNumber: '9182878363',
      emailAddress: 'kolli7571@gmail.com',
    },
    {
      fullName: 'Narendra Kumar Kolli',
      fatherName: 'Nasaraiah',
      dateOfBirth: '15-07-1995',
      gender: 'Male',
      aadhaarNumber: '418528822985',
      contactNumber: '9182878363',
      emailAddress: 'kolli7571@gmail.com',
    },
    {
      fullName: 'Narendra Kumar Kolli',
      fatherName: 'Nasaraiah',
      dateOfBirth: '15-07-1995',
      gender: 'Male',
      aadhaarNumber: '418528822985',
      contactNumber: '9182878363',
      emailAddress: 'kolli7571@gmail.com',
    },
    {
      fullName: 'Narendra Kumar Kolli',
      fatherName: 'Nasaraiah',
      dateOfBirth: '15-07-1995',
      gender: 'Male',
      aadhaarNumber: '418528822985',
      contactNumber: '9182878363',
      emailAddress: 'kolli7571@gmail.com',
    },
    {
      fullName: 'Narendra Kumar Kolli',
      fatherName: 'Nasaraiah',
      dateOfBirth: '15-07-1995',
      gender: 'Male',
      aadhaarNumber: '418528822985',
      contactNumber: '9182878363',
      emailAddress: 'kolli7571@gmail.com',
    },
    {
      fullName: 'Narendra Kumar Kolli',
      fatherName: 'Nasaraiah',
      dateOfBirth: '15-07-1995',
      gender: 'Male',
      aadhaarNumber: '418528822985',
      contactNumber: '9182878363',
      emailAddress: 'kolli7571@gmail.com',
    },
  ])
  const rowsHead = Object.keys(formData).map((key) => key.toUpperCase())
  {
    console.log(rowsHead)
  }
  return (
    <div className="farmer-box">
      <FarmerRegistrationForm
        setFormData={setFormData}
        formData={formData}
        setFarmers={setFarmers}
      />
      {farmers && (
        <ShowFarmerData
          farmers={farmers}
          formData={formData}
          rowsHead={rowsHead}
        />
      )}
    </div>
  )
}
