import React, { useEffect, useState } from 'react'
import Companycard from '../companycard/Companycard';
import { getCompany } from '../api/Api';


export default function Company() {
  const [companyArr,setCompanyArr] = useState([])

  async function companyRes() {
    const response = await getCompany();
    setCompanyArr(response)
  }

  useEffect(()=>{
    companyRes()
  },[])
  
  const cmpCard = companyArr.map((company,index)=><Companycard key={'card'+index} company={company}/>);
  return (
    <>
      <div className='d-flex flex-wrap bg-black'>
        {cmpCard}
      </div>
    </>
  )
}