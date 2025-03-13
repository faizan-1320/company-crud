import './App.css'
import Company from './Company/Company'
import CompanyForm from './companyForm/CompanyForm'
import Header from './Header/Header'

function App() {

  return (
    <>
      <h1 className='mainheader'>Company Manangement System</h1>
      <Header/>
      <CompanyForm/>
      <Company/>
    </>
  )
}

export default App
