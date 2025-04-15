import React from 'react';
 import { useFormik } from 'formik';
import { basicSchema } from './schema';
 
const handleSubmit=(values)=>{
console.log("...valuesss",values);

}
export default function Basic() {
  const {values,handleBlur,touched, handleChange,errors} = useFormik({
    initialValues: {
      email: '',
      age: '',
      password: '',
      confirmPassword:'',
    },
    validationSchema:basicSchema,
    onSubmit:handleSubmit
    
  });
  return (
    <form autoComplete="off">
      <label htmlFor="email">Email</label>
      <input
      
        id="email"
        type="email"
        placeholder="Enter your email"
         value={values.email}
        onChange={handleChange}
       onBlur={handleBlur}
       className={errors.email && touched.email ? "input-error" : ""}
      />
      {errors.email && touched.email && <p className="error">{errors.email}</p>}
      <label htmlFor="age">Age</label>
      <input
        id="age"
        type="number"
        placeholder="Enter your age"
       
        value={values.age}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.age && touched.age ? "input-error" : ""}
      />
      {errors.age && touched.age && <p className="error">{errors.age}</p>}
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        placeholder="Enter your password"
       
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.password && touched.password ? "input-error" : ""}
      />
      {errors.password && touched.password && (
        <p className="error">{errors.password}</p>
      )}
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        id="confirmPassword"
        type="password"
        placeholder="Confirm password"
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.confirmPassword && touched.confirmPassword ? "input-error" : ""
        }
      />
      {errors.confirmPassword && touched.confirmPassword && (
        <p className="error">{errors.confirmPassword}</p>
      )}
      <button 
      // disabled={isSubmitting} 
      type="submit">
        Submit
      </button>
    </form>
  );
}
