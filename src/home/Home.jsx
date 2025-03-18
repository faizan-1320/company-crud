import React from 'react'
import {companyArr} from '../Company/Company'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Dashboard Overview</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-blue-100 text-blue-700 rounded-lg shadow">
              <h3 className="text-lg font-bold">Total Companies</h3>
              <p className="text-xl">{companyArr.length}</p>
            </div>
            <div className="p-4 bg-green-100 text-green-700 rounded-lg shadow">
              <h3 className="text-lg font-bold">Active Companies</h3>
              <p className="text-xl">{companyArr.length}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
