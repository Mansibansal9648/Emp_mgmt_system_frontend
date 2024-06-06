import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./components/signin/signin";
import Dashboard from "./components/dashboard";
import CreateUser from "./components/createuser/createuser";
import Layout from "./components/common/layout/layout";
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
        <Route path="/dashboard" element={<Dashboard />}></Route>

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
