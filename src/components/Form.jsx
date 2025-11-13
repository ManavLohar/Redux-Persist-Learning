import React from "react";
import "./Form.scss";
import { useFormik } from "formik";
import { formValidationSchema } from "../Schema/FormValidationSchema.js";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";

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
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues,
    formValidationSchema,
    onSubmit: (values, { resetForm }) => {
      const newUser = {
        id: uuidv4(),
        ...values,
      };
      console.log(newUser)
      dispatch(addUser(newUser));
      resetForm();
    },
  });

  return (
    <div className="formMainBox">
      <div className="formBox">
        <form onSubmit={handleSubmit}>
          <div className="inputField">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
            {touched.name && errors.name ? <p>{errors.name}</p> : null}
          </div>
          <div className="inputField">
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {touched.email && errors.email ? <p>{errors.email}</p> : null}
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
              <p>{errors.mobileno}</p>
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
            {touched.dob && errors.dob ? <p>{errors.dob}</p> : null}
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
            {touched.gender && errors.gender ? <p>{errors.gender}</p> : null}
          </div>
          <div className="inputField">
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={values.address}
              onChange={handleChange}
            />
            {touched.name && errors.address ? <p>{errors.address}</p> : null}
          </div>
          <div className="inputField">
            <label>City</label>
            <input
              type="text"
              name="city"
              value={values.city}
              onChange={handleChange}
            />
            {touched.city && errors.city ? <p>{errors.city}</p> : null}
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
            {touched.hobbies && errors.hobbies ? <p>{errors.hobbies}</p> : null}
          </div>
          <div className="inputField">
            <label>Status</label>
            <input
              type="text"
              name="status"
              value={values.status}
              onChange={handleChange}
            />
            {touched.status && errors.status ? <p>{errors.status}</p> : null}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
