import React from 'react'
import { useCookies } from 'react-cookie'
import { Link } from 'react-router'

export default function Companycard({ company, companyDelete }) {
  const [cookies, , removeCookie] = useCookies()
  return (
    <>
      <div className="card m-5" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={company.cmpImg} className="card-img-top" alt='this is employeee' style={{ height: '300px' }} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">#{company.id} {company.cmpName}</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><i>Registration Number :</i> <b>{company.cmpRegisterNumber}</b></li>
                <li className="list-group-item"><i>Class of Company :</i> <b>{company.cmpClassOfCompany}</b></li>
                <li className="list-group-item"><i>Registered Address:</i> <b>{company.cmpAddress}</b></li>
                <li className="list-group-item"><i>Established:</i> <b>{company.cmpEstablished}</b></li>
                <li className="list-group-item">
                  {cookies.admin != undefined ? (<><Link to={`/edit-company/${company.id}`} className="btn btn-sm btn-outline-primary me-2">
                    ✏️ Edit
                  </Link>
                    <button className="btn btn-sm btn-outline-danger" onClick={() => companyDelete(company.id)}>
                      🗑️ Delete
                    </button></>) : (<p>Login to update company details</p>)}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
