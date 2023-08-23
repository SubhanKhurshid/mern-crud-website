import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserService from "../Services/UserService";

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [initial, setInitial] = useState({
    id: id,
    username: "",
    email: "",
    job: "",
    number: "",
  });

  const setData = (e) => {
    const value = e.target.value;
    setInitial({ ...initial, [e.target.name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await UserService.getUserById(id);
        setInitial(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  const updateUser = (e) => {
    e.preventDefault();
    UserService.updateUser(id, initial)
      .then((response) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <h1 className="display-4 mt-4 text-center fw-bold">
        Edit Details Here !
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
        <button onClick={updateUser} type="button" class="btn btn-info">
          Update
        </button>
      </div>
    </div>
  );
};

export default Edit;
