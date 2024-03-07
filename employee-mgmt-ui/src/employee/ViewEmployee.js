import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewEmployee() {
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

  const { id } = useParams();

  const loadEmployee = async () => {
    const result = await axios.get(
      `http://localhost:8080/api/v1/employee-mgmt-service/employee/${id}`
    );
    setEmployee(result.data);
  };

  useEffect(() => {
    loadEmployee();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Employee Details</h2>
          <div className="card">
            <div className="card-header">
              Details of Employee id: {employee.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>First Name:</b>
                  {employee.firstName}
                </li>
                <li className="list-group-item">
                  <b>Last Name:</b>
                  {employee.lastName}
                </li>
                <li className="list-group-item">
                  <b>Department:</b>
                  {employee.department}
                </li>
                <li className="list-group-item">
                  <b>Salary:</b>
                  {employee.salary}
                </li>
                <li className="list-group-item">
                  <b>Email:</b>
                  {employee.email}
                </li>
                <li className="list-group-item">
                  <b>Gender:</b>
                  {employee.gender}
                </li>
                <li className="list-group-item">
                  <b>Contact:</b>
                  {employee.contact}
                </li>
                <li className="list-group-item">
                  <b>Country:</b>
                  {employee.country}
                </li>
                <li className="list-group-item">
                  <b>DOB:</b>
                  {employee.dob}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
