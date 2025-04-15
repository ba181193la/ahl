import * as yup from 'yup'
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basicSchema=yup.object().shape({
    email:yup.string().email("Inavlid email").required(),
    age:yup.number().positive().integer().required('age is required'),
    password:yup.string().min(5,"minimum 5 char").matches(passwordRules).required('password is required'),
   confirmPassword:yup
   .string()
   .oneOf([yup.ref('password'),null],'password not match')
   .required('password is required')
  })