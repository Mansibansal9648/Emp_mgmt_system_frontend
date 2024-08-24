import './adminDashboard.css'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import LocalAtmIcon from '@mui/icons-material/LocalAtm'
import LaptopMacIcon from '@mui/icons-material/LaptopMac'

function AdminDashboard() {
    return (
        <>
            <div className="container ps-5 pt-4">
                <div className="row  d-flex  ">
                    <div className="col-md-4 p-0">
                        <div
                            className="admin-portal"
                            style={{ backgroundColor: '#f0f9ff' }}
                        >
                            <PermIdentityIcon
                                style={{
                                    width: '50px',
                                    height: '50px',
                                    color: '#74c1ed',
                                }}
                            />
                            <p style={{ color: '#6c6c6c' }}>No. of Employees</p>
                            <p
                                className="d-flex justify-content-end mt-5"
                                style={{ fontWeight: '900', fontSize: '25px' }}
                            >
                                100
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 p-0">
                        <div
                            className="admin-portal"
                            style={{ backgroundColor: '#fef6fb' }}
                        >
                            <LaptopMacIcon
                                style={{
                                    width: '50px',
                                    height: '50px',
                                    color: '#EE95C5',
                                }}
                            />
                            <p style={{ color: '#6c6c6c' }}>Working</p>
                            <p
                                className="d-flex justify-content-end mt-5"
                                style={{ fontWeight: '900', fontSize: '25px' }}
                            >
                                80
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 p-0">
                        <div
                            className="admin-portal"
                            style={{ backgroundColor: '#fefbec' }}
                        >
                            <LocalAtmIcon
                                style={{
                                    width: '50px',
                                    height: '50px',
                                    color: '#f6c762',
                                }}
                            />
                            <p style={{ color: '#6c6c6c', fontSize: '18px' }}>
                                Salary
                            </p>
                            <p
                                className="d-flex justify-content-end mt-5"
                                style={{ fontWeight: '900', fontSize: '25px' }}
                            >
                                INR 500,000
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminDashboard
