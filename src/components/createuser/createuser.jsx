import React, { useState } from "react";
import "./createuser.css";
import { createData } from "../api/authUser";
import { useFormik } from "formik";
import { Schemas } from "../schemas/schemas";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateUser() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const initialState = {
    fullname: "",
    email: "",
    phone: "",
    department: "",
    designation: "",
    salary: "",
    date: "",
  };

  const CreateEntry = async (form_data) => {
    const res = await createData(form_data);
    if (res.status === 201) {
      toast.success("User created successfully");
    }
    return res;
  };

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: Schemas,

    onSubmit: async (values, action) => {
      console.log("Form values on submit:", values);
      await CreateEntry(values);
      action.resetForm();
    },
  });

  return (
    <div className="wrap">
      <div className="createUser">
        <form className="form">
          <div className="modal-header mb-3 d-flex justify-content-between">
            <h4 className="modal-title" id="exampleModalLabel">
              Enter Details
            </h4>
            <button
              type="button"
              className="btn close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true" className="close_btn">
                &times;
              </span>
            </button>
          </div>

          <div className="modal-body">
            <div className="form-floating mb-3">
              <input
                type="text"
                className={`form-control ${
                  formik.errors.fullname && formik.touched.fullname
                    ? "border border-danger "
                    : ""
                }`}
                name="fullname"
                id="fullname"
                placeholder="Enter Full Name"
                value={formik.values.fullname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{
                  borderColor:
                    formik.errors.fullname && formik.touched.fullname
                      ? "red"
                      : "",
                }}
              />
              <label htmlFor="fullname">Full Name</label>
              {formik.errors.fullname && formik.touched.fullname ? (
                <p className="form_error">{formik.errors.fullname}</p>
              ) : null}
            </div>

            <div className="form-floating mb-3">
              <input
                type="email"
                className={`form-control ${
                  formik.errors.email && formik.touched.email
                    ? "border border-danger "
                    : ""
                }`}
                name="email"
                id="email"
                placeholder="Enter Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{
                  borderColor:
                    formik.errors.email && formik.touched.email ? "red" : "",
                }}
              />
              <label htmlFor="email">Email</label>
              {formik.errors.email && formik.touched.email ? (
                <p className="form_error">{formik.errors.email}</p>
              ) : null}
            </div>

            <div className="form-floating mb-3">
              <input
                type="tel"
                className={`form-control ${
                  formik.errors.phone && formik.touched.phone
                    ? "border border-danger "
                    : ""
                }`}
                name="phone"
                id="phone"
                placeholder="Enter Phone Number"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{
                  borderColor:
                    formik.errors.phone && formik.touched.phone ? "red" : "",
                }}
              />
              <label htmlFor="phone">Phone</label>
              {formik.errors.phone && formik.touched.phone ? (
                <p className="form_error">{formik.errors.phone}</p>
              ) : null}
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                className={`form-control ${
                  formik.errors.department && formik.touched.department
                    ? "border border-danger "
                    : ""
                }`}
                name="department"
                id="department"
                placeholder="Enter Department"
                value={formik.values.department}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{
                  borderColor:
                    formik.errors.department && formik.touched.department
                      ? "red"
                      : "",
                }}
              />
              <label htmlFor="department">Department</label>
              {formik.errors.department && formik.touched.department ? (
                <p className="form_error">{formik.errors.department}</p>
              ) : null}
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                className={`form-control ${
                  formik.errors.designation && formik.touched.designation
                    ? "border border-danger "
                    : ""
                }`}
                name="designation"
                id="designation"
                placeholder="Enter Designation"
                value={formik.values.designation}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{
                  borderColor:
                    formik.errors.designation && formik.touched.designation
                      ? "red"
                      : "",
                }}
              />
              <label htmlFor="designation">Designation</label>
              {formik.errors.designation && formik.touched.designation ? (
                <p className="form_error">{formik.errors.designation}</p>
              ) : null}
            </div>

            <div className="form-floating mb-3">
              <input
                className={`form-control ${
                  formik.errors.salary && formik.touched.salary
                    ? "border border-danger "
                    : ""
                }`}
                type="number"
                id="salary"
                name="salary"
                value={formik.values.salary}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter salary"
                style={{
                  borderColor:
                    formik.errors.salary && formik.touched.salary ? "red" : "",
                }}
              />
              <label htmlFor="salary">Salary</label>
              {formik.errors.salary && formik.touched.salary ? (
                <p className="form_error">{formik.errors.salary}</p>
              ) : null}
            </div>
            <div className="form-floating mb-4">
              <input
                type="date"
                className="form-control"
                name="date"
                id="date"
                placeholder="Enter DOJ"
                value={formik.values.date}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{
                  borderColor:
                    formik.errors.date && formik.touched.date ? "red" : "",
                }}
              />
              <label htmlFor="date">Date of Joining</label>
              {formik.errors.date && formik.touched.date ? (
                <p className="form_error">{formik.errors.date}</p>
              ) : null}
            </div>

            <div className="form-floating mb-4 text-center">
              <button
                className="submit_btn"
                type="submit"
                onClick={formik.handleSubmit}
              >
                Submit Data
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
