import React, { useRef } from 'react'
import { useCookies } from 'react-cookie'
import { adminLoginData } from '../api/testAdmin'
import { useNavigate } from 'react-router'
import { Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import Swal from 'sweetalert2'

export default function AdminLogin() {

  const [cookies,setCookie,removeCookie] = useCookies();
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
  
    const inputEmail = email.current.value.trim();
    const inputPassword = password.current.value.trim();
  
    const { email: adminEmail, password: adminPassword } = adminLoginData;
  
    if (adminEmail === inputEmail && adminPassword === inputPassword) {
      Swal.fire({
        title: 'Success',
        text: 'You are logged in successfully!',
        icon: 'success',
        confirmButtonText: 'OK',
      }).then(() => {
        setCookie('admin', adminEmail);
        navigate('/home');
      });
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Incorrect Email or Password',
        icon: 'error',
        confirmButtonText: 'Try Again',
      });
    }
  };
  
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
              Email Address
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
              Password
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
            <Button type='submit' variant="contained"><LoginIcon/>Login</Button>
            <Button type='reset' variant="contained">Reset</Button>
          </div>
        </form>
      </div>
    </div>
  )
}
