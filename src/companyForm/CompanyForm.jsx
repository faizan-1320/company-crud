import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { addCompany, editCompany } from '../api/Api'
import { useLoaderData, useLocation, useNavigate, useParams } from 'react-router'

export default function CompanyForm() {

  const navigate = useNavigate();
  const findCompany = useLoaderData();
  const location = useLocation();
  const {cmpId} = useParams();

  const emptyCompany = {
    cmpId: cmpId,
    cmpName: '',
    cmpImg: '',
    cmpRegisterNumber: '',
    cmpEstablished: '',
    cmpClassOfCompany: 'Public',
    cmpAddress: '',
    isActive: true
  }

  function initialState(){
    if (location.pathname.includes('edit-company') && findCompany!=null){
      return findCompany
    }else{
      return emptyCompany
    }
  }

  const [company, setCompany] = useState(()=>initialState());

  const getDetailsCmp = (e) => {
    setCompany({ ...company, [e.target.id]: e.target.value })
  }

  const handleReset = () => {
    setCompany(emptyCompany)
  }

  async function companyAdd(e) {
    e.preventDefault();
    const updatedCompany = { ...company, isActive: true } 
    const response = await addCompany(updatedCompany)
    if (response) {
      Swal.fire({
        title: 'Success!',
        text: 'Company added successfully.',
        icon: 'success',
        confirmButtonText: 'OK',
      }).then(() => {
        navigate('/companies')
      })
    } else {
      Swal.fire({
        title: 'Error!',
        text: response?.message || 'Failed to add company. Please try again.',
        icon: 'error',
      })
    }
  }

  async function companyEdit(e) {
    e.preventDefault()
    const response = await editCompany(cmpId,company)
    console.log("response edit -------------------------->",response);
    navigate('/companies')
  }

  return (
    <div
      className="container mt-5 mb-5 p-4 bg-dark text-white rounded shadow-lg"
      style={{ maxWidth: '600px' }}
    >

      <h4 className="text-center mb-4">Company Form</h4>

      <form onSubmit={location.pathname.includes('edit-company')?companyEdit:companyAdd}>

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
          <label htmlFor="cmpImg" className="form-label fw-bold">
            Image URL
          </label>
          <input
            type="text"
            className="form-control"
            id="cmpImg"
            name="cmpImg"
            value={company.cmpImg}
            onChange={getDetailsCmp}
            placeholder="Select image"
            required
          />
        </div>
        {company.cmpImg && (
          <div className="mt-3">
            <img
              src={company.cmpImg}
              alt="Company"
              width="100"
            />
          </div>
        )}

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
            {location.pathname.includes('edit-company')?"Update":'Add'}
          </button>
          <button type="reset" className="btn btn-secondary px-4" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </div>
  )
}
