import { Password } from "@mui/icons-material";
import axios from "axios";
// ----------------------loginAdminAPI-----------------------------------------------

export const loginAdmin = async (data) => {
  try {
    const response = await axios.post(
      `http://localhost:8080/auth/login-admin`,

      {
        email: data.email,
        password: data.password,
      }
    );
    // console.log("data", response.data);
    return response;
  } catch (error) {
    // console.log("error : ", error);
    return error.response;
  }
};

// ----------------------loginUserAPI-----------------------------------------------

export const loginUser = async (login_data) => {
  try {
    const response = axios.post(`http://localhost:8080/auth/login-employee`, {
      email: login_data.email,
      password: login_data.password,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};
