import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EmpView = () => {
  const { empId } = useParams();
  const [empData, setEmpData] = useState({});

  const empView = () => {
    axios.get(`http://localhost:8000/dashboard/${empId}`).then((res) => {
      console.log("@@@@@@@@@", res.data);
      setEmpData(res.data);
    });
  };

  useEffect(() => {
    empView();
  }, []);

  return (
    <div className="offset-lg-3 col-lg-6">
      <div className="card">
        <div className="card-header text-center">
          <h2>Employee Details</h2>
        </div>
        <div className="card-body">
          {empData && (
            <div className="d-flex flex-column align-items-center">
              <h2>
                Name: <b>{empData.name}</b>
              </h2>
              <h2>
                Phone: <b>{empData.phone}</b>
              </h2>
              <h2>
                Email: <b>{empData.email}</b>
              </h2>
              <div className="mt-4">
                <Link className="btn btn-danger" to="/">
                  Back
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmpView;
