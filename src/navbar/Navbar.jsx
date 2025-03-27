import React from 'react'
import { useCookies } from 'react-cookie'
import { Link } from 'react-router'

export default function Navbar() {
  const [cookies, , removeCookie] = useCookies()
  const handleLogout = () =>{
    removeCookie('admin')
    alert('Logout Sucessfully')
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

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {cookies.admin == undefined ? (<>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Login
                  </Link>
                </li></>) : (<><li className="nav-item">
                  <button className="nav-link" onClick={handleLogout}>
                    Logout
                  </button>
                </li></>)}
            </ul>
          </form>
        </div>
      </div>
    </nav>
  )
}
