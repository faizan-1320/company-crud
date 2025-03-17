import React from 'react'

export default function AdminLogin() {
    return (
        <div className='border border-5 p-5 border-info' style={{ margin: '5px' }}>
            <h4 className='text-center m-3'>Login Form</h4>
            <form>
                <div className="mb-3">
                    <label htmlFor="cmpEmail" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="cmpEmail" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="cmpPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="cmpPassword" />
                </div>
                <button type="submit" className="btn btn-primary m-3">Login</button>
                <button type="reset" className="btn btn-primary">Reset</button>
            </form>
        </div>
    )
}
