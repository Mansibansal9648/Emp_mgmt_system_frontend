import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom";
const PrivateRoute=({children})=>{
    const user=useSelector((state)=>state.user)
const location =useLocation()
    if(!user.isLogin){
        switch(location.pathname){
            case '/':
            case '/signin':
                return children
            default:
                return <Navigate to="/" />
        }
}

if(user.isLogin && user.userType==='Admin'){
    switch(location.pathname){
        case '/':
        case '/signin':
            return <Navigate to="/admin-dashboard" /> 
        default:
            return children
    }
}

if(user.isLogin && user.userType==='Employee'){
    switch(location.pathname){
        case '/':
        case '/signin':
            return <Navigate to="/employee-dashboard" /> 
        default:
            return children
    }
}


}

export default PrivateRoute