import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        allTodos: [], 
        edit: { todo: {}, isEdit: false },
    },
    reducers: {
        // Save Todo
        add: (state, action) => {
            return {
                ...state,
                allTodos: [action.payload, ...state.allTodos],
            }
        },
        // Delete Todo
        remove: (state, action) => {
            return {
                ...state,
                allTodos: state.allTodos.filter((item) => item._id !== action.payload)
            }
        },
        // Edit Todo
        edit: (state, action) => {
            return {
                ...state,
                edit: { todo: action.payload, isEdit: true },
            }
        },

        // Update Todo
        update: (state, action) => {
            return {
                ...state,
                allTodos: state.allTodos.map((item) => item._id === action.payload._id ? action.payload : item),
                edit: { todo: {}, isEdit: false },
            }
        }

    },
})

export const { add, remove, edit, update } = todoSlice.actions
export default todoSlice.reducer;