import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      const isNameExist = state.items.find(
        contact =>
          contact.name.toLowerCase() === action.payload.name.toLowerCase()
      );
      isNameExist
        ? alert(`${action.payload.name} is already in contacts`)
        : state.items.push(action.payload);
      window.localStorage.setItem('contacts', JSON.stringify(state.items));
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
      window.localStorage.setItem('contacts', JSON.stringify(state.items));
    },
    filterContact(state, action) {
      state.filter = action.payload.toLowerCase();
    },
  },
});

export const { filterContact, addContact, deleteContact } =
  contactsSlice.actions;
