import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./components/signin/signin";
import Layout from "./components/common/layout/layout";
import AdminDashboard from "./components/dashboard/admin/adminDashboard";
import Employees from "./components/dashboard/admin/employee";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/dashboard" element={<Layout>
          <AdminDashboard/> 
        </Layout>}></Route>
        <Route path="/employees" element={<Layout>
          <Employees/> 
        </Layout>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
