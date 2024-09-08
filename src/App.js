import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signin from './components/signin/signin'
import Layout from './components/common/layout/layout'
import AdminDashboard from './components/dashboard/admin/adminDashboard'
import Employees from './components/dashboard/admin/employee/employee'
import { ToastContainer } from 'react-toastify'
import CreateEmployee from './components/dashboard/admin/createEmployee/createEmployee'
import EmployeeDashboard from './components/dashboard/employee/employeeDashboard'
import PrivateRoute from './components/common/privateRoutes/privateRoute'

function App() {
    return (
        <BrowserRouter>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <Routes>
                <Route path="/" element={<Signin />}></Route>
                <Route path="/signin" element={<Signin />}></Route>
                <Route
                    path="/admin-dashboard"
                    element={
                        <PrivateRoute>
                        <Layout>
                            <AdminDashboard />
                        </Layout>
                        </PrivateRoute>
                    }
                ></Route>
                <Route
                    path="/employees"
                    element={
                        <PrivateRoute>
                        <Layout>
                            <Employees />
                        </Layout>
                        </PrivateRoute>
                    }
                ></Route>

                <Route
                    path="/create-employee"
                    element={
                        <PrivateRoute>
                        <Layout>
                            <CreateEmployee />
                        </Layout>
                        </PrivateRoute>
                    }
                ></Route>
                <Route
                    path="/employee-dashboard"
                    element={
                        <PrivateRoute>
                        <Layout>
                            <EmployeeDashboard />
                        </Layout>
                        </PrivateRoute>
                    }
                ></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
