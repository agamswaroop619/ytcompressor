"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

type Props = {};

export default function Form({}: Props) {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters"),
      confirmpassword: Yup.string()
        .oneOf([Yup.ref("password"), ""], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="flex justify-center items-center h-screen bg-gray-800 dark:bg-white">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white dark:bg-gray-800 p-12 rounded-lg"
      >
        <div style={styles.formGroup}>
          <h2 className="text-center text-xl font-bold pb-4 font-mono">
            Youtube Details
          </h2>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            placeholder="Vinsmoke Sanji"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={styles.input}
          />
          {formik.touched.username && formik.errors.username ? (
            <p className="error">{formik.errors.username}</p>
          ) : null}
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="email">E-Mail:</label>
          <input
            id="email"
            type="email"
            placeholder="sanji.thecook@xyzmail.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={styles.input}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="error">{formik.errors.email}</p>
          ) : null}
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={styles.input}
          />
          {formik.touched.password && formik.errors.password ? (
            <p className="error">{formik.errors.password}</p>
          ) : null}
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="confirmpassword">Confirm Password:</label>
          <input
            id="confirmpassword"
            type="password"
            placeholder="Confirm your password"
            value={formik.values.confirmpassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={styles.input}
          />
          {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
            <p className="error">{formik.errors.confirmpassword}</p>
          ) : null}
        </div>
        <button
          type="submit"
          disabled={formik.isSubmitting}
          style={
            formik.isSubmitting ? styles.disabledSubmitBtn : styles.submitBtn
          }
        >
          Submit
        </button>
      </form>
    </div>
  );
}

const styles = {
  formContainer: {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Center the form items horizontally
  },
  formGroup: {
    marginBottom: "20px",
    width: "100%", // Ensure form groups take full width
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    color: "rgb(0 0 0)",
  },
  submitBtn: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    width: "100%",
  },
  disabledSubmitBtn: {
    backgroundColor: "#ccc",
    color: "#666",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "not-allowed",
    fontSize: "16px",
    width: "100%",
  },
};
