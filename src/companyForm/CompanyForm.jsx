import React, { useState } from 'react'

export default function CompanyForm() {

  const [company, setCompany] = useState({
    cmpId: '',
    cmpName: '',
    cmpImg: '',
    cmpRegisterNumber: '',
    cmpEstablished: '',
    cmpClassOfCompany: 'Public',
    cmpAddress: '',
  })

  const getDetailsCmp = (e) => {
    setCompany({ ...company, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Company Data Submitted:', company)
    alert('Company details submitted successfully!')
  }

  const handleReset = () => {
    setCompany({
      cmpId: '',
      cmpName: '',
      cmpImg: '',
      cmpRegisterNumber: '',
      cmpEstablished: '',
      cmpClassOfCompany: 'Public',
      cmpAddress: '',
    })
  }

  return (
    <div
      className="container mt-5 mb-5 p-4 bg-dark text-white rounded shadow-lg"
      style={{ maxWidth: '600px' }}
    >

      <h4 className="text-center mb-4">Company Form</h4>

      <form onSubmit={handleSubmit} onReset={handleReset}>

        <div className="mb-3">
          <label htmlFor="cmpName" className="form-label fw-bold">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="cmpName"
            name="cmpName"
            value={company.cmpName}
            onChange={getDetailsCmp}
            placeholder="Enter company name"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="cmpRegisterNumber" className="form-label fw-bold">
            Register Number
          </label>
          <input
            type="number"
            className="form-control"
            id="cmpRegisterNumber"
            name="cmpRegisterNumber"
            value={company.cmpRegisterNumber}
            onChange={getDetailsCmp}
            placeholder="Enter registration number"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="cmpEstablished" className="form-label fw-bold">
            Established
          </label>
          <input
            type="date"
            className="form-control"
            id="cmpEstablished"
            name="cmpEstablished"
            value={company.cmpEstablished}
            onChange={getDetailsCmp}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="cmpClassOfCompany" className="form-label fw-bold">
            Class of Company
          </label>
          <select
            className="form-select"
            id="cmpClassOfCompany"
            name="cmpClassOfCompany"
            value={company.cmpClassOfCompany}
            onChange={getDetailsCmp}
          >
            <option value="Private">Private</option>
            <option value="Public">Public</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="cmpAddress" className="form-label fw-bold">
            Address
          </label>
          <textarea
            rows="4"
            className="form-control"
            id="cmpAddress"
            name="cmpAddress"
            value={company.cmpAddress}
            onChange={getDetailsCmp}
            placeholder="Enter company address"
          />
        </div>

        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-success px-4">
            Submit
          </button>
          <button type="reset" className="btn btn-secondary px-4">
            Reset
          </button>
        </div>
      </form>
    </div>
  )
}
