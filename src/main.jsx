import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { createBrowserRouter, RouterProvider } from 'react-router'
import Company from './Company/Company.jsx'
import CompanyForm from './companyForm/CompanyForm.jsx'
import AdminLogin from './adminLogin/AdminLogin.jsx'
import Home from './home/Home.jsx'

let routes = [{
  path:'/',
  element:<App/>,
  children:[
    {
      path:'/',
      element:<AdminLogin/>
    },
    {
      path:'/companies',
      element:<Company/>
    },
    {
      path:'/add-company',
      element:<CompanyForm/>
    },{
      path:'/home',
      element:<Home/>
    }
  ]
}]

const browserRouter = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={browserRouter}></RouterProvider>
  </StrictMode>,
)
