import React from "react";
import "./DeleteConfirmationBox.scss";
import {
  deleteUser,
  toggleDeleteBoxVisibility,
} from "../redux/slices/testSlice";
import { useDispatch } from "react-redux";

const DeleteConfirmationBox = ({ userId, setUserId }) => {
  const dispatch = useDispatch();
  const handleDelete = (input) => {
    if (input === "Yes") {
      dispatch(deleteUser(userId));
      setUserId("");
      dispatch(toggleDeleteBoxVisibility());
    } else {
      dispatch(toggleDeleteBoxVisibility());
    }
  };
  return (
    <div className="deleteConfirmationBox">
      <div className="deleteConfirmation">
        <h4>You want to delete this user?</h4>
        <div className="deleteBtn">
          <input
            type="button"
            value="Yes"
            onClick={(e) => handleDelete(e.target.value)}
          />
          <input
            type="button"
            value="No"
            onClick={(e) => handleDelete(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationBox;
