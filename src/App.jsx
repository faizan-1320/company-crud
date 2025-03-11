import './App.css'
import Company from './Company/Company'
// import Companycard from './companycard/Companycard'
import Header from './Header/Header'

function App() {

  return (
    <>
      <h1 className='mainheader'>Company Manangement System</h1>
      <Header></Header>
      {/* <Companycard/> */}
      <Company/>
    </>
  )
}

export default App
