import React, { useEffect, useState, useRef } from 'react'
import Companycard from '../companycard/Companycard';
import { deleteCompany, getCompany } from '../api/Api';
import Swal from 'sweetalert2'

export default function Company() {
  const [companyArr, setCompanyArr] = useState([]);
  const [key, setKey] = useState("id");
  const search = useRef();
  const allcompanys = useRef([]);

  async function companyRes() {
    const response = await getCompany();
    setCompanyArr(response);
    allcompanys.current.value = [...response];
  }

  async function companyDelete(cmpId) {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'You won’t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    });

    if (result.isConfirmed) {
      try {
        const response = await deleteCompany(cmpId);
        if (response != null) {
          Swal.fire({
            title: 'Deleted!',
            text: 'The company has been deleted.',
            icon: 'success',
          }).then(() => {
            companyRes();
          });
        } else {
          Swal.fire({
            title: 'Error!',
            text: 'Something went wrong...',
            icon: 'error',
          });
        }
      } catch (error) {
        Swal.fire({
          title: 'Error!',
          text: 'Failed to delete the company.',
          icon: 'error',
        });
      }
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire({
        title: 'Cancelled',
        text: 'Your company data is safe.',
        icon: 'info',
      });
    }
  }

  const searchCompany = () => {
    if (search.current.value !== "") {
      const found = allcompanys.current.value.filter((cmp) =>
        cmp[key].toString().toLowerCase().includes(search.current.value.toLowerCase())
      );
      setCompanyArr(found);
    } else {
      setCompanyArr(allcompanys.current.value);
    }
  };

  useEffect(() => {
    companyRes();
  }, []);

  return (
    <div className="container mt-3">
      {/* Search Bar */}
      <div className="row align-items-center mb-3">
        <div className="col-md-3">
          <label htmlFor="search" className="form-label fw-bold">Search By:</label>
          <select
            className="form-select"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            id="search"
            name="search"
          >
            <option value="id">Id</option>
            <option value="cmpName">Name</option>
            <option value="cmpRegisterNumber">Register Number</option>
            <option value="cmpEstablished">Established</option>
            <option value="cmpClassOfCompany">Class of Company</option>
          </select>
        </div>

        <div className="col-md-6">
          <label className="form-label d-none d-md-block">&nbsp;</label>
          <input
            className="form-control"
            type="search"
            placeholder="Search..."
            aria-label="Search"
            ref={search}
            onKeyUp={searchCompany}
          />
        </div>
      </div>

      {/* Company Cards Grid */}
      <div className="row g-4">
        {companyArr.map((company, index) => (
          <div key={'card' + index} className="col-12 col-sm-6 col-md-4">
            <Companycard company={company} companyDelete={companyDelete} />
          </div>
        ))}
      </div>
    </div>
  );
}