import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signin from './components/signin/signin'
import Layout from './components/common/layout/layout'
import AdminDashboard from './components/dashboard/admin/adminDashboard'
import Employees from './components/dashboard/admin/employee/employee'
import { ToastContainer } from 'react-toastify'
import CreateEmployee from './components/dashboard/admin/createEmployee/createEmployee'
import EmployeeDashboard from './components/dashboard/employee/employeeDashboard'

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
                        <Layout>
                            <AdminDashboard />
                        </Layout>
                    }
                ></Route>
                <Route
                    path="/employees"
                    element={
                        <Layout>
                            <Employees />
                        </Layout>
                    }
                ></Route>

                <Route
                    path="/employees/create-employee"
                    element={
                        <Layout>
                            <CreateEmployee />
                        </Layout>
                    }
                ></Route>
                <Route
                    path="/employee-dashboard"
                    element={
                        <Layout>
                            <EmployeeDashboard />
                        </Layout>
                    }
                ></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
