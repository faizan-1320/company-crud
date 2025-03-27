import React from 'react'
import Navbar from '../navbar/Navbar'
import '../header/Header.css'

export default function Header() {
  return (
    <>
      <div className="top-header text-center text-white py-2" style={{background:"#299"}}>
        <h2 className="m-0">COMPANY CRUD OPERATIONS</h2>
      </div>

      <Navbar />
    </>
  )
}
