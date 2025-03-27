import { Outlet } from 'react-router'
import './App.css'
import Header from './header/Header'
import { CookiesProvider } from 'react-cookie'

function App() {

  return (
    <>
    <CookiesProvider>
      <Header/>
      <Outlet></Outlet>
    </CookiesProvider>
    </>
  )
}

export default App
