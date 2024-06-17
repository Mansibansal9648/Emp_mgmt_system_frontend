// import React from "react";
// import { useState, useEffect } from "react";
// import "./createuser.css";
// import {
//   getEmployeeData,
//   DeleteData,
//   UpdateData,
//   createData,
// } from "../api/authUser";
// import { useFormik } from "formik";
// import { Schemas } from "../schemas/schemas";
// import { toast } from "react-toastify";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/fontawesome-free-solid";
// import "react-toastify/dist/ReactToastify.css";

// function CreateUser() {
//   const [form_data, setForm_data] = useState(initialState());
//   const [table_data, setTable_data] = useState([]);
//   const [showPassword, setShowPassword] = useState(false);

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   function initialState() {
//     return {
//       name: "",
//       email: "",
//       password: "",
//       phone: "",
//       department: "",
//       designation: "",
//       salary: "",
//       date: "",
//     };
//   }

//   const getData = async () => {
//     const res = await getEmployeeData();

//     if (res.isSuccess) {
//       console.log(res.data);
//       setTable_data(res.data);
//     } else {
//       toast.error(res.errMsg);
//     }
//   };

//   const CreateEntry = async (form_data) => {
//     const res = await createData(form_data);
//     // console.log(res)
//     if (res.status === 201) {
//       toast.success("User created successfully");
//     }
//     return res;
//   };

//   const DeleteEntry = async (user_id) => {
//     const res = await DeleteData(user_id);
//     if (res.status === 200) {
//       toast.success("User deleted successfully");
//     }
//     getData();
//   };

//   const UpdateEntry = async (form_data) => {
//     const res = await UpdateData(form_data);
//     if (res.status === 200) {
//       toast.success("User updated successfully");
//     }
//     return res;
//   };

//   const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
//     useFormik({
//       initialValues: form_data,
//       validationSchema: Schemas,
//       onSubmit: async (values, action) => {
//         console.log("values: ", values);
//         if (form_data.id) {
//           const res = await UpdateEntry(values);
//           console.log("res", res);
//         } else {
//           const res = await CreateEntry(values);
//           console.log("res", res);
//         }
//         setForm_data(initialState);
//         await getData();
//         action.resetForm();
//       },
//       enableReinitialize: true,
//     });

//   return (
//     <div className="wrap">
//       <div className="createUser">
//         <form className="form ">
//           <div className="modal-header mb-3 d-flex justify-content-between">
//             <h4 className="modal-title" id="exampleModalLabel">
//               Enter Details
//             </h4>
//             <button
//               type="button"
//               className="btn close"
//               data-dismiss="modal"
//               aria-label="Close"
//             >
//               <span aria-hidden="true" className="close_btn">
//                 &times;
//               </span>
//             </button>
//           </div>

//           <div className="modal-body">
//             <div className="form-floating mb-3">
//               <input
//                 type="text"
//                 className={`form-control ${
//                   values.name === "" && touched.name
//                     ? "border border-danger "
//                     : ""
//                 }`}
//                 name="name"
//                 id="name"
//                 placeholder="Enter Full Name"
//                 value={values.name}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 style={{
//                   borderColor:
//                     errors.name && touched.name
//                       ? "red"
//                       : touched.name
//                       ? "green"
//                       : "",
//                 }}
//               />
//               <label htmlFor="name">Full Name</label>
//               {errors.name && touched.name ? (
//                 <p className="form_error">{errors.name}</p>
//               ) : null}
//             </div>

//             <div className="form-floating mb-3">
//               <input
//                 type="email"
//                 className={`form-control ${
//                   values.email === "" && touched.email
//                     ? "border border-danger "
//                     : ""
//                 }`}
//                 name="email"
//                 id="email"
//                 placeholder="Enter Email"
//                 value={values.email}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 style={{
//                   borderColor:
//                     errors.email && touched.email
//                       ? "red"
//                       : touched.email
//                       ? "green"
//                       : "",
//                 }}
//               />
//               <label htmlFor="email">Email</label>
//               {errors.email && touched.email ? (
//                 <p className="form_error">{errors.email}</p>
//               ) : null}
//             </div>

//             <div className="form-floating mb-3">
//               <input
//                  type={showPassword ? "text" : "password"}
//                 className={`form-control ${
//                   values.password === "" && touched.password
//                     ? "border border-danger "
//                     : ""
//                 }`}
//                 name="password"
//                 id="password"
//                 placeholder="Enter password"
//                 value={values.password}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 style={{
//                   borderColor:
//                     errors.password && touched.password
//                       ? "red"
//                       : touched.password
//                       ? "green"
//                       : "",
//                 }}
//               />
//               <FontAwesomeIcon
//                 icon={showPassword ? faEye : faEyeSlash}
//                 className="eye-position"
//                 onClick={togglePasswordVisibility}
//               />
//               <label htmlFor="email">Password</label>
//               {errors.password && touched.password ? (
//                 <p className="form_error">{errors.password}</p>
//               ) : null}
//             </div>

//             <div className="form-floating mb-3">
//               <input
//                 type="tel"
//                 className={`form-control ${
//                   values.phone === "" && touched.phone
//                     ? "border border-danger "
//                     : ""
//                 }`}
//                 name="phone"
//                 id="phone"
//                 placeholder="Enter Phone Number"
//                 value={values.phone}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 style={{
//                   borderColor:
//                     errors.phone && touched.phone
//                       ? "red"
//                       : touched.phone
//                       ? "green"
//                       : "",
//                 }}
//               />
//               <label htmlFor="phone">Phone</label>
//               {errors.phone && touched.phone ? (
//                 <p className="form_error">{errors.phone}</p>
//               ) : null}
//             </div>

//             <div className="form-floating mb-3">
//               <input
//                 type="text"
//                 className={`form-control ${
//                   values.department === "" && touched.department
//                     ? "border border-danger "
//                     : ""
//                 }`}
//                 name="department"
//                 id="department"
//                 placeholder="Enter Department"
//                 value={values.department}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 style={{
//                   borderColor:
//                     errors.department && touched.department
//                       ? "red"
//                       : touched.department
//                       ? "green"
//                       : "",
//                 }}
//               />
//               <label htmlFor="department">Department</label>
//               {errors.department && touched.department ? (
//                 <p className="form_error">{errors.department}</p>
//               ) : null}
//             </div>

//             <div className="form-floating mb-3">
//               <input
//                 type="text"
//                 className={`form-control ${
//                   values.designation === "" && touched.designation
//                     ? "border border-danger "
//                     : ""
//                 }`}
//                 name="designation"
//                 id="designation"
//                 placeholder="Enter Designation"
//                 value={values.designation}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 style={{
//                   borderColor:
//                     errors.designation && touched.designation
//                       ? "red"
//                       : touched.designation
//                       ? "green"
//                       : "",
//                 }}
//               />
//               <label htmlFor="designation">Designation</label>
//               {errors.designation && touched.designation ? (
//                 <p className="form_error">{errors.designation}</p>
//               ) : null}
//             </div>

//             <div className="form-floating mb-3">
//               <input
//                 className={`form-control ${
//                   values.salary === "" && touched.salary
//                     ? "border border-danger "
//                     : ""
//                 }`}
//                 type=""
//                 id="salary"
//                 name="salary"
//                 value={values.salary}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 placeholder="Enter salary"
//                 style={{
//                   borderColor:
//                     errors.salary && touched.salary
//                       ? "red"
//                       : touched.salary
//                       ? "green"
//                       : "",
//                 }}
//               />
//               <label htmlFor="salary">Salary</label>
//               {errors.salary && touched.salary ? (
//                 <p className="form_error">{errors.salary}</p>
//               ) : null}
//             </div>
//             <div className="form-floating mb-4">
//               <input
//                 type="date"
//                 className="form-control"
//                 name="date"
//                 id="date"
//                 placeholder="Enter DOJ"
//                 value={values.date}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 style={{
//                   borderColor:
//                     errors.date && touched.date
//                       ? "red"
//                       : touched.date
//                       ? "green"
//                       : "",
//                 }}
//               />
//               <label htmlFor="date">Date of Joining</label>
//               {errors.date && touched.date ? (
//                 <p className="form_error">{errors.date}</p>
//               ) : null}
//             </div>

//             <div className="form-floating mb-4 text-center">
//               <button
//                 className="submit_btn"
//                 type="button"
//                 onClick={handleSubmit}
//               >
//                 Submit Data
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default CreateUser;

//  CODE 2 ----------------------------------------------------

// import React from "react";
// import { useState } from "react";
// import "./createuser.css";
// import {  createData } from "../api/authUser";
// import { useFormik } from "formik";
// import { Schemas } from "../schemas/schemas";
// import { toast } from "react-toastify";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/fontawesome-free-solid";
// import "react-toastify/dist/ReactToastify.css";

// function CreateUser() {

//   const [showPassword, setShowPassword] = useState(false);

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const initialState = {

//       fullname: "",
//       email: "",
//       password: "",
//       phone: "",
//       department: "",
//       designation: "",
//       salary: "",
//       date: "",
//   }

//   // const getData = async () => {
//   //   const res = await getEmployeeData();

//   //   if (res.isSuccess) {
//   //     console.log(res.data);
//   //     setTable_data(res.data);
//   //   } else {
//   //     toast.error(res.errMsg);
//   //   }
//   // };

//   const CreateEntry = async (form_data) => {
//     const res = await createData(form_data);
//     console.log(res)
//     if (res.status === 201) {
//       toast.success("User created successfully");
//     }
//     return res;
//   };

//   // const DeleteEntry = async (user_id) => {
//   //   const res = await DeleteData(user_id);
//   //   if (res.status === 200) {
//   //     toast.success("User deleted successfully");
//   //   }
//   //   // getData();
//   // };

//   // const UpdateEntry = async (form_data) => {
//   //   const res = await UpdateData(form_data);
//   //   if (res.status === 200) {
//   //     toast.success("User updated successfully");
//   //   }
//   //   return res;
//   // };
//   const formik = useFormik({
//     initialValues: initialState,
//     validationSchema: Schemas,
//     onSubmit: async function (values, action) {
//       // const res = await newUser(values);
//       await CreateEntry(values);
//       // console.log("res", res);
//       // console.log("Values: ", values);
//       action.resetForm();
//     },
//   });
//   // const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
//   //   useFormik({
//   //     initialValues: form_data,
//   //     validationSchema: Schemas,
//   //     onSubmit: async (values, action) => {
//   //       console.log("values: ", values);
//   //       if (form_data.id) {
//   //         const res = await UpdateEntry(values);
//   //         console.log("res", res);
//   //       } else {
//   //         const res = await CreateEntry(values);
//   //         console.log("res", res);
//   //       }
//   //       setForm_data(initialState);
//   //     //  await getData();
//   //       action.resetForm();
//   //     },
//   //     enableReinitialize: true,
//   //   });

//   return (
//     <div className="wrap">
//       <div className="createUser">
//         <form className="form " onSubmit={formik.handleSubmit}>
//           <div className="modal-header mb-3 d-flex justify-content-between">
//             <h4 className="modal-title" id="exampleModalLabel">
//               Enter Details
//             </h4>
//             <button
//               type="button"
//               className="btn close"
//               data-dismiss="modal"
//               aria-label="Close"
//             >
//               <span aria-hidden="true" className="close_btn">
//                 &times;
//               </span>
//             </button>
//           </div>

//           <div className="modal-body">
//             <div className="form-floating mb-3">
//               <input
//                 type="text"
//                 className={`form-control ${
//                   formik.values.fullname === "" && formik.touched.fullname
//                     ? "border border-danger "
//                     : ""
//                 }`}
//                 name="fullname"
//                 id="fullname"
//                 placeholder="Enter Full Name"
//                 value={formik.values.fullname}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 style={{
//                   borderColor:
//                     formik.errors.fullname && formik.touched.fullname
//                       ? "red"
//                       : formik.touched.fullname
//                       ? "green"
//                       : "",
//                 }}
//               />
//               <label htmlFor="fullname">Full Name</label>
//               {formik.errors.fullname && formik.touched.fullname ? (
//                 <p className="form_error">{formik.errors.fullname}</p>
//               ) : null}
//             </div>

//             <div className="form-floating mb-3">
//               <input
//                 type="email"
//                 className={`form-control ${
//                   formik.values.email === "" && formik.touched.email
//                     ? "border border-danger "
//                     : ""
//                 }`}
//                 name="email"
//                 id="email"
//                 placeholder="Enter Email"
//                 value={formik.values.email}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 style={{
//                   borderColor:
//                     formik.errors.email && formik.touched.email
//                       ? "red"
//                       : formik.touched.email
//                       ? "green"
//                       : "",
//                 }}
//               />
//               <label htmlFor="email">Email</label>
//               {formik.errors.email && formik.touched.email ? (
//                 <p className="form_error">{formik.errors.email}</p>
//               ) : null}
//             </div>

//             <div className="form-floating mb-3">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 className={`form-control ${
//                   formik.values.password === "" && formik.touched.password
//                     ? "border border-danger "
//                     : ""
//                 }`}
//                 name="password"
//                 id="password"
//                 placeholder="Enter password"
//                 value={formik.values.password}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 style={{
//                   borderColor:
//                     formik.errors.password && formik.touched.password
//                       ? "red"
//                       : formik.touched.password
//                       ? "green"
//                       : "",
//                 }}
//               />
//               <FontAwesomeIcon
//                 icon={showPassword ? faEye : faEyeSlash}
//                 className="eye-position"
//                 onClick={togglePasswordVisibility}
//               />
//               <label htmlFor="email">Password</label>
//               {formik.errors.password && formik.touched.password ? (
//                 <p className="form_error">{formik.errors.password}</p>
//               ) : null}
//             </div>

//             <div className="form-floating mb-3">
//               <input
//                 type="tel"
//                 className={`form-control ${
//                   formik.values.phone === "" && formik.touched.phone
//                     ? "border border-danger "
//                     : ""
//                 }`}
//                 name="phone"
//                 id="phone"
//                 placeholder="Enter Phone Number"
//                 value={formik.values.phone}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 style={{
//                   borderColor:
//                     formik.errors.phone && formik.touched.phone
//                       ? "red"
//                       : formik.touched.phone
//                       ? "green"
//                       : "",
//                 }}
//               />
//               <label htmlFor="phone">Phone</label>
//               {formik.errors.phone && formik.touched.phone ? (
//                 <p className="form_error">{formik.errors.phone}</p>
//               ) : null}
//             </div>

//             <div className="form-floating mb-3">
//               <input
//                 type="text"
//                 className={`form-control ${
//                   formik.values.department === "" && formik.touched.department
//                     ? "border border-danger "
//                     : ""
//                 }`}
//                 name="department"
//                 id="department"
//                 placeholder="Enter Department"
//                 value={formik.values.department}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 style={{
//                   borderColor:
//                     formik.errors.department && formik.touched.department
//                       ? "red"
//                       : formik.touched.department
//                       ? "green"
//                       : "",
//                 }}
//               />
//               <label htmlFor="department">Department</label>
//               {formik.errors.department && formik.touched.department ? (
//                 <p className="form_error">{formik.errors.department}</p>
//               ) : null}
//             </div>

//             <div className="form-floating mb-3">
//               <input
//                 type="text"
//                 className={`form-control ${
//                   formik.values.designation === "" && formik.touched.designation
//                     ? "border border-danger "
//                     : ""
//                 }`}
//                 name="designation"
//                 id="designation"
//                 placeholder="Enter Designation"
//                 value={formik.values.designation}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 style={{
//                   borderColor:
//                     formik.errors.designation && formik.touched.designation
//                       ? "red"
//                       : formik.touched.designation
//                       ? "green"
//                       : "",
//                 }}
//               />
//               <label htmlFor="designation">Designation</label>
//               {formik.errors.designation && formik.touched.designation ? (
//                 <p className="form_error">{formik.errors.designation}</p>
//               ) : null}
//             </div>

//             <div className="form-floating mb-3">
//               <input
//                 className={`form-control ${
//                   formik.values.salary === "" && formik.touched.salary
//                     ? "border border-danger "
//                     : ""
//                 }`}
//                 type=""
//                 id="salary"
//                 name="salary"
//                 value={formik.values.salary}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 placeholder="Enter salary"
//                 style={{
//                   borderColor:
//                     formik.errors.salary && formik.touched.salary
//                       ? "red"
//                       : formik.touched.salary
//                       ? "green"
//                       : "",
//                 }}
//               />
//               <label htmlFor="salary">Salary</label>
//               {formik.errors.salary && formik.touched.salary ? (
//                 <p className="form_error">{formik.errors.salary}</p>
//               ) : null}
//             </div>
//             <div className="form-floating mb-4">
//               <input
//                 type="date"
//                 className="form-control"
//                 name="date"
//                 id="date"
//                 placeholder="Enter DOJ"
//                 value={formik.values.date}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 style={{
//                   borderColor:
//                     formik.errors.date && formik.touched.date
//                       ? "red"
//                       : formik.touched.date
//                       ? "green"
//                       : "",
//                 }}
//               />
//               <label htmlFor="date">Date of Joining</label>
//               {formik.errors.date && formik.touched.date ? (
//                 <p className="form_error">{formik.errors.date}</p>
//               ) : null}
//             </div>

//             <div className="form-floating mb-4 text-center">
//               <button className="submit_btn" type="submit" >
//                 Submit Data
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default CreateUser;

//--------------------------------------------------------------------------------------------

import React, { useState } from "react";
import "./createuser.css";
import { createData } from "../api/authUser";
import { useFormik } from "formik";
import { Schemas } from "../schemas/schemas";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/fontawesome-free-solid";
import "react-toastify/dist/ReactToastify.css";

function CreateUser() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const initialState = {
    fullname: "",
    email: "",
    password: "",
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
        <form className="form" >
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
                type={showPassword ? "text" : "password"}
                className={`form-control ${
                  formik.errors.password && formik.touched.password
                    ? "border border-danger "
                    : ""
                }`}
                name="password"
                id="password"
                placeholder="Enter password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{
                  borderColor:
                    formik.errors.password && formik.touched.password
                      ? "red"
                      : "",
                }}
              />
              <FontAwesomeIcon
                icon={showPassword ? faEye : faEyeSlash}
                className="eye-position"
                onClick={togglePasswordVisibility}
              />
              <label htmlFor="password">Password</label>
              {formik.errors.password && formik.touched.password ? (
                <p className="form_error">{formik.errors.password}</p>
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
              <button className="submit_btn" type="submit" onClick={formik.handleSubmit}>
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
