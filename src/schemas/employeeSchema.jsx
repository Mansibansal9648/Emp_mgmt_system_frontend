import * as Yup from 'yup'

export const employeeSchema = Yup.object({
    name: Yup.string()
        .matches(/^[a-zA-Z\s]+$/, 'Name can only contain alphabets and spaces')
        .min(3, 'Name must be at least 3 characters')
        .max(25, "Name can't exceed 25 characters")
        .required('Name is required field'),

    email: Yup.string()
        .matches(
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            'Please enter a valid email address'
        )
        .required('Email is required field'),

    phone: Yup.string()
        .matches(/^[0-9]{10}$/, 'Contact number must have exactly 10 digits')
        .required('Contact Number is required field'),

    designation: Yup.string()
        .matches(
            /^[a-zA-Z\s]+$/,
            'Designation can only contain alphabets and spaces'
        )
        .min(2, 'Designation must be at least 2 characters')
        .max(35, "Designation can't exceed 35 characters")
        .required('Designation is required field'),

    department: Yup.string()
        .matches(/^[a-zA-Z]+$/, 'Department can only contain alphabets')
        .min(2, 'Department must be at least 2 characters')
        .max(25, "Department can't exceed 25 characters")
        .required('Department is required field'),

    salary: Yup.string()
        .matches(
            /^[0-9]+$/,
            'Salary should be number and greater than or equal to zero'
        )
        .min(4, 'Salary must be at least 4 digit')
        .max(15, "Salary can't exceed 15 digits")
        .required('Salary is required field'),

    date_of_joining: Yup.date()
        .max(new Date(), "Joining date can't be greater than today's date")
        .required('Date of Joining is required field'),
})
