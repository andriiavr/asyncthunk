import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://jsonplaceholder.typicode.com/todos";

// get operations
export const fetchToDos = createAsyncThunk(
  "todos/fetch",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(BASE_URL);
      return await response.json();
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

export const addToDos = createAsyncThunk(
  "todos/add",
  async (text, thunkAPI) => {
    try {
      const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: text, completed: false }),
      });

      return await response.json();
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

export const deleteToDo = createAsyncThunk(
  "todos/deleteToDo",
  async (id, thunkAPI) => {
    try {
      await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
      })
      return id
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message)
    }
  }
)

export const updateToDo = createAsyncThunk(
  "todos/updateToDo",
  async (toDo, thunkAPI) => {
    try {
      const response = await fetch(`${BASE_URL}/${toDo.id}`, {
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ completed: !toDo.completed }) 
      })
      return await response.json()
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message)
    }
  }
)