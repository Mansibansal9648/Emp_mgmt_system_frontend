import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./components/signin/signin";
import Layout from "./components/common/layout/layout";
import AdminDashboard from "./components/dashboard/admin/adminDashboard";
import Employees from "./components/dashboard/admin/employee";
import CreateUser from "./components/createuser/createuser";
import { ToastContainer } from "react-toastify";

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
        <Route path="/dashboard" element={<Layout>
          <AdminDashboard/> 
        </Layout>}></Route>
        <Route path="/employees" element={<Layout>
          <Employees/> 
        </Layout>}></Route>

        <Route path="/createuser" element={
          <Layout>
            <CreateUser />
          </Layout>
        }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
