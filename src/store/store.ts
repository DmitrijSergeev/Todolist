import {combineSlices, configureStore, ThunkAction, ThunkDispatch, UnknownAction} from "@reduxjs/toolkit";
import {todoListSlice} from "./todolist-reducer/todolist-reducer";
import {taskSlice} from "./task-reducer/task-reducer";

export const rootReducer = combineSlices(
    todoListSlice,
    taskSlice
)

export const store = configureStore({ reducer: rootReducer })

export type AppRootState = ReturnType<typeof store.getState>

// ❗ UnknownAction вместо AnyAction
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppRootState,
    unknown,
    UnknownAction
>

// export type AppDispatch = typeof store.dispatch
// ❗ UnknownAction вместо AnyAction
export type AppDispatch = ThunkDispatch<AppRootState, unknown, UnknownAction>