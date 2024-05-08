import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getContacts,
  getDeleteContact,
  postContact,
} from "./../../services/api";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkApi) => {
    try {
      const response = await getContacts();
      return response; // ТЕ, ЩО ПОВЕРТАЄТЬСЯ З САНКИ ПОТРАПЛЯЄ В action.payload
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (finalContact, thunkApi) => {
    try {
      const response = await postContact(finalContact);

      return response; // ТЕ, ЩО ПОВЕРТАЄТЬСЯ З САНКИ ПОТРАПЛЯЄ В action.payload
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkApi) => {
    try {
      const response = await getDeleteContact(contactId);

      return response; // ТЕ, ЩО ПОВЕРТАЄТЬСЯ З САНКИ ПОТРАПЛЯЄ В action.payload
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
