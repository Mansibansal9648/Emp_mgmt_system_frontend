import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom";
const PrivateRoute=({children})=>{
    const user=useSelector((state)=>state.user)
const location =useLocation()
const adminRoutes = ['/admin-dashboard']; 
const employeeRoutes = ['/employee-dashboard']; 
//     if(!user.isLogin){
//         switch(location.pathname){
//             case '/':
//             case '/signin':
//                 return children
//             default:
//                 return <Navigate to="/" />
//         }
// }

if (!user.isLogin) {
    if (location.pathname === '/' || location.pathname === '/signin') {
      return children; // Allow access to home or signin
    } else {
      return <Navigate to="/" />; // Redirect to home if not logged in
    }
  }

// if(user.isLogin && user.userType==='Admin'){
//     switch(location.pathname){
//         case '/':
//         case '/signin':
//             return <Navigate to="/admin-dashboard" /> 
//         default:
//             return children
//     }
// }
  // If the user is logged in as Admin
  if (user.isLogin && user.userType === 'Admin') {
    if (location.pathname === '/' || location.pathname === '/signin') {
      return <Navigate to="/admin-dashboard" />; // Redirect to admin dashboard
    }
    if (employeeRoutes.includes(location.pathname)) {
      return <Navigate to="/admin-dashboard" />; // Prevent admin from accessing employee routes
    }
    return children; // Allow access to admin routes
  }

// if(user.isLogin && user.userType==='Employee'){
//     switch(location.pathname){
//         case '/':
//         case '/signin':
//             return <Navigate to="/employee-dashboard" /> 
//         default:
//             return children
//     }
// }
 // If the user is logged in as Employee
 if (user.isLogin && user.userType === 'Employee') {
    if (location.pathname === '/' || location.pathname === '/signin') {
      return <Navigate to="/employee-dashboard" />; // Redirect to employee dashboard
    }
    if (adminRoutes.includes(location.pathname)) {
      return <Navigate to="/employee-dashboard" />; // Prevent employee from accessing admin routes
    }
    return children; // Allow access to employee routes
  }

}

export default PrivateRoute