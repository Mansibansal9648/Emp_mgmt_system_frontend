import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./components/signin/signin";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route
          path="/dashboard"
          element={
           <Dashboard/>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
