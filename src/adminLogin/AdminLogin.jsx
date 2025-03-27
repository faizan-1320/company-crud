import React, { useRef } from 'react'
import { useCookies } from 'react-cookie'
import { adminLoginData } from '../api/testAdmin'
import { useNavigate } from 'react-router'

export default function AdminLogin() {

  const [cookies,setCookie,removeCookie] = useCookies();
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const handleLogin = (e) =>{
    e.preventDefault()
    if (adminLoginData.email == email.current.value && adminLoginData.password == password.current.value){
      setCookie('admin',adminLoginData.email)
      navigate('/home')
      alert("you are logged in successfully")
    }else{
      alert("Incorrect Email or password")
      console.log("Incorrect Email or password");
    }
  }
  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100 bg-light"
      style={{
        background: 'linear-gradient(to right, #e3f2fd, #bbdefb)',
      }}
    >
      <div
        className="border border-0 shadow-lg rounded-4 p-5 bg-white"
        style={{ width: '400px' }}
      >
        {/* Form Header */}
        <h4 className="text-center text-info mb-4 fw-bold">Admin Login</h4>

        {/* Login Form */}
        <form onSubmit={handleLogin}>
          {/* Email Input */}
          <div className="mb-3">
            <label htmlFor="cmpEmail" className="form-label fw-semibold">
              📧 Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="cmpEmail"
              placeholder="Enter your email"
              ref={email}
            />
            <div id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </div>
          </div>

          {/* Password Input */}
          <div className="mb-3">
            <label htmlFor="cmpPassword" className="form-label fw-semibold">
              🔒 Password
            </label>
            <input
              type="password"
              className="form-control"
              id="cmpPassword"
              placeholder="Enter your password"
              ref={password}
            />
          </div>

          {/* Button Group */}
          <div className="d-flex justify-content-between mt-4">
            <button type="submit" className="btn btn-info w-48 fw-bold">
              🚀 Login
            </button>
            <button
              type="reset"
              className="btn btn-outline-secondary w-48 fw-bold"
            >
              🔄 Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
