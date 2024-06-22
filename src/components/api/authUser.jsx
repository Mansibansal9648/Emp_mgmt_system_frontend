import axios from "axios";

export const createData = async (form_data) => {
  try {
    const response = await axios.post("http://localhost:4001/form_data", {
      fullname: form_data.fullname,
      email: form_data.email,
      phone: form_data.phone,
      department: form_data.department,
      designation: form_data.designation,
      salary: form_data.salary,
      date: form_data.date,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log("error:", error);
  }
};
