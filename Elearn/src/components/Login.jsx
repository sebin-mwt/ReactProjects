import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./FormStyle.module.css";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.email) newErrors.email = "*Email is required";
    if (!formData.password) newErrors.password = "*Password required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.find(
      (user) => user.email === formData.email && user.password === formData.password
    );

    if (userExists) {
      alert(`User logged in, welcome ${userExists.name}`);
      setFormData({ email: "", password: "" });
      navigate("/"); // Redirect to the homepage on successful login
    } else {
      alert("Login failed! Check your credentials.");
    }
  };

  return (
    <div className={styles["form-wrapper"]}>
      <div className={styles["form-container"]}>
        <h4 className="text-center">Login Form</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
            />
            <span className={styles["error-msg-colr"]}>{errors.email}</span>
          </div>

          <div className="mb-3">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={formData.password}
              onChange={handleChange}
            />
            <span className={styles["error-msg-colr"]}>{errors.password}</span>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-dark rounded-pill">
              Submit
            </button>
          </div>
        </form>
        <div className="d-flex justify-content-between mt-3">
          <span>
            Not Registered..? <Link to="/register">Register</Link>
          </span>
          <Link to="/">Go Home</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;