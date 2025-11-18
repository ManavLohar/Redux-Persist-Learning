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
  filter: true,
  formVisibility: false,
  deleteConfirmBoxVisibility: false,
  selectedUser: [],
};

export const testSlice = createSlice({
  name: "testSlice",
  initialState,
  reducers: {
    toggleFormVisibility: (state) => {
      state.formVisibility = !state.formVisibility;
    },
    toggleDeleteBoxVisibility: (state) => {
      state.deleteConfirmBoxVisibility = !state.deleteConfirmBoxVisibility;
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
      state.userData = state.userData.filter(
        (user) => user.id !== action.payload
      );
    },
    handleSelectedUser: (state, action) => {
      let userId = action.payload;
      if (state.selectedUser?.includes(userId)) {
        const filteredUser = state.selectedUser.filter(
          (user) => user !== userId
        );
        state.selectedUser = filteredUser;
      } else {
        if (!state.selectedUser) state.selectedUser = [];
        state.selectedUser?.push(userId);
      }
    },
    deleteAll: (state, action) => {
      for (let i = 0; i <= state.selectedUser.length; i++) {
        state.userData = state.userData.filter(
          (user) => user.id !== state.selectedUser[i]
        );
      }
      state.selectedUser = [];
    },
  },
});

export const {
  toggleFormVisibility,
  toggleDeleteBoxVisibility,
  addUser,
  setCurrentUser,
  editUser,
  deleteUser,
  handleSelectedUser,
  deleteAll,
} = testSlice.actions;

export default testSlice.reducer;
