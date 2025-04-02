import { useCookies } from "react-cookie";
import { Navigate } from "react-router";


export function RouteGurd({children}){
    const [cookies] = useCookies();
    return cookies.admin != undefined ? children : <Navigate to={'/'} />
}

export function GuestGuard({ children }) {
    const [cookies] = useCookies();
  
    return cookies.admin !== undefined ? <Navigate to="/home" /> : children;
  }