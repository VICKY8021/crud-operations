import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import EmpCreate from "./EmpCreate";
import EmpEdit from "./EmpEdit";
import EmpView from "./EmpView";

const Routing = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />{" "}
          <Route path="/employee/create" element={<EmpCreate />} />{" "}
          <Route path="/employee/edit/:empId" element={<EmpEdit />} />{" "}
          <Route path="/employee/view/:empId" element={<EmpView />} />{" "}
        </Routes>{" "}
      </Router>{" "}
    </div>
  );
};

export default Routing;
