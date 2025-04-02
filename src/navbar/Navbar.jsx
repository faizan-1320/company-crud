import { Button } from '@mui/material'
import React from 'react'
import { useCookies } from 'react-cookie'
import { Link } from 'react-router'
import Swal from 'sweetalert2'

export default function Navbar() {
  const [cookies, , removeCookie] = useCookies()
  const handleLogout = () => {
    Swal.fire({
      title:'success',
      text:'Logout Sucessfully',
      icon:'success'
    }).then(()=>{
      removeCookie('admin')
    })
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/home">
          CMP
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            {cookies.admin != undefined && <li className="nav-item">
              <Link className="nav-link" to="/add-company">
                Add Company
              </Link>
            </li>}

            <li className="nav-item">
              <Link className="nav-link" to="/companies">
                Show Companies
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-00">
            {cookies.admin == undefined ? (<>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Login
                </Link>
              </li></>) : (<><li className="nav-item">
                <Button
                  onClick={handleLogout}
                  sx={{
                    textTransform: 'none',
                    color: 'inherit',
                    background: 'none',
                    boxShadow: 'none',
                    '&:hover': { backgroundColor: 'transparent', textDecoration: 'none' }
                  }}>Logout</Button>
              </li></>)}
          </ul>
        </div>
      </div>
    </nav>
  )
}
