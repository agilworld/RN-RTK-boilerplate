import { createAction, createReducer } from "@reduxjs/toolkit";
import { RootState } from "../Services/configureStore"
import { todo, parentKeys, DefaultApiStates, DefaultApiStatesTypes } from "../Actions"

type InternalTodoTypes = {
    todos:Array<Object> | null
}

export type TodoTypes = InternalTodoTypes & DefaultApiStatesTypes

const initialStates:TodoTypes = {
    ...DefaultApiStates,
    todos: []
}

export const listRequest = createAction(todo.LIST_DATA)
export const listedSuccess = createAction<Array<any>>(todo.LIST_DATA_SUCCESS)
export const listedFailure = createAction(todo.LIST_DATA_FAILURE)

const reducer = createReducer(
    initialStates,
    (builder) => {
        builder.addCase(listRequest, (state, action)=> {
            return {...state, fetching:true, data:action.payload, failure:false}
        }).addCase(listedSuccess, (state, action) => {
            return {...state, fetching:false, todos:action.payload}
        }).addCase(listedFailure, (state) => {
            return {...state, failure:true, fetching:false, todos:[]}
        })
    }
)

export const todoCreator = todo

export const getTodo = (state: RootState):TodoTypes => state[parentKeys.todo]

export default reducer

