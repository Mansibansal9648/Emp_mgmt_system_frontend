import Layout from '../common/layout/layout'
import AdminDashboard from './admin/adminDashboard'
import EmployeeDashboard from './employee/employeeDashboard'

function Dashboard() {
    let userType = 'admin'
    return (
        <>
            <Layout>
                {userType === 'admin' ? (
                    <AdminDashboard />
                ) : (
                    <EmployeeDashboard />
                )}
            </Layout>
        </>
    )
}

export default Dashboard
