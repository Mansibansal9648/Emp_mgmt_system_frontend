import * as Yup from "yup";

export const Schemas = Yup.object({
  name: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, "Name can only contain alphabets and spaces")
    .min(2, "Name must be at least 2 characters")
    .max(25, "Name can't exceed 25 characters")
    .required("Please enter your name"),

  email: Yup.string()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address")
    // .email("Please enter a valid email address")
    .required("Please enter your email"),

    phone: Yup.string()
    .matches( /^[0-9]+$/, "Number should be of 10 digits")
    .min(10, "Number should be of 10 digits")
    .max(10, "Number should be of 10 digits")
    .required("Please enter your Phone Number"),


  designation: Yup.string()
    .matches(
      /^[a-zA-Z\s]+$/,
      "Designation can only contain alphabets and spaces"
    )
    .min(2, "Designation must be at least 2 characters")
    .max(35, "Designation can't exceed 35 characters")
    .required("Please enter your designation"),

  department: Yup.string()
    .matches(/^[a-zA-Z]+$/, "Department can only contain alphabets")
    .min(2, "Department must be at least 2 characters")
    .max(25, "Department can't exceed 25 characters")
    .required("Please enter your department"),

  salary: Yup.string()
    .matches(
      /^[0-9]+$/,
      "Salary should be number and greater than or equal to zero"
    )
    .min(4, "Salary must be at least 4 digit")
    .max(15, "Salary can't exceed 15 digits")
    .required("Please enter your salary"),

  date: Yup.date()
    .max(new Date(), "Joining date can't be greater than today's date")
    .required("Please enter your date of joining"),
});
