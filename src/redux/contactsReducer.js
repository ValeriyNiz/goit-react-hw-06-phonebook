// import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContact } from './actions.js';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  {
    items: JSON.parse(window.localStorage.getItem('contacts')) ?? [
      { id: 'id-1', name: 'Vladimir Zelenskiy', number: '253-32-45' },
      { id: 'id-2', name: 'Aleksey Arestovich', number: '123-78-96' },
      { id: 'id-3', name: 'Valeriy Zalugniy', number: '897-56-14' },
      { id: 'id-4', name: 'Igor Terehov', number: '344-56-97' },
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
