import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./FormStyle.module.css";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
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
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const passwrdCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const emailCheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Validations
    if (!formData.name) newErrors.name = "*Name is required";
    if (!formData.email) newErrors.email = "*Email is required";
    else if (!emailCheck.test(formData.email)) newErrors.email = "*Invalid email format";
    if (!formData.phone) newErrors.phone = "*Phone Number required";
    else if (String(formData.phone).length !== 10) newErrors.phone = "*Phone Number is invalid";
    if (!formData.password) newErrors.password = "*Password required";
    else if (!passwrdCheck.test(formData.password)) newErrors.password = "*Invalid password";
    if (!formData.dob) newErrors.dob = "*DOB required";
    else if (new Date(formData.dob) > today) newErrors.dob = "*DOB must be earlier than today";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // LocalStorage 
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const exists = users.some(
      (user) => user.email === formData.email || user.phone === formData.phone
    );

    if (exists) {
      setErrors({ ...newErrors, email: "User already exists with this email or phone number" });
      return;
    }

    users.push(formData);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration Successful! Redirecting to login page.");
    setFormData({ name: "", email: "", phone: "", dob: "", password: "" });
    navigate("/login"); // Redirect to the login page on successful registration
  };

  return (
    <div className={styles["form-wrapper"]}>
      <div className={styles["form-container"]}>
        <h4 className="text-center">Registration Form</h4>
        <form onSubmit={handleSubmit}>
          {/* ... (Your form inputs remain the same) */}
          <div className="mb-3">
            <label>Name:</label>
            <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} />
            <span className={styles["error-msg-colr"]}>{errors.name}</span>
          </div>

          <div className="mb-3">
            <label>Phone:</label>
            <input type="number" name="phone" className="form-control" value={formData.phone} onChange={handleChange} />
            <span className={styles["error-msg-colr"]}>{errors.phone}</span>
          </div>

          <div className="mb-3">
            <label>Email:</label>
            <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} />
            <span className={styles["error-msg-colr"]}>{errors.email}</span>
          </div>

          <div className="mb-3">
            <label>Password:</label>
            <input type="password" name="password" className="form-control" value={formData.password} onChange={handleChange} />
            <p><ul style={{fontSize: 'smaller'}}>
              <li>Password contains atleast 1 capital,small letter</li>
              <li>Password contains atleast one number</li>
              <li>Password length &gt;= 8</li>
            </ul></p>
            <span className={styles["error-msg-colr"]}>{errors.password}</span>
          </div>

          <div className="mb-3">
            <label>DOB:</label>
            <input type="date" name="dob" className="form-control" value={formData.dob} onChange={handleChange} />
            <span className={styles["error-msg-colr"]}>{errors.dob}</span>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-dark rounded-pill">
              Submit
            </button>
          </div>
        </form>
        <div className="mt-3 d-flex justify-content-between">
          <span>
            Already registered..? <Link to="/login">login</Link>
          </span>
          <Link to="/">GO HOME</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;