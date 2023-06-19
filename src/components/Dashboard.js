/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const EmpEdit = (id) => {
    navigate("/employee/edit/" + id);
  };

  const EmpDelete = (id) => {
    if (window.confirm("Do you want to remove")) {
      axios.delete(`http://localhost:8000/dashboard/${id}`).then((res) => {
        alert("Removed Successful");
        window.location.reload();
      });
    }
  };

  const EmpView = (id) => {
    navigate("/employee/view/" + id);
  };

  const empData = () => {
    axios.get("http://localhost:8000/dashboard").then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    empData();
  }, []);

  return (
    <div className="container">
      <style>
        {" "}
        {`
        th {
          background-color: black !important; 
          color: white !important;
        }
        `}{" "}
      </style>{" "}
      <div className="card">
        <div className="card-title">
          <h1 className="card-header text-center"> Employees Details </h1>{" "}
        </div>{" "}
        <div className="card-body">
          <div>
            <Link
              to="/employee/create"
              className="btn btn-success"
              style={{ float: "right" }}
            >
              {" "}
              Add New +{" "}
            </Link>{" "}
          </div>{" "}
          <br />
          <br />
          <table className="table table-bordered">
            <thead className="card-header">
              <tr>
                <th> ID </th> <th> Name </th> <th> Email </th> <th> Phone </th>{" "}
                <th> Action </th>{" "}
              </tr>{" "}
            </thead>{" "}
            <tbody>
              {" "}
              {data &&
                data.map((item, index) => (
                  <tr key={index}>
                    <td> {index + 1} </td> <td> {item.name} </td>{" "}
                    <td> {item.email} </td> <td> {item.phone} </td>{" "}
                    <td>
                      <a
                        onClick={() => {
                          EmpEdit(item.id);
                        }}
                        className="btn btn-success"
                        href=""
                      >
                        {" "}
                        Edit{" "}
                      </a>{" "}
                      <a
                        onClick={() => {
                          EmpDelete(item.id);
                        }}
                        className="btn btn-danger"
                        href=""
                      >
                        {" "}
                        Delete{" "}
                      </a>{" "}
                      <a
                        onClick={() => {
                          EmpView(item.id);
                        }}
                        className="btn btn-primary"
                        href=""
                      >
                        {" "}
                        View{" "}
                      </a>{" "}
                    </td>{" "}
                  </tr>
                ))}{" "}
            </tbody>{" "}
          </table>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Dashboard;
