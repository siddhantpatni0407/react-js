import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [employees, setEmployees] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const result = await axios.get(
      "http://localhost:8080/api/v1/employee-mgmt-service/employee"
    );
    setEmployees(result.data);
  };

  const deleteEmployee = async (id) => {
    await axios.delete(
      `http://localhost:8080/api/v1/employee-mgmt-service/employee/${id}`
    );
    loadEmployees();
  };
  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Department</th>
              <th scope="col">Gender</th>
              <th scope="col">Contact</th>
              <th scope="col">Country</th>
              <th scope="col">DOB</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{employee.department}</td>
                <td>{employee.gender}</td>
                <td>{employee.contactNo}</td>
                <td>{employee.country}</td>
                <td>{employee.dob}</td>
                <td>
                  <Link 
                  className="btn btn-primary mx-2"
                  to={`/ViewEmployee/${employee.id}`}
                  >
                    View</Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editEmployee/${employee.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteEmployee(employee.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
