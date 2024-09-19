import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  // Define validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .oneOf(["rishiME@199"], 'Password must be "rishiME@199"')
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  // Initial form values
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  return (
    <div style={{ margin: "70px auto", padding: "20px" }}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ isValid, dirty }) => (
          <Form>
           
            <div
              style={{
                display: "flex",
                backgroundColor: "white",
                borderRadius: "10px",
                margin: "auto",
                width: "77%",
                gap: "40px",
                alignItems: "center",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  
              }}
            >
                <div>
               
                </div>
              <div style={{ width: "40%", padding: "20px" , display:"flex",alignItems:"center" , flexDirection:"column" , gap:"14px"}}>
                <div id="box">
                  <label htmlFor="name">Name</label>
                  <Field
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                  />
                  <ErrorMessage  
                    name="name"
                    component="div"
                    style={{ color: "red" , fontSize:"14px"}}
                  />
                </div>

                <div id="box">
                  <label htmlFor="email">Email</label>
                  <Field
                    id="name"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    style={{ color: "red", fontSize:"14px" }}
                  />
                </div>

                <div id="box">
                  <label htmlFor="password">Password</label>
                  <Field
                    id="name"
                    name="password"
                    type="password"
                    placeholder="Enter the password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    style={{ color: "red", fontSize:"14px" }}
                  />
                </div>

                <div id="box">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <Field
                    id="name"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm the password"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    style={{ color: "red" , fontSize:"14px"}}
                  />
                </div>

                <button style={{width:"20%", backgroundColor:"burlywood" , padding:"5px", borderRadius:"5px", marginTop:"20px"}} type="submit" disabled={!(isValid && dirty)}>
                  Submit
                </button>
              </div>
              <div style={{ width: "25%", borderRadius:"10px" }}>
                <img src="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=570" />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
