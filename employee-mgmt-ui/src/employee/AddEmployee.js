import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddEmployee() {
  let navigate = useNavigate();

  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    department: "",
    salary: "",
    email: "",
    gender: "",
    contact: "",
    country: "",
    dob: "",
  });

  const {
    firstName,
    lastName,
    department,
    salary,
    email,
    gender,
    contact,
    country,
    dob,
  } = employee;

  const [emailId, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleInputChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsValidEmail(validateEmail(inputEmail));
  };

  const validateEmail = (inputEmail) => {
    // Regular expression for validating email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(inputEmail);
  };

  const onInputChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(
      "http://localhost:8080/api/v1/employee-mgmt-service/employee",
      employee
    );
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add Employee</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your First Name"
                name="firstName"
                value={firstName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Last Name"
                name="lastName"
                value={lastName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="department" className="form-label">
                Department
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Department"
                name="department"
                value={department}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="salary" className="form-label">
                Salary
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Salary"
                name="salary"
                value={salary}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="text"
                className={`form-control ${!isValidEmail ? "is-invalid" : ""}`}
                placeholder="Enter your Email Address"
                name="emailId"
                value={emailId}
                onChange={handleInputChange}
              />
              {!isValidEmail && (
                <div className="invalid-feedback">
                  Please Enter a Valid Email Address.
                </div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="gender" className="form-label">
                Gender
              </label>
              <select
                className="form-select"
                aria-label="Select Gender"
                name="gender"
                value={gender}
                onChange={(e) => onInputChange(e)}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>className
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="contact" className="form-label">
                Contact
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Contact"
                name="contact"
                value={contact}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="country" className="form-label">
                Country
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Country"
                name="country"
                value={country}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="dob" className="form-label">
                DOB
              </label>
              <input
                type={"date"}
                className="form-control"
                placeholder="Enter your DOB"
                name="dob"
                value={dob}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
