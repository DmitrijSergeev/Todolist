import {createSlice} from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'todolists',
    initialState: [],
    reducers: {}
})

export const todolistReducer = slice.reducer