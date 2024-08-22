import React, { useState } from "react";
import "./signin.css";
import { useFormik } from "formik";
import "react-toastify/dist/ReactToastify.css";
import ToggleButton from "react-bootstrap/ToggleButton";
import { toast } from "react-toastify";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import { loginAdmin, loginUser } from "../../api/login";
import { useNavigate } from 'react-router-dom';

function Signin() {
  const [value, setValue] = useState(1);
  const handleChange = (val) => {
    setValue(val);
  };
  const navigate = useNavigate();
  const initialState = {
    email: "",
    password: "",
  };

  const loginAdminHandler = async (login_Form_data) => {
    try {
      const res = await loginAdmin(login_Form_data);
      if (res && res.status === 200) {
        console.log("Login Successfully");
        toast.success(res.data.resMessage);
        navigate('/dashboard');
      } else if (res && res.status === 400) {
        console.log("Error 400");
        console.log("Response Data", res.data);
        toast.error(res.data.errMessage);
      }
    } catch (error) {
      toast.error("Something Went Wrong.....");
      console.log("Error", error);
    }
  };

  const loginUserHandler = async (login_user_Form_data) => {
    try {
      const res = await loginUser(login_user_Form_data);
      if (res && res.status === 200) {
        console.log("Login Successfully");
        navigate('/EmployeeDashboard');
        toast.success(res.data.resMessage);
      } else if (res && res.status === 400) {
        console.log("Error 400");
        console.log("Response Data", res.data);
        toast.error(res.data.errMessage);
      }
    } catch (error) {
      toast.error("Something Went Wrong.....");
      console.log("Error", error);
    }
  };



  const formik = useFormik({
    initialValues: initialState,
    onSubmit: async function (values, action) {
      console.log("Value:", value);
      if (value == 1) {
        await loginAdminHandler(values);
      }
      else if(value ==2) {
        await loginUserHandler(values);
      }
      action.resetForm();
    },
  });

  return (
    <div className="signin_main_contain">
      <div className="signin_container">
        <form onSubmit={formik.handleSubmit}>
          <div className="text-center title_box">
            <span className="pre_title"></span>
            <h1 className="title">Dev Sages CRM</h1>
          </div>
          <h4 className="text-center">SIGN IN</h4>
          <p className="text-center text-secondary">
            Enter your credentials to access your account
          </p>
          <div className="mb-4">
            <ToggleButtonGroup
              type="radio"
              name="options"
              value={value}
              onChange={handleChange}
            >
              <ToggleButton id="tbg-btn-1" value={1}>
                Admin Login
              </ToggleButton>
              <ToggleButton id="tbg-btn-2" value={2}>
                User Login
              </ToggleButton>
            </ToggleButtonGroup>
            {/* <button onClick={handleChange}>Admin Login</button>
            <button onClick={handleChange}>User Login</button> */}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="mb-2 input_label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="mb-2 signin_input_label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <button className=" signin mb-3">SIGN IN</button>
          <div className="text-center">
            {" "}
            <span>Forgot your password? </span>
            <a href="" className="anchor">
              Reset Password
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Signin;
