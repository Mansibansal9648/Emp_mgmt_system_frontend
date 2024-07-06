import axios from "axios";


// ----------------------GetData-----------------------------------------------


export const getEmployeeData = async (page,limit) => {
  try {
    const response = await axios.get(`http://localhost:8080/api/all-employees?page=${page}&limit=${limit}`);
    console.log("data", response.data);
    return response

  } catch (error) {
    // console.log("error : ", error);
    return error.response;
  }
};



// -----------------------------CreateData---------------------------------------



export const createData = async (form_data) => {
  try {
    const response = await axios.post("http://localhost:8080/api/create-employee", {
      name: form_data.name,
      email: form_data.email,
      phone: form_data.phone,
      designation: form_data.designation,
      department: form_data.department,
      salary: form_data.salary,
      date_of_joining: form_data.date_of_joining,
    });
    console.log(response);
    return response;
  } catch (error) {
    // console.log("error:", error);
    return error.response;
  }
};
