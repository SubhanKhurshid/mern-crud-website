import React from "react";
import { useNavigate } from "react-router-dom";
const User = ({ user, onDelete }) => {
  const navigate = useNavigate();

  const updateElement = (e, id) => {
    e.preventDefault();
    navigate(`/editData/${id}`);
  };

  return (
    <tr key={user.id}>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.job}</td>
      <td>{user.number}</td>

      <td>
        <button
          onClick={(e, id) => updateElement(e, user._id)}
          type="button"
          class="btn btn-warning"
        >
          Update
        </button>
      </td>
      <td>
        <button
          onClick={(e, id) => onDelete(e, user._id)}
          type="button"
          class="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default User;
