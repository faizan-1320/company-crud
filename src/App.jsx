import { Outlet } from 'react-router'
import './App.css'
import Header from './Header/Header'

function App() {

  return (
    <>
      <Header/>
      <Outlet></Outlet>
    </>
  )
}

export default App
