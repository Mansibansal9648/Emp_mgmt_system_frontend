import React from "react"
import './signin.css'

function Signin(){
    return(
        <div className="main_contain">
        <div className="container">
          <form action="">
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
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="mb-2 input_label">
                Password
              </label>
              <input
                type="password"
                name="text"
                className="form-control"
                placeholder="Enter your password"
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
    )
}
export default Signin