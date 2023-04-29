import { createSlice, createAction, createReducer } from "@reduxjs/toolkit";
import { RootState } from "../Services/configureStore"
import { parentKeys, user } from "../Actions"

type UserObject = {
    user:object | null,
    isLoggedIn: boolean
}
const initState:UserObject = {
    user: null,
    isLoggedIn: false
}

export const setLogin = createAction<boolean>(user.SET_LOGIN)
export const logout = createAction<boolean>(user.SET_LOGOUT)

const reducer = createReducer(
    initState,
    (builder) => {
        builder.addCase(setLogin, (state, action) => {
            return {...state, isLoggedIn:action.payload}
        }).addCase(logout, (state, action) => {
            return {...state, isLoggedIn:action.payload, user:null}
        })
    }
)

export const getUser = (state: RootState):UserObject => state[parentKeys.user]

export default reducer