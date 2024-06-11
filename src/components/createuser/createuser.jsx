import React from "react";
import { useState, useEffect } from "react";
import './createuser.css';
import {
  getEmployeeData,
  DeleteData,
  UpdateData,
  createData,
} from "../api/authUser";
import { useFormik } from "formik";
import { Schemas } from "../schemas/schemas";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateUser() {
  const [form_data, setForm_data] = useState(initialState());
  const [table_data, setTable_data] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function initialState() {
    return {
      name: "",
      email: "",
      phone: "",
      department: "",
      designation: "",
      salary: "",
      date: "",
    };
  }

  const getData = async () => {
    const res = await getEmployeeData();

    if (res.isSuccess) {
      console.log(res.data);
      setTable_data(res.data);
    } else {
      toast.error(res.errMsg);
    }
  };

  const CreateEntry = async (form_data) => {
    const res = await createData(form_data);
    // console.log(res)
    if (res.status === 201) {
      toast.success("User created successfully");
    }
    return res;
  };

  const DeleteEntry = async (user_id) => {
    const res = await DeleteData(user_id);
    if (res.status === 200) {
      toast.success("User deleted successfully");
    }
    getData();
  };

  const UpdateEntry = async (form_data) => {
    const res = await UpdateData(form_data);
    if (res.status === 200) {
      toast.success("User updated successfully");
    }
    return res;
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: form_data,
      validationSchema: Schemas,
      onSubmit: async (values, action) => {
        console.log("values: ", values);
        if (form_data.id) {
          const res = await UpdateEntry(values);
          console.log("res", res);
        } else {
          const res = await CreateEntry(values);
          console.log("res", res);
        }
        setForm_data(initialState);
        await getData();
        action.resetForm();
      },
      enableReinitialize: true,
    });

  return (
    <div className="wrap">
      <div className="createUser">
      <form className="form ">
      <div className="modal-header mb-3 d-flex justify-content-between">
        <h4 className="modal-title" id="exampleModalLabel">Enter Details</h4>
        <button type="button" className="btn close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" className="close_btn">&times;</span>
        </button>
      </div>

      <div className="modal-body">
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            placeholder="Enter Full Name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{
              borderColor: errors.name && touched.name ? 'red' : touched.name ? 'green' : '',
            }}
          />
          <label htmlFor="name">Full Name</label>
          {errors.name && touched.name ? <p className="form_error">{errors.name}</p> : null}
        </div>

        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            placeholder="Enter Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{
              borderColor: errors.email && touched.email ? 'red' : touched.email ? 'green' : '',
            }}
          />
          <label htmlFor="email">Email</label>
          {errors.email && touched.email ? <p className="form_error">{errors.email}</p> : null}
        </div>

        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            name="phone"
            id="phone"
            placeholder="Enter Phone"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{
              borderColor: errors.phone && touched.phone ? 'red' : touched.phone ? 'green' : '',
            }}
          />
          <label htmlFor="phone">Phone</label>
          {errors.phone && touched.phone ? <p className="form_error">{errors.phone}</p> : null}
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            name="department"
            id="department"
            placeholder="Enter Department"
            value={values.department}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{
              borderColor: errors.department && touched.department ? 'red' : touched.department ? 'green' : '',
            }}
          />
          <label htmlFor="department">Department</label>
          {errors.department && touched.department ? (
            <p className="form_error">{errors.department}</p>
          ) : null}
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            name="designation"
            id="designation"
            placeholder="Enter Designation"
            value={values.designation}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{
              borderColor: errors.designation && touched.designation ? 'red' : touched.designation ? 'green' : '',
            }}
          />
          <label htmlFor="designation">Designation</label>
          {errors.designation && touched.designation ? (
            <p className="form_error">{errors.designation}</p>
          ) : null}
        </div>

        <div className="form-floating mb-3">
          <input
            className="form-control"
            type="number"
            id="salary"
            name="salary"
            value={values.salary}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter salary"
            style={{
              borderColor: errors.salary && touched.salary ? 'red' : touched.salary ? 'green' : '',
            }}
          />
          <label htmlFor="salary">Salary</label>
          {errors.salary && touched.salary ? <p className="form_error">{errors.salary}</p> : null}
        </div>
        <div className="form-floating mb-4">
          <input
            type="date"
            className="form-control"
            name="date"
            id="date"
            placeholder="Enter DOJ"
            value={values.date}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{
              borderColor: errors.date && touched.date ? 'red' : touched.date ? 'green' : '',
            }}
          />
          <label htmlFor="date">Date of Joining</label>
          {errors.date && touched.date ? <p className="form_error">{errors.date}</p> : null}
        </div>
        <div class="text-center pb-4">
          <button
            className="submit_btn"
            type="button"
            onClick={handleSubmit}
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
