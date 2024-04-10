"use client";
import React from "react";
import { useFormik } from "formik";
import { text } from "stream/consumers";

type Props = {};

export default function Form({}: Props) {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="flex justify-center items-center h-screen bg-gray-800 dark:bg-white">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white dark:bg-gray-800 p-12 rounded-[10%]"
      >
        <div style={styles.formGroup}>
          <h2 className="text-center text-xl font-bold pb-4">
            Youtube Details
          </h2>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            placeholder="Vinsmoke Sanji"
            value={formik.values.username}
            onChange={formik.handleChange}
            style={styles.input}
          />
          {formik.errors.username && formik.touched.username ? (
            <p className="error">{formik.errors.username}</p>
          ) : (
            <p />
          )}
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="email">E-Mail:</label>
          <input
            id="email"
            type="email"
            placeholder="sanji.thecook@xyzmail.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            style={styles.input}
          />
          {formik.errors.email && formik.touched.email ? (
            <p className="error">{formik.errors.email}</p>
          ) : (
            <p />
          )}
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={formik.values.password}
            onChange={formik.handleChange}
            style={styles.input}
          />
          {formik.errors.password && formik.touched.password ? (
            <p className="error">{formik.errors.password}</p>
          ) : (
            <p />
          )}
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="confirmpassword">Confirm Password:</label>
          <input
            id="confirmpassword"
            type="password"
            placeholder="Confirm your password"
            value={formik.values.confirmpassword}
            onChange={formik.handleChange}
            style={styles.input}
          />
          {formik.errors.confirmpassword && formik.touched.confirmpassword ? (
            <p className="error">{formik.errors.confirmpassword}</p>
          ) : (
            <p />
          )}
        </div>
        <button
          type="submit"
          disabled={formik.isSubmitting}
          style={styles.submitBtn}
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
    width: "100%", // Ensure button takes full width
  },
};
