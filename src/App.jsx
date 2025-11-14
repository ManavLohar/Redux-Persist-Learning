import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import Form from "./components/Form";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import {
  deleteUser,
  setCurrentUser,
  toggleFormVisibility,
} from "./components/redux/slices/testSlice";

const App = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.testSlice.userData);
  const formVisibility = useSelector((state) => state.testSlice.formVisibility);
  // console.log("formVisibility: ", formVisibility);

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

  return (
    <>
      <div className="mainBox">
        <div className="tableBox">
          <button
            onClick={() => {
              dispatch(setCurrentUser(emptyUser));
              dispatch(toggleFormVisibility());
            }}
          >
            Add User
          </button>
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
                    <td>{index + 1}</td>
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
                          onClick={() => dispatch(deleteUser(user.id))}
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
    </>
  );
};

export default App;
