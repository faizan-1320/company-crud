import { Button } from '@mui/material'
import React from 'react'
import { useCookies } from 'react-cookie'
import { Link } from 'react-router'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function Companycard({ company, companyDelete }) {
  const [cookies] = useCookies();

  return (
    <div className="card shadow-lg" style={{ maxWidth: "800px" }}>
      <div className="row g-0 align-items-stretch">
        {/* Company Image */}
        <div className="col-md-4 d-flex align-items-center">
          <img 
            src={company.cmpImg} 
            className="img-fluid rounded-start" 
            alt="Company" 
            style={{ width: "100%", height: "100%", objectFit: "cover" }} 
          />
        </div>

        {/* Company Details */}
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title text-primary">
              #{company.id} {company.cmpName}
            </h5>

            {/* Company Info List */}
            <ul className="list-group list-group-flush small">
              <li className="list-group-item">
                <i>Registration Number:</i> <b>{company.cmpRegisterNumber}</b>
              </li>
              <li className="list-group-item">
                <i>Class of Company:</i> <b>{company.cmpClassOfCompany}</b>
              </li>
              <li className="list-group-item">
                <i>Registered Address:</i> <b>{company.cmpAddress}</b>
              </li>
              <li className="list-group-item">
                <i>Established:</i> <b>{company.cmpEstablished}</b>
              </li>
            </ul>

            {/* Buttons - Aligned Properly */}
            {cookies.admin !== undefined ? (
              <div className="mt-3 d-flex justify-content-between">
                <Button 
                  variant="contained" 
                  color="success" 
                  size="small" 
                  component={Link} 
                  to={`/edit-company/${company.id}`} 
                  className="me-2"
                >
                  <EditIcon /> Edit
                </Button>

                <Button 
                  variant="contained" 
                  color="error" 
                  size="small" 
                  onClick={() => companyDelete(company.id)}
                >
                  <DeleteIcon /> Delete
                </Button>
              </div>
            ) : (
              <p className="text-danger mt-2">Login to update company details</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}