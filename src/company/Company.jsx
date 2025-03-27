import React, { useEffect, useState } from 'react'
import Companycard from '../companycard/Companycard';
import { deleteCompany, getCompany } from '../api/Api';
import Swal from 'sweetalert2'

export default function Company() {
  const [companyArr,setCompanyArr] = useState([])

  async function companyRes() {
    const response = await getCompany();
    setCompanyArr(response)
  }

  async function companyDelete(cmpId) {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'You won’t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    })
  
    if (result.isConfirmed) {
      try {
        const response = await deleteCompany(cmpId)
        if (response != null) {
          Swal.fire({
            title: 'Deleted!',
            text: 'The company has been deleted.',
            icon: 'success',
          }).then(()=>{
            companyRes()
          })
        } else {
          Swal.fire({
            title: 'Error!',
            text: 'Something went wrong...',
            icon: 'error',
          })
        }
      } catch (error) {
        Swal.fire({
          title: 'Error!',
          text: 'Failed to delete the company.',
          icon: 'error',
        })
      }
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire({
        title: 'Cancelled',
        text: 'Your company data is safe.',
        icon: 'info',
      })
    }
  }

  useEffect(()=>{
    companyRes()
  },[])
  
  const cmpCard = companyArr.map((company,index)=><Companycard key={'card'+index} company={company} companyDelete={companyDelete}/>);
  return (
    <>
      <div className='d-flex flex-wrap bg-black'>
        {cmpCard}
      </div>
    </>
  )
}