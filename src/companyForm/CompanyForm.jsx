import React, { useState } from 'react'

export default function CompanyForm() {
    const [company, setCompany] = useState({
        cmpId: '',
        cmpName: '',
        cmpImg: '',
        cmpRegisterNumber: '',
        cmpEstablished: '',
        cmpClassOfCompany: 'Public',
        cmpAddress: ''
    })
    const getDetailsCmp = (e) => {
        // console.log(e.target.value);
        setCompany({ ...company, [e.target.name]: e.target.value })

    }
    return (
        <div className='border border-5 bg-dark text-white' style={{ margin: '5px 100px' }}>
            <h4 className='text-center m-3'>Company Form</h4>
            <form className='m-3'>
                <div className="mb-3">
                    <label htmlFor="cmpName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="cmpName" name='cmpName' value={company.cmpName} onChange={getDetailsCmp} />
                </div>
                <div className="mb-3">
                    <label htmlFor="cmpRegisterNumber" className="form-label">RegisterNumber</label>
                    <input type="number" className="form-control" id="cmpRegisterNumber" name='cmpRegisterNumber' value={company.cmpRegisterNumber} onChange={getDetailsCmp} />
                </div>
                <div className="mb-3">
                    <label htmlFor="cmpEstablished" className="form-label">Established</label>
                    <input type="date" className="form-control" id="cmpEstablished" name='cmpEstablished' value={company.cmpEstablished} onChange={getDetailsCmp} />
                </div>
                <div className="mb-3">
                    <label htmlFor="cmpClassOfCompany" className="form-label">Class Of Company</label>
                    <select className="form-select" id='cmpClassOfCompany' name='cmpClassOfCompany' value={company.cmpClassOfCompany} onChange={getDetailsCmp}>
                        <option value="Private">Private</option>
                        <option value="Public">Public</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="cmpAddress" className="form-label">Address</label>
                    <textarea rows="4" className="form-control" id="cmpAddress" name='cmpAddress' value={company.cmpAddress} onChange={getDetailsCmp} />
                </div>
                <button type="submit" className="btn btn-primary m-2">Submit</button>
                <button type="reset" className="btn btn-primary">Reset</button>
            </form>
        </div>
    )
}
