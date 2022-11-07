// import { createSlice } from "@reduxjs/toolkit";
// import ListOfContact from "../data/ListOfContact";
// export const contactSlice = createSlice({
//   name: "contacts",
//   initialState: { value: ListOfContact },
//   reducers: {
//     addContact: (state, action) => {
//       state.value.push(action.payload);
//     },
//     deleteContact: (state, action) => {
//       state.value = state.value.filter(
//         (contact) => contact.id !== action.payload.id
//       );
//     },
//     updateContact: (state, action) => {
//       state.value.map((contact) => {
//         if (contact.id === action.payload.id) {
//           contact.name = action.payload.name;
//         }
//       });
//     },
//   },
// });

// export default contactSlice.reducer;
// export const { addContact, deleteContact, updateContact } =
//   contactSlice.actions;
