import React from 'react'
import { companyArr } from '../company/Company'

export default function Home() {
  const totalCompanies = companyArr.length
  const activeCompanies = companyArr.filter((c) => c.isActive).length
  const inactiveCompanies = totalCompanies - activeCompanies

  return (
      <div className="container  d-flex justify-content-center align-items-center bg-light" style={{ minHeight: '90vh' }}>

      <div className="card shadow-lg p-5 w-100" style={{ maxWidth: '800px' }}>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-dark">Company Overview</h2>
          <p className="text-muted">Track and manage all your companies effortlessly.</p>
        </div>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card text-center border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title text-primary fw-semibold">Total Companies</h5>
                <p className="display-4 fw-bold text-primary">{totalCompanies}</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title text-success fw-semibold">Active Companies</h5>
                <p className="display-4 fw-bold text-success">{activeCompanies}</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title text-danger fw-semibold">Inactive Companies</h5>
                <p className="display-4 fw-bold text-danger">{inactiveCompanies}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-5 text-muted">
          <p className="small">© 2025 Company. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
