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
import { useSelector } from 'react-redux'

function Layout(props) {
    const userType = useSelector((state)=>state.user)
    const user = useSelector((state)=>state.user)
    const [activeMenuItem, setActiveMenuItem] = useState('dashboard')
    const [display,setDisplay] = useState("show")

    const handleMenuItemClick = (menuItem) => {
        setActiveMenuItem(menuItem)
    }

   console.log("usertype:", user.userType)

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 sidebar border border-1 " style={ display === "show" ? {display: "block"} : {display: "none"} }>
                        <div className="inner_container " >
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
                                <h5 className="mt-2 mb-1">{user.name}</h5>
                                { user.userType === "Admin" ? <h6 className="mx-2 mt-2">Admin</h6> : <h6 className="mx-2 mt-2">Employee</h6>}
                            </div>
                            <div className="container d-flex justify-content-center align-items-center mt-5">
                                    { userType === "Admin" ? 
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
                                            to="/admin-dashboard"
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
                                  : 
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
                                            Home
                                        </Link>
                                    </li>
                                    <li
                                     className={`mx-2 mt-3 w-100 sidebar-menu p-2 border rounded ${
                                         activeMenuItem === 'to_do'
                                             ? 'active'
                                             : ''
                                     }`}
                                     onClick={() =>
                                         handleMenuItemClick('to_do')
                                     }
                                 >
                                     <Link to="/todo"
                                            className="nav-link">
                                         <i className="fa-regular fa-clipboard mx-2"></i>
                                         To do
                                     </Link>
                                 </li>
                                 <li
                                     className={`mx-2 mt-3 w-100 sidebar-menu p-2 border rounded ${
                                         activeMenuItem === 'salary'
                                             ? 'active'
                                             : ''
                                     }`}
                                     onClick={() =>
                                         handleMenuItemClick('salary')
                                     }
                                 >
                                     <span>
                                     <i className="fa-solid fa-wallet mx-2"></i>
                                         Salary
                                     </span>
                                 </li>
                                 <li
                                     className={`mx-2 mt-3 w-100 sidebar-menu p-2 border rounded ${
                                         activeMenuItem === 'leave'
                                             ? 'active'
                                             : ''
                                     }`}
                                     onClick={() =>
                                         handleMenuItemClick('leave')
                                     }
                                 >
                                     <span>
                                     <i class="fa-solid fa-door-open mx-2"></i>
                                         Leave
                                     </span>
                                 </li>
                                 <li
                                     className={`mx-2 mt-3 w-100 sidebar-menu p-2 border rounded ${
                                         activeMenuItem === 'document'
                                             ? 'active'
                                             : ''
                                     }`}
                                     onClick={() =>
                                         handleMenuItemClick('document')
                                     }
                                 >
                                     <span>
                                     <i className="fa-regular fa-file mx-2"></i>
                                         Document
                                     </span>
                                 </li>
                                    
                                    </ul>}
                                   
                            </div>
                        </div>
                    </div>

                    <div className="col-md-10 p-0 rest_part">
                        <div className="container-fluid navbar d-flex justify-content-space-between border border-1">
                            <span className="rounded-circle" onClick={()=>{
                                if(display === "show"){

                                    setDisplay("hide")
                                }
                                else{
                                    setDisplay("show")
                                }
                            }}>
                                <MenuOpenIcon />
                            </span>
                            <div className="searchbox position-relative d-flex align-items-center">
                                <SearchIcon className="mr-2" />
                                <input
                                    type="text"
                                    placeholder="Search here..."
                                    className="input"
                                />
                                <NotificationsNoneIcon className="bell-icon" />
                            </div>
                        </div>
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Layout
