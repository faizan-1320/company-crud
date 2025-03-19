import React from 'react'
import Navabar from '../navabar/Navabar'
import '../header/Header.css'

export default function Header() {
  return (
    <>
      <div className="top-header text-center bg-info text-white py-2">
        <h2 className="m-0">COMPANY CRUD OPERATIONS</h2>
      </div>

      <Navabar />
    </>
  )
}
