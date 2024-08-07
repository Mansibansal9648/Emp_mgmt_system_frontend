import axios from "axios";

// ----------------------GetData-----------------------------------------------

export const getEmployees = async (page, limit) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/all-employees?page=${page}&limit=${limit}`
    );
    // console.log("data", response.data);
    return response;
  } catch (error) {
    // console.log("error : ", error);
    return error.response;
  }
};

// -----------------------------CreateData---------------------------------------

export const createEmployee = async (form_data) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/create-employee",
      {
        name: form_data.name,
        email: form_data.email,
        phone: form_data.phone,
        designation: form_data.designation,
        department: form_data.department,
        salary: form_data.salary,
        date_of_joining: form_data.date_of_joining,
      }
    );
    // console.log(response);
    return response;
  } catch (error) {
    // console.log("error:", error);
    return error.response;
  }
};

//--------------------------------DeleteData------------------------------------------

export const deleteEmployee = async (employee_id) => {
  // console.log("authID:", employee_id)
  try {
    const response = await axios.delete(
      `http://localhost:8080/api/delete-employee?employeeId=${employee_id}`
    );
    // console.log(response)
    return response;
  } catch (error) {
    // console.log("autherror", error)
    return error.response;
  }
};

//---------------------------------EditData------------------------------------------

export const editEmployee = async (form_data) => {
  try {
    const response = await axios.put(
      "http://localhost:8080/api/edit-employee",
      {
        employeeId: form_data.id,
        name: form_data.name,
        email: form_data.email,
        phone: form_data.phone,
        designation: form_data.designation,
        department: form_data.department,
        salary: form_data.salary,
        date_of_joining: form_data.date_of_joining,
      }
    );
    // console.log(response);
    return response;
  } catch (error) {
    return error.response;
  }
};
