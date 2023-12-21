import { useFormik } from 'formik';
import React from 'react'
import * as Yup from 'yup';
export default function MyFormUser() {

    const  validation = ()=>{

        return Yup.object().shape({
            firstName: Yup.string().required('Fullname is required'),
            lastName: Yup.string()
              .required('Username is required')
              .min(6, 'Username must be at least 6 characters')
              .max(20, 'Username must not exceed 20 characters'),
            email: Yup.string()
              .required('Email is required')
              .email('Email is invalid'),
              
         
          });


      }

    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
        },
        validationSchema:validation,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

  return (
    <form onSubmit={formik.handleSubmit}>
       <label htmlFor="firstName">First Name</label>
       <input
         id="firstName"
         name="firstName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.firstName}
       />


{formik.touched.firstName && formik.errors.firstName ? (
  <div className="error-message">{formik.errors.firstName}</div>): null}


       <label htmlFor="lastName">Last Name</label>
       <input
         id="lastName"
         name="lastName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.lastName}
       />
       <label htmlFor="email">Email Address</label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
       />
       <button type="submit">Submit</button>
     </form>
  )
}