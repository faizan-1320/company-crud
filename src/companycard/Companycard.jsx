import React from 'react'

export default function Companycard({company}) {
  return (
    <>
      <div className="card m-5" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={company.cmpImg} className="card-img-top" alt='this is employeee' style={{ height: '100%' }} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">#{company.cmpId} {company.cmpName}</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><i>Registration Number :</i> <b>{company.cmpRegisterNumber}</b></li>
                <li className="list-group-item"><i>Class of Company :</i> <b>{company.cmpClassOfCompany}</b></li>
                <li className="list-group-item"><i>Registered Address:</i> <b>{company.cmpAddress}</b></li>
                <li className="list-group-item"><i>Established:</i> <b>{company.cmpEstablished.toString()}</b></li>
                <li className="list-group-item">
                  <a href="#" className="card-link">Edit</a>
                  <a href="#" className="card-link">Delete</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
