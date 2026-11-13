import { createSlice } from "@reduxjs/toolkit";
import { addToDos, deleteToDo, fetchToDos, updateToDo } from "./toDoOperation";

const handlePending = state => {
    state.isLoading = true,
    state.error = null
}

const handleRejected = (state, action) => {
    state.isLoading = false,
    state.error = action.payload
}

export const toDosSlice = createSlice({
    name: "toDos",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },

    extraReducers: builder => {
        builder
            .addCase(fetchToDos.pending, handlePending)
            .addCase(fetchToDos.fulfilled, (state, action) => {
                state.isLoading = false
                state.items = action.payload.slice(0, 10)
            })
            .addCase(fetchToDos.rejected, handleRejected)
            // addToDos
            .addCase(addToDos.pending, handlePending)
            .addCase(addToDos.fulfilled, (state, action) => {
                state.isLoading = false
                state.items = action.payload.slice(0, 10)
            })
            .addCase(addToDos.rejected, handleRejected)
            // deleteToDo
            .addCase(deleteToDo.pending, handlePending)
            .addCase(deleteToDo.fulfilled, (state, action) => {
                state.isLoading = false
                state.items = action.payload.slice(0, 10)
            })
            .addCase(deleteToDo.rejected, handleRejected)
            // updateToDo
            .addCase(updateToDo.pending, handlePending)
            .addCase(updateToDo.fulfilled, (state, action) => {
                state.isLoading = false
                state.items = action.payload.slice(0, 10)
            })
            .addCase(updateToDo.rejected, handleRejected)
            
    }
})

export const toDosReducer = toDosSlice.reducer
