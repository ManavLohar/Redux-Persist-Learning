import { createSlice } from "@reduxjs/toolkit";
import { userData } from "../../../data";

const initialState = {
  userData: userData,
  user: {
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
  },
  formVisibility: true,
};

export const testSlice = createSlice({
  name: "testSlice",
  initialState,
  reducers: {
    toggleFormVisibility: (state) => {
      state.formVisibility = !state.formVisibility;
    },
    addUser: (state, action) => {
      state.userData.push(action.payload);
    },
  },
});

export const { toggleFormVisibility, addUser } = testSlice.actions;

export default testSlice.reducer;
