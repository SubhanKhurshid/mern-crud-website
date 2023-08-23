import React, { useState } from "react";
import UserService from "../Services/UserService.jsx";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [initial, setInitial] = useState({
    id: "",
    username: "",
    email: "",
    job: "",
    number: "",
  });

  const setData = (e) => {
    const value = e.target.value;
    setInitial({ ...initial, [e.target.name]: value });
  };

  const addData = (e) => {
    e.preventDefault();
    UserService.saveData(initial)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/");
  };

  return (
    <div className="container">
      <h1 className="display-4 mt-4 text-center fw-bold">
        Register Yourself Here !
      </h1>
      <form className="mt-4">
        <div class="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            class="form-control"
            id="username"
            placeholder="Enter Your Username"
            name="username"
            value={initial.username}
            onChange={(e) => setData(e)}
          />
        </div>
        <div class="form-group">
          <label for="email">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Enter Your Email"
            name="email"
            value={initial.email}
            onChange={(e) => setData(e)}
          />
        </div>
        <div class="form-group">
          <label for="job">Job</label>
          <input
            type="text"
            class="form-control"
            id="job"
            placeholder="Enter Your Job"
            name="job"
            value={initial.job}
            onChange={(e) => setData(e)}
          />
        </div>
        <div class="form-group">
          <label for="number">Phone Number</label>
          <input
            type="phone"
            class="form-control"
            id="number"
            placeholder="Enter Your Phone Number"
            name="number"
            value={initial.number}
            onChange={(e) => setData(e)}
          />
        </div>
      </form>
      <div className="mt-2">
        <button onClick={(e) => addData(e)} type="button" class="btn btn-info">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Register;
