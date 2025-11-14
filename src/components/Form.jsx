import React from "react";
import "./Form.scss";
import { useFormik } from "formik";
import { formValidationSchema } from "../Schema/FormValidationSchema.js";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import {
  addUser,
  editUser,
  toggleFormVisibility,
} from "./redux/slices/testSlice.js";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Form = () => {
  const dispatch = useDispatch();
  const initialValues = {
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

  const selectedUser = useSelector((state) => state.testSlice.user);

  const isEditMode = Boolean(selectedUser.id);

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    enableReinitialize: true,
    initialValues: selectedUser,
    validationSchema: formValidationSchema,
    onSubmit: (values, { resetForm }) => {
      const newUser = {
        id: uuidv4(),
        ...values,
      };
      if (isEditMode) {
        dispatch(editUser(values));
      } else {
        dispatch(addUser(newUser));
      }
      resetForm();
      dispatch(toggleFormVisibility());
    },
  });

  return (
    <div className="formMainBox">
      <div className="formBox">
        <div className="closeBtn">
          <IoIosCloseCircleOutline
            onClick={() => dispatch(toggleFormVisibility())}
          />
        </div>
        <h2>{isEditMode ? "Edit User" : "Add User"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="inputField">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.name && errors.name ? (
              <p className="formError">{errors.name}</p>
            ) : null}
          </div>
          <div className="inputField">
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {touched.email && errors.email ? (
              <p className="formError">{errors.email}</p>
            ) : null}
          </div>
          <div className="inputField">
            <label>Mobile Number</label>
            <input
              type="text"
              name="mobileno"
              value={values.mobileno}
              onChange={handleChange}
            />
            {touched.mobileno && errors.mobileno ? (
              <p className="formError">{errors.mobileno}</p>
            ) : null}
          </div>
          <div className="inputField">
            <label>Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={values.dob}
              onChange={handleChange}
            />
            {touched.dob && errors.dob ? (
              <p className="formError">{errors.dob}</p>
            ) : null}
          </div>
          <div className="inputField">
            <label>Gender</label>
            <label>
              <input
                type="radio"
                name="gender"
                value={true}
                checked={values.gender === true}
                onChange={() => setFieldValue("gender", true)}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value={false}
                checked={values.gender === false}
                onChange={() => setFieldValue("gender", false)}
              />
              Female
            </label>
            {touched.gender && errors.gender ? (
              <p className="formError">{errors.gender}</p>
            ) : null}
          </div>
          <div className="inputField">
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={values.address}
              onChange={handleChange}
            />
            {touched.address && errors.address ? (
              <p className="formError">{errors.address}</p>
            ) : null}
          </div>
          <div className="inputField">
            <label>City</label>
            <input
              type="text"
              name="city"
              value={values.city}
              onChange={handleChange}
            />
            {touched.city && errors.city ? (
              <p className="formError">{errors.city}</p>
            ) : null}
          </div>
          <div className="inputField">
            <label>Hobbies</label>
            {["Reading", "Traveling", "Cooking"].map((hobby) => (
              <label key={hobby}>
                <input
                  type="checkbox"
                  name="hobbies"
                  value={hobby}
                  checked={values.hobbies.includes(hobby)}
                  onChange={handleChange}
                />{" "}
                {hobby}
              </label>
            ))}
            {touched.hobbies && errors.hobbies ? (
              <p className="formError">{errors.hobbies}</p>
            ) : null}
          </div>
          <div className="inputField">
            <label>Status</label>
            <input
              type="checkbox"
              name="status"
              value={values.status}
              onChange={handleChange}
            />
            {touched.status && errors.status ? (
              <p className="formError">{errors.status}</p>
            ) : null}
          </div>
          <button type="submit">{isEditMode ? "Edit" : "Add"}</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
