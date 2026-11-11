import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://jsonplaceholder.typicode.com/todos";

// get operations
export const fetchToDos = createAsyncThunk(
  "todos/fetch",
  async (_, thunkAPI) => {
    try {
        const res = await fetch(BASE_URL)
        return await res.json()
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message)
    }
  },
);
