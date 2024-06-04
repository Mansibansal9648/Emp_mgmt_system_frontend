// import "./header.css";
// import SearchIcon from "@mui/icons-material/Search";
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import MenuOpenIcon from '@mui/icons-material/MenuOpen';

// function Header() {
//   return (
//     <>
      <header className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row ">
            <div className="col-sm-3 d-flex align-items-center">
              <span className="logo mx-4">DevSages CRM</span>
              <button className="rounded-circle"><MenuOpenIcon/></button>
            </div>
            <div className="col-sm-6 d-flex align-items-center">
            
            </div>
            <div className="col-sm-3 d-flex align-items-center">
              <div className=" searchbox position-relative d-flex align-items-center">
                <SearchIcon className="mr-2"/>
                <input
                  type="text"
                  placeholder="Search here..."
                  className="input "
                />
               
              </div>
              <NotificationsNoneIcon className="bell-icon"/>
            </div>
          </div>
        </div>
      </header>
//     </>
//   );
// }
// export default Header;
