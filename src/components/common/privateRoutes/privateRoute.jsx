import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
const PrivateRoute = ({ children }) => {
    const user = useSelector((state) => state.user)
    const location = useLocation()

    const isLogin = user.isLogin
    const adminRoutes = ['/admin-dashboard','/employees','/create-employee']
    const employeeRoutes = ['/employee-dashboard']

    if (!isLogin) {
        return <Navigate to="/signin" /> // Redirect to signin if not logged in
    } else if (user.userType == 'Admin') {
        return adminRoutes.includes(location.pathname) ? (
            children
        ) : (
            <Navigate to="/admin-dashboard" />
        ) // Redirect to home if not admin route
    } else if (user.userType == 'Employee') {
        return employeeRoutes.includes(location.pathname) ? (
            children
        ) : (
            <Navigate to="/employee-dashboard" />
        ) // Redirect to home if not employee route
        // return children
    }

    return children
}

export default PrivateRoute