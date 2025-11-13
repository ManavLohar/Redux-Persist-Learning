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
  formVisibility: false,
};

export const testSlice = createSlice({
  name: "testSlice",
  initialState,
  reducers: {
    toggleFormVisibility: (state) => {
      state.formVisibility = !state.formVisibility;
    },
  },
});

export const { toggleFormVisibility } = testSlice.reducer;  

export default testSlice.actions;
