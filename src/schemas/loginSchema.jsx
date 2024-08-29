import * as Yup from 'yup'
export const loginSchema = Yup.object({
    email: Yup.string()
        .matches(
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            'Please enter a valid email address'
        )
        .required('Email is required field'),

    password: Yup.string().required('Password is required field'),
})