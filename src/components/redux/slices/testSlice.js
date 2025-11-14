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
  // user: {},
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
    setCurrentUser: (state, action) => {
      state.user = action.payload;
    },
    editUser: (state, action) => {
      const updatedUser = action.payload;
      const index = state.userData.findIndex(
        (user) => user.id === updatedUser.id
      );
      if (index !== -1) {
        state.userData[index] = updatedUser;
      }
    },
    deleteUser: (state, action) => {
      console.log(action.payload);
      state.userData = userData.filter((user) => user.id !== action.payload);
    },
  },
});

export const {
  toggleFormVisibility,
  addUser,
  setCurrentUser,
  editUser,
  deleteUser,
} = testSlice.actions;

export default testSlice.reducer;
