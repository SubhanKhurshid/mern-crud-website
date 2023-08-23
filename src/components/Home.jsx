import React, { useEffect, useState } from "react";
import UserService from "../Services/UserService";
import User from "./User";

const Home = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await UserService.getData();
        setUser(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  const onDelete = (e, id) => {
    e.preventDefault();
    UserService.deleteUser(id).then((res) => {
      if (user) {
        setUser((prevElement) => {
          return prevElement.filter((use) => use._id !== id);
        });
      }
    });
  };

  return (
    <div className="mt-5">
      <div className="container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Job</th>
              <th scope="col">Number</th>
              <th scope="col">Action 1</th>
              <th scope="col">Action 2</th>
            </tr>
          </thead>

          <tbody>
            {user.map((use) => (
              <User
                user={use}
                key={use.id}
                setUser={use.setUser}
                onDelete={onDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
