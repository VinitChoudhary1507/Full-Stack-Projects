import React, { useState } from "react";
import axios from 'axios'
import { userAuthStore } from "../store/Users";

const SignupPage = () => {
   const {signup} = userAuthStore()
  const [form, setForm] = useState(
    { fullname: "", email: "", password: "" }
  );
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.fullname.trim()) newErrors.fullname = "Name is required";
    if (!form.email.includes("@")) newErrors.email = "Enter a valid email";
    if (form.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    return newErrors;
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form submitted:", form);
      setErrors({});
    }
      try {
      signup(form)
      // Optionally clear form or redirect
      setForm({ fullname: "", email: "", password: "" });
    } catch (error) {
      console.error("Signup failed:", error.response?.data || error.message);
    }
  };
  

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow-sm w-100" style={{ maxWidth: "400px" }}>
        <h3 className="text-center mb-4">Sign Up</h3>
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="fullname"
              className={`form-control ${errors.fullname ? "is-invalid" : ""}`}
              value={form.fullname}
              onChange={handleChange}
            />
            <div className="invalid-feedback">{errors.fullname}</div>
          </div>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              name="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              value={form.email}
              onChange={handleChange}
            />
            <div className="invalid-feedback">{errors.email}</div>
          </div>

          <div className="mb-4">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              value={form.password}
              onChange={handleChange}
            />
            <div className="invalid-feedback">{errors.password}</div>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
