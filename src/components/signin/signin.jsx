import React from "react";
import "./signin.css";
import { useState } from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signin() {
  const initialState = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: initialState,
    onSubmit: async function (values, action) {
      console.log("Values:", values);
      action.resetForm();
    },
  });

  return (
    <div className="main_contain">
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="text-center title_box">
            <span className="pre_title"></span>
            <h1 className="title">Dev Sages CRM</h1>
          </div>
          <h4 className="text-center">SIGN IN</h4>
          <p className="text-center text-secondary">
            Enter your credentials to access your account
          </p>
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
            <label htmlFor="password" className="mb-2 input_label">
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
