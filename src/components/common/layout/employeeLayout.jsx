import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import DashboardIcon from '@mui/icons-material/Dashboard'
import BadgeIcon from '@mui/icons-material/Badge'
import AnnouncementIcon from '@mui/icons-material/Announcement'
import SettingsIcon from '@mui/icons-material/Settings'
import SearchIcon from '@mui/icons-material/Search'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import '../common.css'
import profile_pic from '../../../assets/images/profile.png'

function EmployeeLayout() {
    const [activeMenuItem, setActiveMenuItem] = useState('dashboard')

    const handleMenuItemClick = (menuItem) => {
        setActiveMenuItem(menuItem)
    }
  return (
    <div className='container-fluid employee_layout'>
        <div className="row">
            <div className="col-md-2 border border-1">
            <div className="inner_container">
                            <div className="sidebar-profile text-center">
                                <div className="mt-3">
                                    <span className="logo mx-4">
                                        DevSages CRM
                                    </span>
                                </div>

                                <div className="imagebox d-flex justify-content-center align-items-center overflow-hidden">
                                    <img
                                        src={profile_pic}
                                        alt=""
                                        className="img-fluid"
                                    />
                                </div>
                                <h5 className="mt-2 mb-1"> Welcome, User Name</h5>
                               
                            </div>
                            <div className="container d-flex justify-content-center align-items-center mt-5">
                                <ul className="list-unstyled">
                                    <li
                                        className={`mx-2 mt-3 w-100 sidebar-menu p-2 border rounded ${
                                            activeMenuItem === 'dashboard'
                                                ? 'active'
                                                : ''
                                        }`}
                                        onClick={() =>
                                            handleMenuItemClick('dashboard')
                                        }
                                    >
                                        <Link
                                            to="/employee-dashboard"
                                            className="nav-link"
                                        >
                                            <DashboardIcon className="mx-2" />
                                            Dashboard
                                        </Link>
                                    </li>
                                    <li
                                        className={`mx-2 mt-3 w-100 sidebar-menu p-2 border rounded ${
                                            activeMenuItem === 'employees'
                                                ? 'active'
                                                : ''
                                        }`}
                                        onClick={() =>
                                            handleMenuItemClick('employees')
                                        }
                                    >
                                        <Link
                                            to="/employees"
                                            className="nav-link"
                                        >
                                            <BadgeIcon className="mx-2" />
                                            Employees
                                        </Link>
                                    </li>
                                    <li
                                        className={`mx-2 mt-3 w-100 sidebar-menu p-2 border rounded ${
                                            activeMenuItem === 'department'
                                                ? 'active'
                                                : ''
                                        }`}
                                        onClick={() =>
                                            handleMenuItemClick('department')
                                        }
                                    >
                                        <span>
                                            <BadgeIcon className="mx-2" />
                                            Department
                                        </span>
                                    </li>
                                    <li
                                        className={`mx-2 mt-3 w-100 sidebar-menu p-2 border rounded ${
                                            activeMenuItem === 'announcement'
                                                ? 'active'
                                                : ''
                                        }`}
                                        onClick={() =>
                                            handleMenuItemClick('announcement')
                                        }
                                    >
                                        <span>
                                            <AnnouncementIcon className="mx-2" />
                                            Announcement
                                        </span>
                                    </li>
                                    <li
                                        className={`mx-2 mt-3 w-100 sidebar-menu p-2 border rounded ${
                                            activeMenuItem === 'settings'
                                                ? 'active'
                                                : ''
                                        }`}
                                        onClick={() =>
                                            handleMenuItemClick('settings')
                                        }
                                    >
                                        <span>
                                            <SettingsIcon className="mx-2" />
                                            Settings
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
            </div>
            <div className="col-md-10 bg-secondary h-100">
                
            </div>
        </div>
    </div>
  )
}

export default EmployeeLayout