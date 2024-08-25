import React, { useState } from "react";
import "./signin.css";
import { useFormik } from "formik";
import { loginSchema } from "../../schemas/loginSchema";
import "react-toastify/dist/ReactToastify.css";
import ToggleButton from "react-bootstrap/ToggleButton";
import { toast } from "react-toastify";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import { loginAdmin, loginUser } from "../../api/loginApi";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [value, setValue] = useState(1);
  // const [activeValue, setActiveValue] = useState(3);
  const handleChange = (val) => {
    setValue(val);
  };
  const navigate = useNavigate();
  const initialState = {
    email: "",
    password: "",
  };

  const loginAdminHandler = async (loginData) => {
    const res = await loginAdmin(loginData);
    if (res && res.data.responseCode === 200) {
      toast.success(res.data.resMessage);
      navigate("/admin-dashboard");
    } else if (res && res.data.responseCode === 400) {
      // console.log("Error 400");
      // console.log("Response Data", res.data);
      toast.error(res.data.errMessage);
    } else {
      toast.error("Something Went Wrong.....");
      // console.log("Error", error);
    }
  };

  const loginUserHandler = async (loginData) => {
    const res = await loginUser(loginData);
    if (res && res.data.responseCode === 200) {
      toast.success(res.data.resMessage);
      navigate("/employee-dashboard");
    } else if (res && res.data.responseCode === 400) {
      // console.log("Error 400");
      // console.log("Response Data", res.data);
      toast.error(res.data.errMessage);
    } else {
      toast.error("Something Went Wrong.....");
    }
  };

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: loginSchema,
    onSubmit: async function (values, action) {
      // console.log("Value:", value);
      if (value == 1) {
        await loginAdminHandler(values);
      } else if (value == 2) {
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
          <div className="mb-4 d-flex  justify-content-center align-items-center border-none">
            <ToggleButtonGroup
              type="radio"
              name="options"
              value={value}
              className="border-0"
              onChange={handleChange}
            >
              <ToggleButton
                id="tbg-btn-1"
                value={1}
                className={`toggle-button ${value === 1 ? "active" : ""}`}
                // onClick={() => setActiveValue(3)}
              >
                Admin Login
              </ToggleButton>
              <ToggleButton
                id="tbg-btn-2"
                value={2}
                className={`toggle-button ${value === 2 ? "active" : ""}`}
                // onClick={() => setActiveValue(4)}
              >
                User Login
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="mb-2 input_label">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`form-control ${
                formik.errors.email && formik.touched.email
                  ? "border border-danger "
                  : ""
              }`}
            />
            {formik.errors.email && formik.touched.email ? (
              <p className="form_error">{formik.errors.email}</p>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="mb-2 signin_input_label">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`form-control ${
                formik.errors.password && formik.touched.password
                  ? "border border-danger "
                  : ""
              }`}
            />
                {formik.errors.password && formik.touched.password ? (
              <p className="form_error">{formik.errors.password}</p>
            ) : null}
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
