import React from 'react'
import { Field, Formik, Form } from 'formik'

export const SignupFormikForm = () => {

    let d = {
        firstName: "",
        lastName: "",
        email: "",
        acceptTerms: "false",
        hobbies: [],
        gender: "",
        city:""
    }
    return (
        <div>
            <h1>sign Up</h1>
            <Formik initialValues={d}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >


                <Form>
                    <label>First Name</label>
                    <Field id="firstName" name="firstName" placeholder="Enter FirstName"></Field>

                    <label>Last Name</label>
                    <Field id="lastName" name="lastName" placeholder="Enter LastName"></Field>

                  q   <label>Email</label>
                    <Field id="email" name="email" placeholder="Enter Email"></Field>

                    <label>
                        <Field type="checkbox" name="acceptTerms" />

                    </label>

                    <div role="group" aria-labelledby="checkbox-group">
                        <label>
                            <Field type="checkbox" name="hobbies" value="Cricket" />
                            Cricket
                        </label>
                        <label>
                            <Field type="checkbox" name="hobbies" value=" Music" />
                            Music
                        </label>
                        <label>
                            <Field type="checkbox" name="hobbies" value="Traveling" />
                            Traveling
                        </label>
                    </div>

                    <div role="group" aria-labelledby="my-radio-group">
                        <label>
                            <Field type="radio" name="gender" value="Male" />
                            Male
                        </label>
                        <label>
                            <Field type="radio" name="gender" value="Female" />
                            Female
                        </label>

                    </div>

                    <Field name="city" as="select">
                        <option value="vadodara">vadodara</option>
                        <option value="pune">pune</option>
                        <option value="surat">surat</option>
                    </Field>

                    <button type="submit">Submit</button>
                </Form>

            </Formik>
        </div>
    )
}
