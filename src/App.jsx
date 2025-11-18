import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import Form from "./components/Form";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import {
  deleteAll,
  deleteUser,
  handleSelectedUser,
  setCurrentUser,
  toggleDeleteBoxVisibility,
  toggleFormVisibility,
} from "./components/redux/slices/testSlice";
import DeleteConfirmationBox from "./components/DeleteConfirmationBox/DeleteConfirmationBox";

const App = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.testSlice.userData);
  const formVisibility = useSelector((state) => state.testSlice.formVisibility);

  const emptyUser = {
    id: "",
    name: "",
    email: "",
    mobileno: "",
    dob: "",
    gender: null,
    address: "",
    city: "",
    hobbies: [],
    status: false,
  };

  const deleteBoxVisibility = useSelector(
    (state) => state.testSlice.deleteConfirmBoxVisibility
  );
  const selectedUser = useSelector((state) => state.testSlice.selectedUser);
  const [userId, setUserId] = useState("");

  return (
    <>
      <div className="mainBox">
        <div className="tableBox">
          <div className="tableBtn">
            <button
              onClick={() => {
                dispatch(setCurrentUser(emptyUser));
                dispatch(toggleFormVisibility());
              }}
            >
              Add User
            </button>
            {selectedUser?.length > 0 ? (
              <button onClick={() => dispatch(deleteAll())}>Delete All</button>
            ) : null}
          </div>
          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {userData &&
                userData.map((user, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        type="checkbox"
                        value={user.id}
                        checked={selectedUser?.includes(user.id)}
                        onChange={(e) =>
                          dispatch(handleSelectedUser(e.target.value))
                        }
                      />{" "}
                      {index + 1}
                    </td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <div className="btn">
                        <FaRegEdit
                          onClick={() => {
                            dispatch(setCurrentUser(user));
                            dispatch(toggleFormVisibility());
                          }}
                        />
                        <MdOutlineDelete
                          // onClick={() => dispatch(deleteUser(user.id))}
                          onClick={() => {
                            setUserId(user.id);
                            dispatch(toggleDeleteBoxVisibility());
                          }}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      {formVisibility ? <Form /> : null}
      {deleteBoxVisibility ? (
        <DeleteConfirmationBox userId={userId} setUserId={setUserId} />
      ) : null}
    </>
  );
};

export default App;
