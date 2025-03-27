import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { createBrowserRouter, RouterProvider } from 'react-router'
import Company from './company/Company.jsx'
import CompanyForm from './companyForm/CompanyForm.jsx'
import AdminLogin from './adminLogin/AdminLogin.jsx'
import Home from './home/Home.jsx'
import { companyGetById } from './api/Api.jsx'

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
    },
    {
      path:'/home',
      element:<Home/>
    },
    {
      path:'/edit-company/:cmpId',
      element:<CompanyForm/>,
      loader:async({params})=>{
        console.log("params ------------------->",params.cmpId);
        return await companyGetById(params.cmpId)
      }
    }
  ]
}]

const browserRouter = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={browserRouter}>
    </RouterProvider>
  </StrictMode>,
)
