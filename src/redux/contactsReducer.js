import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContact } from './actions.js';

export const contactsReducer = createReducer(
  {
    items: JSON.parse(window.localStorage.getItem('contacts')) ?? [
      { id: 'id-1', name: 'Vladimir Zelenskiy', number: '044-253-32-45' },
      { id: 'id-2', name: 'Aleksey Arestovich', number: '044-123-78-96' },
      { id: 'id-3', name: 'Valeriy Zalugniy', number: '044-897-56-14' },
      { id: 'id-4', name: 'Igor Terehov', number: '057-344-56-97' },
    ],
    filter: '',
  },
  {
    [addContact]: (state, action) => {
      const isNameExist = state.items.find(
        contact =>
          contact.name.toLowerCase() === action.payload.name.toLowerCase()
      );
      isNameExist
        ? alert(`${action.payload.name} is already in contacts`)
        : state.items.push(action.payload);
      window.localStorage.setItem('contacts', JSON.stringify(state.items));
    },
    [deleteContact]: (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
      window.localStorage.setItem('contacts', JSON.stringify(state.items));
    },
    [filterContact]: (state, action) => {
      state.filter = action.payload.toLowerCase();
    },
  }
);
