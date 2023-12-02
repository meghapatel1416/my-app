import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'

export default function SignUpFormValidation() {

  let d = {
    firstName: "",
    lastName: "",
    email: "",
    acceptterms: false,
    hobbies: [],
    gender: "",
    city: ""
  }
  //  without yup
  const validateSingUp = empData => {


    const errors = {};

    if (!empData.firstName) {
      errors.firstName = 'Please Enter firstName';
    } else if (empData.firstName.length > 20) {
      errors.firstName = 'Name cannot exceed 20 characters';
    }

    if (!empData.lastName) {
      errors.lastName = 'Please Enter firstName';
    } else if (empData.lastName.length > 20) {
      errors.lastName = 'Name cannot exceed 20 characters';
    }





    return errors;
  };
  return (
    <div>
      <h1>Sign Up</h1>

      <Formik initialValues={d}

        validate={validateSingUp}
        onSubmit={(values) => {

          console.log(values)

        }}
      >

        <Form>

          <label>FirstName</label>
          <Field id="firstName" name="firstName"
            placeholder="please Enter FirstName"></Field>

          <ErrorMessage name='firstName' />

          <label>LastName</label>
          <Field id="lastName" name="lastName"
            placeholder="please Enter LastName"></Field>
          <ErrorMessage name='lastName' />

          <label>Email</label>
          <Field id="email" name="email"
            placeholder="please Enter email" ></Field>



          <label>
            <Field type="checkbox" name="acceptterms" />

          </label>


          <div role="group" aria-labelledby="checkbox-group">
            <label>
              <Field type="checkbox" name="hobbies" value="Cricket" />
              Cricket
            </label>
            <label>
              <Field type="checkbox" name="hobbies" value="Music" />
              Music
            </label>
            <label>
              <Field type="checkbox" name="hobbies" value="Traveling" />
              Traveling
            </label>
          </div>

          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="gender" value="male" />
              Male
            </label>
            <label>
              <Field type="radio" name="gender" value="female" />
              Female
            </label>

          </div>




          <Field name="city" as="select">
            <option value="vadodara">vadodara</option>
            <option value="pune">pune</option>
            <option value="bangloor">bangloor</option>
          </Field>


          <button type="submit">Submit</button>

        </Form>


      </Formik>

    </div>
  )
}