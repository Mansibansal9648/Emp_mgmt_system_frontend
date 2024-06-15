import * as Yup from "yup";

export const Schemas = Yup.object({
  name: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, "Name can only contain alphabets and spaces")
    .min(3, "Name must be at least 3 characters")
    .max(25, "Name can't exceed 25 characters")
    .required("Please Enter Your Name"),

  email: Yup.string()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address")
    .required("Please Enter Your Email"),

  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,25}$/,
      "Password must contain at least one lowercase letter, one uppercase letter, one number, one special character, and be at least 6 characters long"
    )
    .required("Please enter your password"),

  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Contact number must have exactly 10 digits")
    .required("Contact Number is Required"),

  designation: Yup.string()
    .matches(
      /^[a-zA-Z\s]+$/,
      "Designation can only contain alphabets and spaces"
    )
    .min(2, "Designation must be at least 2 characters")
    .max(35, "Designation can't exceed 35 characters")
    .required("Please Enter Your Designation"),

  department: Yup.string()
    .matches(/^[a-zA-Z]+$/, "Department can only contain alphabets")
    .min(2, "Department must be at least 2 characters")
    .max(25, "Department can't exceed 25 characters")
    .required("Please Enter Your Department"),

  salary: Yup.string()
    .matches(
      /^[0-9]+$/,
      "Salary should be number and greater than or equal to zero"
    )
    .min(4, "Salary must be at least 4 digit")
    .max(15, "Salary can't exceed 15 digits")
    .required("Please Enter Your Salary"),

  date: Yup.date()
    .max(new Date(), "Joining date can't be greater than today's date")
    .required("Please Enter Your Date of Joining"),
});
