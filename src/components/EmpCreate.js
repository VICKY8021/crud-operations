import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpCreate = () => {
  const [id, changeID] = useState("");
  const [name, changeName] = useState("");
  const [email, changeEmail] = useState("");
  const [phone, changePhone] = useState("");
  const [active, changeActive] = useState(true);
  const [nameError, setNameError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setNameError("Please enter a name");
      return;
    }

    const empData = { id, name, email, phone, active };

    axios.post("http://localhost:8000/dashboard", empData).then((res) => {
      alert("Saved Successfully");
      navigate("/");
    });
  };

  return (
    <div className="row">
      <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={handleSubmit}>
          <div className="card" style={{ textAlign: "left" }}>
            <div className="card-title">
              <h2 className="card-header text-center">Add Employee</h2>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>ID</label>
                    <input
                      value={id}
                      disabled="disabled"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      value={name}
                      onChange={(e) => {
                        changeName(e.target.value);
                        setNameError("");
                      }}
                      className="form-control"
                      required
                    />
                    {nameError && (
                      <span className="text-danger">{nameError}</span>
                    )}
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      value={email}
                      type="email"
                      onChange={(e) => changeEmail(e.target.value)}
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      value={phone}
                      type="number"
                      onChange={(e) => changePhone(e.target.value)}
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      checked={active}
                      onChange={(e) => changeActive(e.target.checked)}
                      className="form-check-input"
                    />
                    <label className="form-check-label">Is Active</label>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div
                    className="form-group"
                    style={{ display: "flex", gap: "5px" }}
                  >
                    <button type="submit" className="btn btn-success">
                      Submit
                    </button>
                    <Link to="/" className="btn btn-danger">
                      Back
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmpCreate;
