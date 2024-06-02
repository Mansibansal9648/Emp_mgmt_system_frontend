import { BrowserRouter, Routes,Route } from "react-router-dom";
import Signin from "./components/signin/signin";
import AdminDashboard from "./components/admin/adminDashboard";
import EmployeeDashboard from "./components/employee/employeeDashboard";

function App() {
  return (
   <BrowserRouter>
   <Routes>

     <Route path="/" element={<Signin />}></Route>
     <Route path="/signin" element={<Signin />}></Route>
     <Route path="/admin" element={<AdminDashboard />}></Route>
     <Route path="/employee" element={<EmployeeDashboard/>}></Route>
     </Routes>
     </BrowserRouter>
  );
}

export default App;
