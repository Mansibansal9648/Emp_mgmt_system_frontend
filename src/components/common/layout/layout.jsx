import { useState } from "react";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BadgeIcon from "@mui/icons-material/Badge";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import "../common.css";

function Layout(props) {
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  }
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            {/* Sidebar */}
            <div className="col-md-2 sidebar border border-1 ">
              <div class="sidebar-profile  text-center ">
                <div className="mt-3 ">
                  <span className="logo mx-4 ">DevSages CRM</span>
                </div>

                <div class="imagebox d-flex justify-content-center align-items-center">
                  <img src="" alt="" className="img-fluid rounded-circle" />
                </div>
                <h5 class="mt-2 mb-1">Nikita Dhingra</h5>
                <h6 class="mx-2 mt-2">Admin</h6>
              </div>
              <div className="container d-flex justify-content-center align-items-center mt-5">
                <ul className="list-unstyled">
                  <li
                    className={`mx-2 mt-3 w-100 sidebar-menu p-2 border rounded ${
                      activeMenuItem === "dashboard" ? "active" : ""
                    }`}
                    onClick={() => handleMenuItemClick("dashboard")}
                  >
                    <Link to="/dashboard" className="nav-link">
                      <DashboardIcon className="mx-2" />
                      Dashboard
                    </Link>
                  </li>
                  <li
                    className={`mx-2 mt-3 w-100 sidebar-menu p-2 border rounded ${
                      activeMenuItem === "employees" ? "active" : ""
                    }`}
                    onClick={() => handleMenuItemClick("employees")}
                  >
                    <Link to="/employees" className="nav-link">
                      <BadgeIcon className="mx-2" />
                      Employees
                    </Link>
                  </li>
                  <li
                    className={`mx-2 mt-3 w-100 sidebar-menu p-2 border rounded ${
                      activeMenuItem === "department" ? "active" : ""
                    }`}
                    onClick={() => handleMenuItemClick("department")}
                  >
                    <span>
                      <BadgeIcon className="mx-2" />
                      Department
                    </span>
                  </li>
                  <li
                    className={`mx-2 mt-3 w-100 sidebar-menu p-2 border rounded ${
                      activeMenuItem === "announcement" ? "active" : ""
                    }`}
                    onClick={() => handleMenuItemClick("announcement")}
                  >
                    <span>
                      <AnnouncementIcon className="mx-2" />
                      Announcement
                    </span>
                  </li>
                  <li
                    className={`mx-2 mt-3 w-100 sidebar-menu p-2 border rounded ${
                      activeMenuItem === "settings" ? "active" : ""
                    }`}
                    onClick={() => handleMenuItemClick("settings")}
                  >
                    <span>
                      <SettingsIcon className="mx-2" />
                      Settings
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Navbar */}
            <div className="col-md-10 p-0">
              <div className="container-fluid navbar d-flex justify-content-space-between  border border-1 ">
                <button className="rounded-circle">
                  <MenuOpenIcon />
                </button>
                <div className=" searchbox position-relative d-flex align-items-center">
                  <SearchIcon className="mr-2" />
                  <input
                    type="text"
                    placeholder="Search here..."
                    className="input "
                  />
                  <NotificationsNoneIcon className="bell-icon" />
                </div>
              </div>
              {props.children}
            </div>
          </div>
        </div>
      </>
    );
  };

export default Layout;
